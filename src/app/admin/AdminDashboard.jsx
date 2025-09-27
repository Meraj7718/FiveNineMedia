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
      const todayContacts =
        contactData.submissions?.filter(
          (item) => new Date(item.created_at).toDateString() === today
        ).length || 0;
      const todayQuotes =
        quoteData.quotes?.filter(
          (item) => new Date(item.created_at).toDateString() === today
        ).length || 0;

      setStats({
        totalContacts: contactData.total || 0,
        totalQuotes: quoteData.total || 0,
        todayContacts,
        todayQuotes,
      });
    } catch (err) {
      console.error("Failed to fetch data:", err);
    } finally {
      setLoadingData(false);
    }
  };

  const handleLogout = () => setUser(null);

  const handleDelete = async (type, id) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;

    try {
      const res = await fetch(`/api/${type}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete record");

      if (type === "contact") {
        setContactSubmissions((prev) => prev.filter((item) => item.id !== id));
        setStats((prev) => ({ ...prev, totalContacts: prev.totalContacts - 1 }));
      } else if (type === "quotes") {
        setQuoteRequests((prev) => prev.filter((item) => item.id !== id));
        setStats((prev) => ({ ...prev, totalQuotes: prev.totalQuotes - 1 }));
      }
    } catch (err) {
      console.error(err);
      alert("Failed to delete record");
    }
  };

  const formatDate = (dateString) => format(new Date(dateString), "MMM dd, yyyy HH:mm");

  const getServiceBadgeColor = (service) => {
    const colors = {
      seo: "bg-blue-100 text-blue-800",
      social: "bg-purple-100 text-purple-800",
      brand: "bg-green-100 text-green-800",
      analytics: "bg-orange-100 text-orange-800",
      all: "bg-gray-100 text-gray-800",
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
  if (!user) return <LoginPage onLogin={setUser} />;

  // Loading spinner
  if (loadingData)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2563EB] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin data...</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img
                src="/five9-logo.jpg"
                alt="Five9 Media Logo"
                style={{ height: "50px", width: "auto" }}
              />
              <span className="ml-3 text-xl font-bold text-white">FIVE9MEDIA</span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => (window.location.href = "/")}
                className="text-[#3B82F6] hover:text-[#60A5FA] transition-colors"
              >
                ← Back to Website
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white shadow p-4 rounded-lg">
            <h3 className="text-gray-500 text-sm">Total Contacts</h3>
            <p className="text-xl font-bold">{stats.totalContacts}</p>
          </div>
          <div className="bg-white shadow p-4 rounded-lg">
            <h3 className="text-gray-500 text-sm">Today Contacts</h3>
            <p className="text-xl font-bold">{stats.todayContacts}</p>
          </div>
          <div className="bg-white shadow p-4 rounded-lg">
            <h3 className="text-gray-500 text-sm">Total Quotes</h3>
            <p className="text-xl font-bold">{stats.totalQuotes}</p>
          </div>
          <div className="bg-white shadow p-4 rounded-lg">
            <h3 className="text-gray-500 text-sm">Today Quotes</h3>
            <p className="text-xl font-bold">{stats.todayQuotes}</p>
          </div>
        </div>

        {/* Contact Submissions Table */}
        <div className="bg-white shadow rounded-lg p-4 mb-8">
          <h2 className="text-lg font-bold mb-4">Contact Submissions</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2">Name</th>
                <th className="border-b p-2">Email</th>
                <th className="border-b p-2">Phone</th>
                <th className="border-b p-2">Date</th>
                <th className="border-b p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contactSubmissions.map((item) => (
                <tr key={item.id}>
                  <td className="border-b p-2">{item.name}</td>
                  <td className="border-b p-2">{item.email}</td>
                  <td className="border-b p-2">{item.phone || 'N/A'}</td>
                  <td className="border-b p-2">{formatDate(item.created_at)}</td>
                  <td className="border-b p-2">
                    <button
                      onClick={() => handleDelete("contact", item.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quote Requests Table */}
        <div className="bg-white shadow rounded-lg p-4 mb-8">
          <h2 className="text-lg font-bold mb-4">Quote Requests</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2">Name</th>
                <th className="border-b p-2">Email</th>
                <th className="border-b p-2">Mobile Number</th>
                <th className="border-b p-2">Service</th>
                <th className="border-b p-2">Budget</th>
                <th className="border-b p-2">Date</th>
                <th className="border-b p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {quoteRequests.map((item) => (
                <tr key={item.id}>
                  <td className="border-b p-2">{item.name}</td>
                  <td className="border-b p-2">{item.email}</td>
                  <td className="border-b p-2">{item.mobile_no}</td>
                  <td className={`border-b p-2 ${getServiceBadgeColor(item.service)}`}>
                    {item.service}
                  </td>
                  <td className={`border-b p-2 ${getBudgetBadgeColor(item.budget)}`}>
                    {item.budget}
                  </td>
                  <td className="border-b p-2">{formatDate(item.created_at)}</td>
                  <td className="border-b p-2">
                    <button
                      onClick={() => handleDelete("quotes", item.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
