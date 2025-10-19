"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
export const TestimonialsSection = () => {
    const testimonials = [
        {
            text: "MarketingPro transformed our digital presence completely. Our sales increased by 300% within the first six months of working with them.",
            author: "Sarah Johnson",
            role: "CEO, TechStart",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
        },
        {
            text: "The team's expertise in SEO and social media marketing is outstanding. They delivered results beyond our expectations.",
            author: "Michael Chen",
            role: "Marketing Director, GrowthCo",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        },
        {
            text: "Professional, creative, and results-driven. MarketingPro helped us reach our target audience like never before.",
            author: "Emily Rodriguez",
            role: "Founder, StyleBrand",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        },
        {
            text: "Their data-driven approach and innovative strategies helped us dominate our market. Highly recommended!",
            author: "David Thompson",
            role: "VP Marketing, InnovateCorp",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        },
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };
    return (_jsx("section", { id: "testimonials", className: "py-20 bg-[#111827]", children: _jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-4", children: "What Our Clients Say" }), _jsx("p", { className: "text-xl text-gray-300", children: "Don't just take our word for it - hear from our satisfied clients" })] }), _jsxs("div", { className: "relative", children: [_jsx("div", { className: "overflow-hidden rounded-xl", children: _jsx("div", { className: "flex transition-transform duration-500 ease-in-out", style: { transform: `translateX(-${currentSlide * 100}%)` }, children: testimonials.map((testimonial, index) => (_jsxs("div", { className: "w-full flex-shrink-0 bg-white p-8 text-center", children: [_jsx("div", { className: "flex justify-center mb-4", children: [...Array(testimonial.rating)].map((_, i) => (_jsx("span", { className: "text-[#F59E0B] text-2xl", children: "\u2605" }, i))) }), _jsxs("p", { className: "text-lg text-gray-700 mb-6 italic", children: ["\"", testimonial.text, "\""] }), _jsxs("div", { className: "flex items-center justify-center", children: [_jsx("img", { src: testimonial.avatar, alt: testimonial.author, className: "w-16 h-16 rounded-full mr-4" }), _jsxs("div", { className: "text-left", children: [_jsx("div", { className: "font-bold text-[#111827]", children: testimonial.author }), _jsx("div", { className: "text-gray-600", children: testimonial.role })] })] })] }, index))) }) }), _jsx("button", { onClick: prevSlide, className: "absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all", children: "\u2190" }), _jsx("button", { onClick: nextSlide, className: "absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all", children: "\u2192" }), _jsx("div", { className: "flex justify-center mt-8", children: testimonials.map((_, index) => (_jsx("button", { onClick: () => setCurrentSlide(index), className: `w-3 h-3 mx-1 rounded-full transition-all ${index === currentSlide ? "bg-[#F59E0B]" : "bg-gray-600"}` }, index))) })] })] }) }));
};
