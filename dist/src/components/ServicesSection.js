"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { services } from "@/data/services";
export const ServicesSection = () => {
    return (_jsx("section", { id: "services", className: "py-20 bg-[#F3F4F6]", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-4xl font-extrabold text-[#111827]", children: "Our Services" }), _jsx("p", { className: "mt-4 text-lg text-gray-600", children: "We offer a comprehensive suite of marketing services to help your brand succeed." })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: services.map((service, index) => {
                        const slug = service.title.toLowerCase().replace(/\s+/g, "-");
                        return (_jsxs("div", { className: "bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300", children: [_jsx("div", { className: "text-4xl mb-4", children: service.icon }), _jsx("h3", { className: "text-xl font-bold text-[#111827] mb-2", children: service.title }), _jsx("p", { className: "text-gray-600 mb-6", children: service.description }), _jsx(Link, { to: `/services/${slug}`, className: "font-semibold text-[#2563EB] hover:text-blue-700", children: "Learn More \u2192" })] }, index));
                    }) })] }) }));
};
