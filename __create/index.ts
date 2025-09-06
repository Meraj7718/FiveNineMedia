// import { AsyncLocalStorage } from 'node:async_hooks';
// import nodeConsole from 'node:console';
// import { skipCSRFCheck } from '@auth/core';
// import Credentials from '@auth/core/providers/credentials';
// import { authHandler, initAuthConfig } from '@hono/auth-js';
// import { Pool, neonConfig } from '@neondatabase/serverless';
// import { hash, verify } from 'argon2';
// import { Hono } from 'hono';
// import { contextStorage, getContext } from 'hono/context-storage';
// import { cors } from 'hono/cors';
// import { proxy } from 'hono/proxy';
// import { requestId } from 'hono/request-id';
// import { createHonoServer } from 'react-router-hono-server/node';
// import { serializeError } from 'serialize-error';
// import ws from 'ws';
// import NeonAdapter from './adapter';
// import { getHTMLForErrorPage } from './get-html-for-error-page';
// import { isAuthAction } from './is-auth-action';
// import { API_BASENAME, api } from './route-builder';
// import sql from "../src/app/api/utils/sql.js";




// neonConfig.webSocketConstructor = ws;

// const als = new AsyncLocalStorage<{ requestId: string }>();

// for (const method of ['log', 'info', 'warn', 'error', 'debug'] as const) {
//   const original = nodeConsole[method].bind(console);

//   console[method] = (...args: unknown[]) => {
//     const requestId = als.getStore()?.requestId;
//     if (requestId) {
//       original(`[traceId:${requestId}]`, ...args);
//     } else {
//       original(...args);
//     }
//   };
// }

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });
// const adapter = NeonAdapter(pool);

// const app = new Hono();

// app.use('*', requestId());

// app.use('*', (c, next) => {
//   const requestId = c.get('requestId');
//   return als.run({ requestId }, () => next());
// });

// app.use(contextStorage());

// app.onError((err, c) => {
//   if (c.req.method !== 'GET') {
//     return c.json(
//       {
//         error: 'An error occurred in your app',
//         details: serializeError(err),
//       },
//       500
//     );
//   }
//   return c.html(getHTMLForErrorPage(err), 200);
// });

// if (process.env.CORS_ORIGINS) {
//   app.use(
//     '/*',
//     cors({
//       origin: process.env.CORS_ORIGINS.split(',').map((origin) => origin.trim()),
//     })
//   );
// }

// if (process.env.AUTH_SECRET) {
//   app.use(
//     '*',
//     initAuthConfig((c) => ({
//       secret: c.env.AUTH_SECRET,
//       pages: {
//         signIn: '/account/signin',
//         signOut: '/account/logout',
//       },
//       skipCSRFCheck,
//       session: {
//         strategy: 'jwt',
//       },
//       callbacks: {
//         session({ session, token }) {
//           if (token.sub) {
//             session.user.id = token.sub;
//           }
//           return session;
//         },
//       },
//       cookies: {
//         csrfToken: {
//           options: {
//             secure: true,
//             sameSite: 'none',
//           },
//         },
//         sessionToken: {
//           options: {
//             secure: true,
//             sameSite: 'none',
//           },
//         },
//         callbackUrl: {
//           options: {
//             secure: true,
//             sameSite: 'none',
//           },
//         },
//       },
//       providers: [
//         Credentials({
//           id: 'credentials-signin',
//           name: 'Credentials Sign in',
//           credentials: {
//             email: {
//               label: 'Email',
//               type: 'email',
//             },
//             password: {
//               label: 'Password',
//               type: 'password',
//             },
//           },
//           authorize: async (credentials) => {
//             const { email, password } = credentials;
//             if (!email || !password) {
//               return null;
//             }
//             if (typeof email !== 'string' || typeof password !== 'string') {
//               return null;
//             }

//             // logic to verify if user exists
//             const user = await adapter.getUserByEmail(email);
//             if (!user) {
//               return null;
//             }
//             const matchingAccount = user.accounts.find(
//               (account) => account.provider === 'credentials'
//             );
//             const accountPassword = matchingAccount?.password;
//             if (!accountPassword) {
//               return null;
//             }

