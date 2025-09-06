// fetchWithHeaders.ts
const originalFetch = fetch;

const isBackend = () => typeof window === 'undefined';

const safeStringify = (value: unknown) =>
  JSON.stringify(value, (_k, v) => {
    if (v instanceof Date) return { __t: 'Date', v: v.toISOString() };
    if (v instanceof Error)
      return { __t: 'Error', v: { name: v.name, message: v.message, stack: v.stack } };
    return v;
  });

// TypeScript-safe postToParent
const postToParent = (level: keyof Console, text: string, extra: unknown) => {
  try {
    if (isBackend() || !window.parent || window.parent === window) {
      const logMethod = console[level] as unknown as (...args: unknown[]) => void;
      (logMethod ?? console.log)(text, extra);
      return;
    }

    window.parent.postMessage(
      {
        type: 'sandbox:web:console-write',
        __viteConsole: true,
        level,
        text,
        args: [safeStringify(extra)],
      },
      '*'
    );
  } catch {
    // silently ignore
  }
};

const getURLFromArgs = (...args: Parameters<typeof originalFetch>): string => {
  const [urlArg] = args;
  if (typeof urlArg === 'string') return urlArg;
  if (urlArg instanceof Request) return urlArg.url;
  return `${urlArg.protocol}//${urlArg.host}${urlArg.pathname}`;
};

const isFirstPartyURL = (url: string) => url.startsWith('/integrations') || url.startsWith('/api');

export const fetchWithHeaders = async function fetchWithHeaders(
  ...args: Parameters<typeof originalFetch>
): Promise<Response> {
  const [input, init] = args;
  const url = getURLFromArgs(input, init);

  const headers = {
    'x-createxyz-project-group-id': process.env.NEXT_PUBLIC_PROJECT_GROUP_ID,
  };

  const isExternalFetch = !isFirstPartyURL(url);
  if (isExternalFetch) return originalFetch(input, init);

  // Merge headers safely
  const finalHeaders = new Headers(init?.headers ?? {});
  Object.entries(headers).forEach(([key, value]) => {
    if (value) finalHeaders.set(key, value);
  });

  // Prepare Request object without mutating the original
  const fetchInput =
    input instanceof Request
      ? new Request(input, { headers: finalHeaders })
      : input;

  try {
    const baseURL = isBackend() ? process.env.NEXT_PUBLIC_CREATE_BASE_URL ?? 'https://www.create.xyz' : '';
    const result = await originalFetch(`${baseURL}${fetchInput}`, {
      ...init,
      headers: finalHeaders,
    });

    if (!result.ok) {
      postToParent(
        'error',
        `Failed to load resource: the server responded with status ${result.status}`,
        { url, status: result.status, statusText: result.statusText }
      );
    }

    return result;
  } catch (error) {
    postToParent('error', 'Fetch error', {
      url,
      error: error instanceof Error
        ? { name: error.name, message: error.message, stack: error.stack }
        : error,
    });
    throw error;
  }
};

export default fetchWithHeaders;