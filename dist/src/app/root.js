import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useAsyncError, useLocation, useRouteError, } from 'react-router';
import { useButton } from '@react-aria/button';
import { useCallback, useEffect, useRef, useState, Component, } from 'react';
import './global.css';
import fetch from '@/__create/fetch';
// @ts-ignore
import { SessionProvider } from '@auth/create/react';
import { useNavigate } from 'react-router';
import { serializeError } from 'serialize-error';
import { Toaster } from 'sonner';
// @ts-ignore
import { LoadFonts } from 'virtual:load-fonts.jsx';
import { HotReloadIndicator } from '../__create/HotReload';
import { useSandboxStore } from '../__create/hmr-sandbox-store';
import { useDevServerHeartbeat } from '../__create/useDevServerHeartbeat';
export const links = () => [];
if (globalThis.window && globalThis.window !== undefined) {
    globalThis.window.fetch = fetch;
}
function SharedErrorBoundary({ isOpen, children, }) {
    return (_jsx("div", { className: `fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`, children: _jsx("div", { className: "bg-[#18191B] text-[#F2F2F2] rounded-lg p-4 max-w-md w-full mx-4 shadow-lg", children: _jsxs("div", { className: "flex items-start gap-3", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx("div", { className: "w-8 h-8 bg-[#F2F2F2] rounded-full flex items-center justify-center", children: _jsx("span", { className: "text-black text-[1.125rem] leading-none", children: "\u26A0" }) }) }), _jsxs("div", { className: "flex flex-col gap-2 flex-1", children: [_jsxs("div", { className: "flex flex-col gap-1", children: [_jsx("p", { className: "font-light text-[#F2F2F2] text-sm", children: "App Error Detected" }), _jsx("p", { className: "text-[#959697] text-sm font-light", children: "It looks like an error occurred while trying to use your app." })] }), children] })] }) }) }));
}
/**
 * NOTE: we have a shared error boundary for the app, but then we also expose
 * this in case something goes wrong outside of the normal user's app flow.
 * React-router will mount this one
 */
export function ErrorBoundary({ error }) {
    return _jsx(SharedErrorBoundary, { isOpen: true });
}
function InternalErrorBoundary({ error: errorArg }) {
    const routeError = useRouteError();
    const asyncError = useAsyncError();
    const error = errorArg ?? asyncError ?? routeError;
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const animateTimer = setTimeout(() => setIsOpen(true), 100);
        return () => clearTimeout(animateTimer);
    }, []);
    const { buttonProps: showLogsButtonProps } = useButton({
        onPress: useCallback(() => {
            window.parent.postMessage({
                type: 'sandbox:web:show-logs',
            }, '*');
        }, []),
    }, useRef(null));
    const { buttonProps: fixButtonProps } = useButton({
        onPress: useCallback(() => {
            window.parent.postMessage({
                type: 'sandbox:web:fix',
                error: serializeError(error),
            }, '*');
            setIsOpen(false);
        }, [error]),
        isDisabled: !error,
    }, useRef(null));
    const { buttonProps: copyButtonProps } = useButton({
        onPress: useCallback(() => {
            navigator.clipboard.writeText(JSON.stringify(serializeError(error)));
        }, [error]),
    }, useRef(null));
    function isInIframe() {
        try {
            return window.parent !== window;
        }
        catch {
            return true;
        }
    }
    return (_jsx(SharedErrorBoundary, { isOpen: isOpen, children: isInIframe() ? (_jsxs("div", { className: "flex gap-2", children: [!!error && (_jsx("button", { className: "flex flex-row items-center justify-center gap-[4px] outline-none transition-colors rounded-[8px] border-[1px] bg-[#f9f9f9] hover:bg-[#dbdbdb] active:bg-[#c4c4c4] border-[#c4c4c4] text-[#18191B] text-sm px-[8px] py-[4px] cursor-pointer", type: "button", ...fixButtonProps, children: "Try to fix" })), _jsx("button", { className: "flex flex-row items-center justify-center gap-[4px] outline-none transition-colors rounded-[8px] border-[1px] bg-[#2C2D2F] hover:bg-[#414243] active:bg-[#555658] border-[#414243] text-white text-sm px-[8px] py-[4px]", type: "button", ...showLogsButtonProps, children: "Show logs" })] })) : (_jsx("button", { className: "flex flex-row items-center justify-center gap-[4px] outline-none transition-colors rounded-[8px] border-[1px] bg-[#2C2D2F] hover:bg-[#414243] active:bg-[#555658] border-[#414243] text-white text-sm px-[8px] py-[4px] w-fit", type: "button", ...copyButtonProps, children: "Copy error" })) }));
}
class ErrorBoundaryWrapper extends Component {
    state = { hasError: false, error: null };
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, info) {
        console.error(error, info);
    }
    render() {
        if (this.state.hasError) {
            return _jsx(InternalErrorBoundary, { error: this.state.error, params: {} });
        }
        return this.props.children;
    }
}
function LoaderWrapper({ loader }) {
    return _jsx(_Fragment, { children: loader() });
}
export const ClientOnly = ({ loader }) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted)
        return null;
    return (_jsx(ErrorBoundaryWrapper, { children: _jsx(LoaderWrapper, { loader: loader }) }));
};
/**
 * useHmrConnection()
 * ------------------
 * • `true`  → HMR socket is healthy
 * • `false` → socket lost (Vite is polling / may auto‑reload soon)
 *
 * Works only in dev; in prod it always returns `true`.
 */