//             const isValid = await verify(accountPassword, password);
//             if (!isValid) {
//               return null;
//             }

//             // return user object with the their profile data
//             return user;
//           },
//         }),
//         Credentials({
//           id: 'credentials-signup',
//           name: 'Credentials Sign up',
//           credentials: {
//             email: {
//               label: 'Email',
//               type: 'email',
//             },
//             password: {
//               label: 'Password',
//               type: 'password',
//             },
//           },
//           authorize: async (credentials) => {
//             const { email, password } = credentials;
//             if (!email || !password) {
//               return null;
//             }
//             if (typeof email !== 'string' || typeof password !== 'string') {
//               return null;
//             }

//             // logic to verify if user exists
//             const user = await adapter.getUserByEmail(email);
//             if (!user) {
//               const newUser = await adapter.createUser({
//                 id: crypto.randomUUID(),
//                 emailVerified: null,
//                 email,
//               });
//               await adapter.linkAccount({
//                 extraData: {
//                   password: await hash(password),
//                 },
//                 type: 'credentials',
//                 userId: newUser.id,
//                 providerAccountId: newUser.id,
//                 provider: 'credentials',
//               });
//               return newUser;
//             }
//             return null;
//           },
//         }),
//       ],
//     }))
//   );
// }
// app.all('/integrations/:path{.+}', async (c, next) => {
//   const queryParams = c.req.query();
//   const url = `${process.env.NEXT_PUBLIC_CREATE_BASE_URL ?? 'https://www.create.xyz'}/integrations/${c.req.param('path')}${Object.keys(queryParams).length > 0 ? `?${new URLSearchParams(queryParams).toString()}` : ''}`;

//   return proxy(url, {
//     method: c.req.method,
//     body: c.req.raw.body ?? null,
//     // @ts-ignore - this key is accepted even if types not aware and is
//     // required for streaming integrations
//     duplex: 'half',
//     redirect: 'manual',
//     headers: {
//       ...c.req.header(),
//       'X-Forwarded-For': process.env.NEXT_PUBLIC_CREATE_HOST,
//       'x-createxyz-host': process.env.NEXT_PUBLIC_CREATE_HOST,
//       Host: process.env.NEXT_PUBLIC_CREATE_HOST,
//       'x-createxyz-project-group-id': process.env.NEXT_PUBLIC_PROJECT_GROUP_ID,
//     },
//   });
// });

// app.use('/api/auth/*', async (c, next) => {
//   if (isAuthAction(c.req.path)) {
//     return authHandler()(c, next);
//   }
//   return next();
// });
// app.route(API_BASENAME, api);

// export default await createHonoServer({
//   app,
//   defaultLogger: false,
// });


// import { AsyncLocalStorage } from 'node:async_hooks';
// import nodeConsole from 'node:console';
// import { Hono } from 'hono';
// import { requestId } from 'hono/request-id';
// import { contextStorage } from 'hono/context-storage';
// import { cors } from 'hono/cors';
// import { createHonoServer } from 'react-router-hono-server/node';
// // import ws from 'ws'; // Removed unused import
// import sql from '../src/app/api/utils/sql.js';
// import contactRoute from '../src/app//api/contact/route.js'; //<- updated import
// import quotesRoute from  '../src/app/api/quotes/route.js'

// // AsyncLocalStorage for requestId logging
// const als = new AsyncLocalStorage<{ requestId: string }>();
// for (const method of ['log', 'info', 'warn', 'error', 'debug'] as const) {
//   const original = nodeConsole[method].bind(console);
//   console[method] = (...args: unknown[]) => {
//     const requestId = als.getStore()?.requestId;
//     if (requestId) {
//       original(`[traceId:${requestId}]`, ...args);
//     } else {
//       original(...args);
//     }
//   };
// }

// const app = new Hono();

// // Middleware
// app.use('*', requestId());
// app.use('*', (c, next) => {
//   const requestId = c.get('requestId');
//   return als.run({ requestId }, () => next());
// });
// app.use(contextStorage());

