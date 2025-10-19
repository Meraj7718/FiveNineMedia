import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams, Link, useNavigate } from "react-router-dom";
import { services } from "@/data/services";
import { useEffect } from "react";
export default function ServiceDetailPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const service = services.find((s) => s.title.toLowerCase().replace(/\s+/g, "-") === slug);
    useEffect(() => {
        if (!service) {
            // If service is not found, redirect to home page or a 404 page
            navigate("/", { replace: true });
        }
    }, [service, navigate]);
    if (!service) {
        // Render nothing or a loading spinner while redirecting
        return null;
    }
    return (_jsx("div", { className: "bg-white min-h-screen", children: _jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("div", { className: "text-6xl mb-4", children: service.icon }), _jsx("h1", { className: "text-4xl md:text-5xl font-extrabold text-[#111827] mb-4", children: service.title }), _jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", children: service.description })] }), _jsxs("div", { className: "bg-gray-50 p-8 rounded-xl shadow-md", children: [_jsx("h2", { className: "text-2xl font-bold text-[#111827] mb-6", children: "Key Features" }), _jsx("ul", { className: "space-y-4", children: service.features.map((feature, idx) => (_jsxs("li", { className: "flex items-center", children: [_jsx("svg", { className: "w-6 h-6 text-[#2563EB] mr-3", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 13l4 4L19 7" }) }), _jsx("span", { className: "text-gray-700", children: feature })] }, idx))) })] }), _jsx("div", { className: "text-center mt-12", children: _jsx(Link, { to: "/contact", className: "inline-block bg-[#2563EB] text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors text-lg", children: "Get a Quote" }) })] }) }));
}
