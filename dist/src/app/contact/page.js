"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState({ type: "", message: "" });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: "loading", message: "Sending..." });
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setStatus({
                    type: "success",
                    message: "Thank you! Your message has been sent.",
                });
                setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
            }
            else {
                const errorData = await response.json();
                setStatus({
                    type: "error",
                    message: errorData.message || "Something went wrong. Please try again.",
                });
            }
        }
        catch (error) {
            setStatus({
                type: "error",
                message: "An error occurred. Please try again later.",
            });
        }
    };
    return (_jsx("div", { className: "bg-gray-50 py-20", children: _jsxs("div", { className: "max-w-2xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-4xl font-extrabold text-[#111827]", children: "Contact Us" }), _jsx("p", { className: "mt-4 text-lg text-gray-600", children: "Have a question or want to work together? Drop us a line." })] }), _jsxs("div", { className: "mt-12 bg-white p-8 rounded-lg shadow-md", children: [_jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700", children: "Full Name" }), _jsx("input", { type: "text", name: "name", id: "name", required: true, value: formData.name, onChange: handleChange, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2563EB] focus:border-[#2563EB] sm:text-sm" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700", children: "Email Address" }), _jsx("input", { type: "email", name: "email", id: "email", required: true, value: formData.email, onChange: handleChange, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2563EB] focus:border-[#2563EB] sm:text-sm" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-700", children: "Phone (Optional)" }), _jsx("input", { type: "tel", name: "phone", id: "phone", value: formData.phone, onChange: handleChange, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2563EB] focus:border-[#2563EB] sm:text-sm" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700", children: "Message" }), _jsx("textarea", { name: "message", id: "message", rows: "4", required: true, value: formData.message, onChange: handleChange, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2563EB] focus:border-[#2563EB] sm:text-sm" })] }), _jsx("div", { children: _jsx("button", { type: "submit", disabled: status.type === "loading", className: "w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2563EB] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400", children: status.type === "loading" ? "Sending..." : "Send Message" }) })] }), status.message && (_jsx("div", { className: `mt-4 text-sm text-center p-2 rounded-md ${status.type === "success"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"}`, children: status.message }))] })] }) }));
}