export function useHmrConnection() {
    const [connected, setConnected] = useState(() => !!import.meta.hot);
    useEffect(() => {
        // No HMR object outside dev builds
        if (!import.meta.hot)
            return;
        /** Fired the moment the WS closes unexpectedly */
        const onDisconnect = () => setConnected(false);
        /** Fired every time the WS (re‑)opens */
        const onConnect = () => setConnected(true);
        import.meta.hot.on('vite:ws:disconnect', onDisconnect);
        import.meta.hot.on('vite:ws:connect', onConnect);
        // Optional: catch the “about to full‑reload” event as a last resort
        const onFullReload = () => setConnected(false);
        import.meta.hot.on('vite:beforeFullReload', onFullReload);
        return () => {
            import.meta.hot?.off('vite:ws:disconnect', onDisconnect);
            import.meta.hot?.off('vite:ws:connect', onConnect);
            import.meta.hot?.off('vite:beforeFullReload', onFullReload);
        };
    }, []);
    return connected;
}
const healthyResponseType = 'sandbox:web:healthcheck:response';
const useHandshakeParent = () => {
    const isHmrConnected = useHmrConnection();
    useEffect(() => {
        const healthyResponse = {
            type: healthyResponseType,
            healthy: isHmrConnected,
        };
        const handleMessage = (event) => {
            if (event.data.type === 'sandbox:web:healthcheck') {
                window.parent.postMessage(healthyResponse, '*');
            }
        };
        window.addEventListener('message', handleMessage);
        // Immediately respond to the parent window with a healthy response in
        // case we missed the healthcheck message
        window.parent.postMessage(healthyResponse, '*');
        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, [isHmrConnected]);
};
const useCodeGen = () => {
    const { startCodeGen, setCodeGenGenerating, completeCodeGen, errorCodeGen, stopCodeGen } = useSandboxStore();
    useEffect(() => {
        const handleMessage = (event) => {
            const { type } = event.data;
            switch (type) {
                case 'sandbox:web:codegen:started':
                    startCodeGen();
                    break;
                case 'sandbox:web:codegen:generating':
                    setCodeGenGenerating();
                    break;
                case 'sandbox:web:codegen:complete':
                    completeCodeGen();
                    break;
                case 'sandbox:web:codegen:error':
                    errorCodeGen();
                    break;
                case 'sandbox:web:codegen:stopped':
                    stopCodeGen();
                    break;
            }
        };
        window.addEventListener('message', handleMessage);
        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, [startCodeGen, setCodeGenGenerating, completeCodeGen, errorCodeGen, stopCodeGen]);
};
const useRefresh = () => {
    useEffect(() => {
        const handleMessage = (event) => {
            if (event.data.type === 'sandbox:web:refresh:request') {
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
                window.parent.postMessage({ type: 'sandbox:web:refresh:complete' }, '*');
            }
        };
        window.addEventListener('message', handleMessage);
        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);
};
export function Layout({ children }) {
    useHandshakeParent();
    useCodeGen();
    useRefresh();
    useDevServerHeartbeat();
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location?.pathname;
    useEffect(() => {
        const handleMessage = (event) => {
            if (event.data.type === 'sandbox:navigation') {
                navigate(event.data.pathname);
            }
        };
        window.addEventListener('message', handleMessage);
        window.parent.postMessage({ type: 'sandbox:web:ready' }, '*');
        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, [navigate]);
    useEffect(() => {
        if (pathname) {
            window.parent.postMessage({
                type: 'sandbox:web:navigation',
                pathname,
            }, '*');
        }
    }, [pathname]);
    return (_jsxs("html", { lang: "en", children: [_jsxs("head", { children: [_jsx("meta", { charSet: "utf-8" }), _jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }), _jsx(Meta, {}), _jsx(Links, {}), _jsx("script", { type: "module", src: "/src/__create/dev-error-overlay.js" }), _jsx("link", { rel: "icon", href: "/src/__create/favicon.png" }), _jsx(LoadFonts, {})] }), _jsxs("body", { children: [_jsx(ClientOnly, { loader: () => children }), _jsx(HotReloadIndicator, {}), _jsx(Toaster, { position: "bottom-right" }), _jsx(ScrollRestoration, {}), _jsx(Scripts, {}), _jsx("script", { src: "https://kit.fontawesome.com/2c15cc0cc7.js", crossOrigin: "anonymous", async: true })] })] }));
}
export default function App() {
    return (_jsx(SessionProvider, { children: _jsx(Outlet, {}) }));
}
