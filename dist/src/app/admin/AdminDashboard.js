import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import LoginPage from "./LoginPage";
import { format } from "date-fns";
export default function AdminDashboard() {
    const [user, setUser] = useState(null); // logged-in user state
    const [activeTab, setActiveTab] = useState("overview");
    const [contactSubmissions, setContactSubmissions] = useState([]);
    const [quoteRequests, setQuoteRequests] = useState([]);
    const [loadingData, setLoadingData] = useState(true);
    const [stats, setStats] = useState({
        totalContacts: 0,
        totalQuotes: 0,
        todayContacts: 0,
        todayQuotes: 0,
    });
    // Fetch data only if user is logged in
    useEffect(() => {
        if (user) {
            fetchData();
        }
    }, [user]);
    const fetchData = async () => {
        setLoadingData(true);
        try {
            const contactRes = await fetch("/api/contact");
            const contactData = await contactRes.json();
            const quoteRes = await fetch("/api/quotes");
            const quoteData = await quoteRes.json();
            setContactSubmissions(contactData.submissions || []);
            setQuoteRequests(quoteData.quotes || []);
            const today = new Date().toDateString();
            const todayContacts = contactData.submissions?.filter((item) => new Date(item.created_at).toDateString() === today).length || 0;
            const todayQuotes = quoteData.quotes?.filter((item) => new Date(item.created_at).toDateString() === today).length || 0;
            setStats({
                totalContacts: contactData.total || 0,
                totalQuotes: quoteData.total || 0,
                todayContacts,
                todayQuotes,
            });
        }
        catch (err) {
            console.error("Failed to fetch data:", err);
        }
        finally {
            setLoadingData(false);
        }
    };
    const handleLogout = () => setUser(null);
    const handleDelete = async (type, id) => {
        if (!window.confirm("Are you sure you want to delete this record?"))
            return;
        try {
            const res = await fetch(`/api/${type}/${id}`, { method: "DELETE" });
            if (!res.ok)
                throw new Error("Failed to delete record");
            if (type === "contact") {
                setContactSubmissions((prev) => prev.filter((item) => item.id !== id));
                setStats((prev) => ({ ...prev, totalContacts: prev.totalContacts - 1 }));
            }
            else if (type === "quotes") {
                setQuoteRequests((prev) => prev.filter((item) => item.id !== id));
                setStats((prev) => ({ ...prev, totalQuotes: prev.totalQuotes - 1 }));
            }
        }
        catch (err) {
            console.error(err);
            alert("Failed to delete record");
        }
    };
    const formatDate = (dateString) => format(new Date(dateString), "MMM dd, yyyy HH:mm");
    const getServiceBadgeColor = (service) => {
        const colors = {
            BusAdvertising: "bg-blue-100 text-blue-800",
            socialMedia: "bg-purple-100 text-purple-800",
            TrainAdvertising: "bg-green-100 text-green-800",
            TvAdvertising: "bg-orange-100 text-orange-800",
            OutdoorBranding: "bg-gray-100 text-gray-800",
        };
        return colors[service] || "bg-gray-100 text-gray-800";
    };
    const getBudgetBadgeColor = (budget) => {
        const colors = {
            "5k-10k": "bg-yellow-100 text-yellow-800",
            "10k-25k": "bg-orange-100 text-orange-800",
            "25k-50k": "bg-red-100 text-red-800",
            "50k+": "bg-purple-100 text-purple-800",
        };
        return colors[budget] || "bg-gray-100 text-gray-800";
    };
    // Render login page if user not logged in
    if (!user)
        return _jsx(LoginPage, { onLogin: setUser });
    // Loading spinner
    if (loadingData)
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50", children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-[#2563EB] mx-auto mb-4" }), _jsx("p", { className: "text-gray-600", children: "Loading admin data..." })] }) }));
    return (_jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsx("div", { className: "bg-black shadow-sm border-b", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex items-center justify-between h-16", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("img", { src: "/five9-logo.jpg", alt: "Five9 Media Logo", style: { height: "50px", width: "auto" } }), _jsx("span", { className: "ml-3 text-xl font-bold text-white", children: "FIVE9MEDIA" })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("button", { onClick: () => (window.location.href = "/"), className: "text-[#3B82F6] hover:text-[#60A5FA] transition-colors", children: "\u2190 Back to Website" }), _jsx("button", { onClick: handleLogout, className: "bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition-colors", children: "Logout" })] })] }) }) }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4 mb-8", children: [_jsxs("div", { className: "bg-white shadow p-4 rounded-lg", children: [_jsx("h3", { className: "text-gray-500 text-sm", children: "Total Contacts" }), _jsx("p", { className: "text-xl font-bold", children: stats.totalContacts })] }), _jsxs("div", { className: "bg-white shadow p-4 rounded-lg", children: [_jsx("h3", { className: "text-gray-500 text-sm", children: "Today Contacts" }), _jsx("p", { className: "text-xl font-bold", children: stats.todayContacts })] }), _jsxs("div", { className: "bg-white shadow p-4 rounded-lg", children: [_jsx("h3", { className: "text-gray-500 text-sm", children: "Total Quotes" }), _jsx("p", { className: "text-xl font-bold", children: stats.totalQuotes })] }), _jsxs("div", { className: "bg-white shadow p-4 rounded-lg", children: [_jsx("h3", { className: "text-gray-500 text-sm", children: "Today Quotes" }), _jsx("p", { className: "text-xl font-bold", children: stats.todayQuotes })] })] }), _jsxs("div", { className: "bg-white shadow rounded-lg p-4 mb-8", children: [_jsx("h2", { className: "text-lg font-bold mb-4", children: "Contact Submissions" }), _jsxs("table", { className: "w-full text-left border-collapse", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { className: "border-b p-2", children: "Name" }), _jsx("th", { className: "border-b p-2", children: "Email" }), _jsx("th", { className: "border-b p-2", children: "Phone" }), _jsx("th", { className: "border-b p-2", children: "Date" }), _jsx("th", { className: "border-b p-2", children: "Actions" })] }) }), _jsx("tbody", { children: contactSubmissions.map((item) => (_jsxs("tr", { children: [_jsx("td", { className: "border-b p-2", children: item.name }), _jsx("td", { className: "border-b p-2", children: item.email }), _jsx("td", { className: "border-b p-2", children: item.phone || 'N/A' }), _jsx("td", { className: "border-b p-2", children: formatDate(item.created_at) }), _jsx("td", { className: "border-b p-2", children: _jsx("button", { onClick: () => handleDelete("contact", item.id), className: "bg-red-500 text-white px-2 py-1 rounded", children: "Delete" }) })] }, item.id))) })] })] }), _jsxs("div", { className: "bg-white shadow rounded-lg p-4 mb-8", children: [_jsx("h2", { className: "text-lg font-bold mb-4", children: "Quote Requests" }), _jsxs("table", { className: "w-full text-left border-collapse", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { className: "border-b p-2", children: "Name" }), _jsx("th", { className: "border-b p-2", children: "Email" }), _jsx("th", { className: "border-b p-2", children: "Mobile Number" }), _jsx("th", { className: "border-b p-2", children: "Service" }), _jsx("th", { className: "border-b p-2", children: "Budget" }), _jsx("th", { className: "border-b p-2", children: "Date" }), _jsx("th", { className: "border-b p-2", children: "Actions" })] }) }), _jsx("tbody", { children: quoteRequests.map((item) => (_jsxs("tr", { children: [_jsx("td", { className: "border-b p-2", children: item.name }), _jsx("td", { className: "border-b p-2", children: item.email }), _jsx("td", { className: "border-b p-2", children: item.mobile_no }), _jsx("td", { className: `border-b p-2 ${getServiceBadgeColor(item.service)}`, children: item.service }), _jsx("td", { className: `border-b p-2 ${getBudgetBadgeColor(item.budget)}`, children: item.budget }), _jsx("td", { className: "border-b p-2", children: formatDate(item.created_at) }), _jsx("td", { className: "border-b p-2", children: _jsx("button", { onClick: () => handleDelete("quotes", item.id), className: "bg-red-500 text-white px-2 py-1 rounded", children: "Delete" }) })] }, item.id))) })] })] })] })] }));
}
