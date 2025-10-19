'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
const DEFAULT_COMPONENTS = {
    h1: ({ node, ...props }) => (_jsx("h1", { className: "font-semibold text-4xl leading-snug", ...props })),
    h2: ({ node, ...props }) => (_jsx("h2", { className: "font-medium text-3xl leading-snug", ...props })),
    h3: ({ node, ...props }) => _jsx("h3", { className: "font-bold text-xl", ...props }),
    h4: ({ node, ...props }) => _jsx("h4", { className: "font-bold text-lg", ...props }),
    h5: ({ node, ...props }) => (_jsx("h5", { className: "font-semibold text-lg", ...props })),
    h6: ({ node, ...props }) => (_jsx("h6", { className: "font-semibold text-base", ...props })),
    p: ({ node, ...props }) => (_jsx("p", { className: "font-normal text-base leading-relaxed", ...props })),
    a: ({ node, ...props }) => (_jsx("a", { className: "text-blue-500 hover:underline", ...props })),
    ul: ({ node, ...props }) => (_jsx("ul", { className: "list-inside list-disc", ...props })),
    ol: ({ node, ...props }) => (_jsx("ol", { className: "list-inside list-decimal", ...props })),
    li: ({ node, ...props }) => (_jsx("li", { className: "font-normal text-base leading-relaxed", ...props })),
    code: ({ node, ...props }) => (_jsx("code", { className: "bg-gray-100 p-1 font-mono text-sm", ...props })),
    blockquote: ({ node, ...props }) => (_jsx("blockquote", { className: "border-gray-300 border-l-4 pl-4 italic", ...props })),
    img: ({ node, ...props }) => (_jsx("img", { className: "mx-auto my-4 rounded", ...props })),
    table: ({ node, ...props }) => (_jsx("table", { className: "min-w-full border-collapse", ...props })),
    thead: ({ node, ...props }) => (_jsx("thead", { className: "border-gray-200 border-b-2", ...props })),
    tbody: ({ node, ...props }) => _jsx("tbody", { ...props }),
    tr: ({ node, ...props }) => (_jsx("tr", { className: "border-gray-200 border-b", ...props })),
    th: ({ children }) => _jsx("th", { className: "p-2 text-left", children: children }),
    td: ({ children }) => _jsx("td", { className: "p-2", children: children }),
    strong: ({ node, ...props }) => _jsx("strong", { className: "font-bold", ...props }),
    em: ({ node, ...props }) => _jsx("em", { className: "italic", ...props }),
    del: ({ node, ...props }) => _jsx("del", { className: "line-through", ...props }),
    hr: ({ node, ...props }) => (_jsx("hr", { className: "my-4 border-gray-200 border-t", ...props })),
};
export function Display(props) {
    return (_jsx(ReactMarkdown, { remarkPlugins: [remarkGfm], components: { ...DEFAULT_COMPONENTS, ...props.components }, children: props.children }));
}
