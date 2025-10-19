import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./app/page.jsx";
import AdminDashboard from "./app/admin/AdminDashboard.jsx";
export default function App() {
    return (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Page, {}) }), _jsx(Route, { path: "/admin", element: _jsx(AdminDashboard, {}) })] }) }));
}
