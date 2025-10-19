"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || "Failed to send message");
            }
            setSubmitStatus({ type: "success", message: data.message });
            setFormData({ name: "", email: "", phone: "", message: "" });
        }
        catch (error) {
            console.error("Contact form error:", error);
            setSubmitStatus({ type: "error", message: error.message });
        }
        finally {
            setIsSubmitting(false);
        }
    };
    return (_jsx("section", { id: "contact", className: "py-20 bg-[#F3F4F6]", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-[#111827] mb-4", children: "Get In Touch" }), _jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto", children: "Ready to grow your brand? Let's discuss how we can help you achieve your marketing goals" })] }), _jsxs("div", { className: "grid lg:grid-cols-2 gap-12", children: [_jsxs("div", { className: "bg-white p-8 rounded-xl shadow-lg", children: [_jsx("h3", { className: "text-2xl font-bold text-[#111827] mb-6", children: "Send us a message" }), submitStatus && (_jsx("div", { className: `mb-4 p-4 rounded-lg ${submitStatus.type === "success"
                                        ? "bg-green-100 text-green-700 border border-green-200"
                                        : "bg-red-100 text-red-700 border border-red-200"}`, children: submitStatus.message })), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700 mb-2", children: "Name" }), _jsx("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleInputChange, required: true, disabled: isSubmitting, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-colors disabled:opacity-50", placeholder: "Your full name" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 mb-2", children: "Email" }), _jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleInputChange, required: true, disabled: isSubmitting, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-colors disabled:opacity-50", placeholder: "your@email.com" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-700 mb-2", children: "Phone" }), _jsx("input", { type: "tel", id: "phone", name: "phone", value: formData.phone, onChange: handleInputChange, disabled: isSubmitting, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-colors disabled:opacity-50", placeholder: "Your phone number" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700 mb-2", children: "Message" }), _jsx("textarea", { id: "message", name: "message", value: formData.message, onChange: handleInputChange, required: true, rows: 4, disabled: isSubmitting, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-colors disabled:opacity-50", placeholder: "Tell us about your project..." })] }), _jsx("button", { type: "submit", disabled: isSubmitting, className: "w-full bg-[#2563EB] text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed", children: isSubmitting ? "Sending..." : "Send Message" })] })] }), _jsxs("div", { className: "space-y-8", children: [_jsxs("div", { className: "bg-white p-8 rounded-xl shadow-lg", children: [_jsx("h3", { className: "text-2xl font-bold text-[#111827] mb-6", children: "Contact Information" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center mr-4", children: _jsx("span", { className: "text-white", children: "\uD83D\uDCCD" }) }), _jsxs("div", { children: [_jsx("div", { className: "font-semibold text-[#111827]", children: "Address" }), _jsx("div", { className: "text-gray-600", children: "74 Janseva Society 5th Road Santacruz East, Mumbai 400055" })] })] }), _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "w-12 h-12 bg-[#F59E0B] rounded-full flex items-center justify-center mr-4", children: _jsx("span", { className: "text-[#111827]", children: "\uD83D\uDCDE" }) }), _jsxs("div", { children: [_jsx("div", { className: "font-semibold text-[#111827]", children: "Phone" }), _jsx("div", { className: "text-gray-600", children: "+918779797885" })] })] }), _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center mr-4", children: _jsx("span", { className: "text-white", children: "\u2709\uFE0F" }) }), _jsxs("div", { children: [_jsx("div", { className: "font-semibold text-[#111827]", children: "Email" }), _jsx("div", { className: "text-gray-600", children: "aaseemshaikhfive9media.in" })] })] })] })] }), _jsx("div", { className: "overflow-hidden rounded-xl shadow-lg", children: _jsx("iframe", { title: "Google Map", src: "https://www.google.com/maps?q=74+Janseva+Society+5th+Road+Santacruz+East+Mumbai+400055&output=embed", width: "100%", height: "256", style: { border: 0 }, allowFullScreen: "", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", className: "w-full h-64" }) })] })] })] }) }));
};
