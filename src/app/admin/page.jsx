"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [contactSubmissions, setContactSubmissions] = useState([]);
  const [quoteRequests, setQuoteRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalContacts: 0,
    totalQuotes: 0,
    todayContacts: 0,
    todayQuotes: 0
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch contact submissions
      const contactResponse = await fetch('/api/contact');
      const contactData = await contactResponse.json();
      
      // Fetch quote requests
      const quoteResponse = await fetch('/api/quotes');
      const quoteData = await quoteResponse.json();

      if (contactResponse.ok && quoteResponse.ok) {
        setContactSubmissions(contactData.submissions || []);
        setQuoteRequests(quoteData.quotes || []);
        
        // Calculate stats
        const today = new Date().toDateString();
        const todayContacts = contactData.submissions?.filter(
          item => new Date(item.created_at).toDateString() === today
        ).length || 0;
        
        const todayQuotes = quoteData.quotes?.filter(
          item => new Date(item.created_at).toDateString() === today
        ).length || 0;

        setStats({
          totalContacts: contactData.total || 0,
          totalQuotes: quoteData.total || 0,
          todayContacts,
          todayQuotes
        });
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return format(new Date(dateString), 'MMM dd, yyyy HH:mm');
  };

  const getServiceBadgeColor = (service) => {
    const colors = {
      'seo': 'bg-blue-100 text-blue-800',
      'social': 'bg-purple-100 text-purple-800',
      'brand': 'bg-green-100 text-green-800',
      'analytics': 'bg-orange-100 text-orange-800',
      'all': 'bg-gray-100 text-gray-800'
    };
    return colors[service] || 'bg-gray-100 text-gray-800';
  };

  const getBudgetBadgeColor = (budget) => {
    const colors = {
      '5k-10k': 'bg-yellow-100 text-yellow-800',
      '10k-25k': 'bg-orange-100 text-orange-800',
      '25k-50k': 'bg-red-100 text-red-800',
      '50k+': 'bg-purple-100 text-purple-800'
    };
    return colors[budget] || 'bg-gray-100 text-gray-800';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2563EB] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-[#2563EB] to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="ml-3 text-xl font-bold text-[#111827]">MarketingPro Admin</span>
            </div> */}
            <div className="flex items-center">
            <img 
              src="/five9-logo.jpg" 
              alt="Five9 Media Logo" 
              style={{ height: "50px", width: "auto", background: "transparent" }} 
            />
            <span className="ml-3 text-xl font-bold text-white">FIVE9MEDIA</span>
            </div>
            <button 
              onClick={() => window.location.href = '/'}
              className="text-[#3B82F6] hover:text-[#60A5FA] transition-colors">
              ← Back to Website
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <span className="text-2xl">📧</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Contacts</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalContacts}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <span className="text-2xl">💼</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Quotes</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalQuotes}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <span className="text-2xl">📈</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Today's Contacts</p>
                <p className="text-2xl font-bold text-gray-900">{stats.todayContacts}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <span className="text-2xl">🎯</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Today's Quotes</p>
                <p className="text-2xl font-bold text-gray-900">{stats.todayQuotes}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-[#2563EB] text-[#2563EB]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('contacts')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'contacts'
                    ? 'border-[#2563EB] text-[#2563EB]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Contact Submissions ({contactSubmissions.length})
              </button>
              <button
                onClick={() => setActiveTab('quotes')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'quotes'
                    ? 'border-[#2563EB] text-[#2563EB]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Quote Requests ({quoteRequests.length})
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
                
                {/* Recent Contacts */}
                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-3">Latest Contact Submissions</h4>
                  <div className="space-y-3">
                    {contactSubmissions.slice(0, 3).map((contact) => (
                      <div key={contact.id} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-gray-900">{contact.name}</p>
                            <p className="text-sm text-gray-600">{contact.email}</p>
                            <p className="text-sm text-gray-500 mt-1">{contact.message.substring(0, 100)}...</p>
                          </div>
                          <span className="text-xs text-gray-500">{formatDate(contact.created_at)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Quotes */}
                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-3">Latest Quote Requests</h4>
                  <div className="space-y-3">
                    {quoteRequests.slice(0, 3).map((quote) => (
                      <div key={quote.id} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-gray-900">{quote.name}</p>
                            <p className="text-sm text-gray-600">{quote.email}</p>
                            {quote.company && <p className="text-sm text-gray-500">{quote.company}</p>}
                            <div className="flex gap-2 mt-2">
                              {quote.service && (
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getServiceBadgeColor(quote.service)}`}>
                                  {quote.service}
                                </span>
                              )}
                              {quote.budget && (
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBudgetBadgeColor(quote.budget)}`}>
                                  {quote.budget}
                                </span>
                              )}
                            </div>
                          </div>
                          <span className="text-xs text-gray-500">{formatDate(quote.created_at)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Contacts Tab */}
            {activeTab === 'contacts' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-gray-900">Contact Submissions</h3>
                  <button 
                    onClick={fetchData}
                    className="bg-[#2563EB] text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                  >
                    Refresh
                  </button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {contactSubmissions.map((contact) => (
                        <tr key={contact.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{contact.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.phone || 'N/A'}</td>
                          <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{contact.message}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(contact.created_at)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Quotes Tab */}
            {activeTab === 'quotes' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-gray-900">Quote Requests</h3>
                  <button 
                    onClick={fetchData}
                    className="bg-[#2563EB] text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                  >
                    Refresh
                  </button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {quoteRequests.map((quote) => (
                        <tr key={quote.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{quote.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{quote.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{quote.company || 'N/A'}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {quote.service ? (
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getServiceBadgeColor(quote.service)}`}>
                                {quote.service}
                              </span>
                            ) : 'N/A'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {quote.budget ? (
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBudgetBadgeColor(quote.budget)}`}>
                                {quote.budget}
                              </span>
                            ) : 'N/A'}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{quote.message || 'N/A'}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(quote.created_at)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}