// if (process.env.CORS_ORIGINS) {
//   app.use(
//     '/*',
//     cors({
//       origin: process.env.CORS_ORIGINS.split(',').map((origin) => origin.trim()),
//     })
//   );
// }

// // Mount the contact route under /api/contact
// app.route('/api/contact', contactRoute);
// app.route('/api/quotes', quotesRoute);


// // Optional: add a health check route
// app.get('/api/health', (c) => c.json({ status: 'ok' }));

// // Error handling
// app.onError((err, c) => {
//   console.error('Unhandled error:', err);
//   return c.json({ error: 'Internal Server Error' }, 500);
// });

// // Debug logging at top level
// console.log('DEBUG ENV:', {
//   NODE_ENV: process.env.NODE_ENV,
//   DATABASE_URL: process.env.DATABASE_URL,
//   CORS_ORIGINS: process.env.CORS_ORIGINS,
//   NEXT_PUBLIC_CREATE_BASE_URL: process.env.NEXT_PUBLIC_CREATE_BASE_URL,
//   NEXT_PUBLIC_CREATE_HOST: process.env.NEXT_PUBLIC_CREATE_HOST,
//   NEXT_PUBLIC_PROJECT_GROUP_ID: process.env.NEXT_PUBLIC_PROJECT_GROUP_ID,
// });
// console.log('DEBUG process.cwd():', process.cwd());

// const indexPromise = createHonoServer({ app, defaultLogger: false });
// export default indexPromise;

import { AsyncLocalStorage } from 'node:async_hooks';
import nodeConsole from 'node:console';
import path from 'path';
import { Hono } from 'hono';
import { requestId } from 'hono/request-id';
import { contextStorage } from 'hono/context-storage';
import { cors } from 'hono/cors';
import { createHonoServer } from 'react-router-hono-server/node';
import sql from '../src/app/api/utils/sql.js';

// Safe route imports
import contactRouteRaw from '../src/app/api/contact/route.js';
import quotesRouteRaw from '../src/app/api/quotes/route.js';

const contactRoute = contactRouteRaw || {};
const quotesRoute = quotesRouteRaw || {};

// AsyncLocalStorage for requestId logging
const als = new AsyncLocalStorage<{ requestId: string }>();
for (const method of ['log', 'info', 'warn', 'error', 'debug'] as const) {
  const original = nodeConsole[method].bind(console);
  console[method] = (...args: unknown[]) => {
    const requestId = als.getStore()?.requestId;
    if (requestId) {
      original(`[traceId:${requestId}]`, ...args);
    } else {
      original(...args);
    }
  };
}

const app = new Hono();

// Middleware
app.use('*', requestId());
app.use('*', (c, next) => {
  const requestId = c.get('requestId');
  return als.run({ requestId }, () => next());
});
app.use(contextStorage());

// CORS setup
if (process.env.CORS_ORIGINS) {
  const origins = process.env.CORS_ORIGINS.split(',').map((origin) => origin.trim());
  app.use('/*', cors({ origin: origins }));
}

// Mount API routes safely
app.route('/api/contact', contactRoute);
app.route('/api/quotes', quotesRoute);

// Health check
app.get('/api/health', (c) => c.json({ status: 'ok' }));

// Error handling
app.onError((err, c) => {
  console.error('Unhandled error:', err);
  return c.json({ error: 'Internal Server Error' }, 500);
});

// Debug logging
console.log('DEBUG ENV:', {
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL,
  CORS_ORIGINS: process.env.CORS_ORIGINS,
  NEXT_PUBLIC_CREATE_BASE_URL: process.env.NEXT_PUBLIC_CREATE_BASE_URL,
  NEXT_PUBLIC_CREATE_HOST: process.env.NEXT_PUBLIC_CREATE_HOST,
  NEXT_PUBLIC_PROJECT_GROUP_ID: process.env.NEXT_PUBLIC_PROJECT_GROUP_ID,
});
console.log('DEBUG process.cwd():', process.cwd());

// Safe path usage example (if needed)
const routesPath = process.env.ROUTES_PATH || path.join(process.cwd(), 'src/app/api');

// Export Hono server
const indexPromise = createHonoServer({ app, defaultLogger: false });
export default indexPromise;
