// "use client";
// import { useState } from "react";
// export const QuoteModal = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     service: "",
//     budget: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);
//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null);
//     try {
//       const response = await fetch("/api/quotes", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.error || "Failed to submit quote request");
//       }
//       setSubmitStatus({ type: "success", message: data.message });
//       setFormData({
//         name: "",
//         email: "",
//         mobile_no: "",
//         company: "",
//         service: "",
//         budget: "",
//         message: "",
//       });
//       // Close modal after 2 seconds on success
//       setTimeout(() => {
//         onClose();
//         setSubmitStatus(null);
//       }, 2000);
//     } catch (error) {
//       console.error("Quote request error:", error);
//       setSubmitStatus({ type: "error", message: error.message });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-xl max-w-md w-full max-h-screen overflow-y-auto animate-bounce-in">
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold text-[#111827]">Get a Quote</h2>
//             <button
//               onClick={onClose}
//               className="text-gray-500 hover:text-gray-700 text-2xl"
//             >
//               ×
//             </button>
//           </div>
//           {submitStatus && (
//             <div
//               className={`mb-4 p-4 rounded-lg ${
//                 submitStatus.type === "success"
//                   ? "bg-green-100 text-green-700 border border-green-200"
//                   : "bg-red-100 text-red-700 border border-red-200"
//               }`}
//             >
//               {submitStatus.message}
//             </div>
//           )}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label
//                 htmlFor="modal-name"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Name *
//               </label>
//               <input
//                 type="text"
//                 id="modal-name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required
//                 disabled={isSubmitting}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent disabled:opacity-50"
//                 placeholder="Your full name"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="modal-email"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Email *
//               </label>
//               <input
//                 type="email"
//                 id="modal-email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//                 disabled={isSubmitting}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent disabled:opacity-50"
//                 placeholder="your@email.com"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="modal-company"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Company
//               </label>
//               <input
//                 type="text"
//                 id="modal-company"
//                 name="company"
//                 value={formData.company}
//                 onChange={handleInputChange}
//                 disabled={isSubmitting}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent disabled:opacity-50"
//                 placeholder="Your company name"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="modal-service"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Service Interest
//               </label>
//               <select
//                 id="modal-service"
//                 name="service"
//                 value={formData.service}
//                 onChange={handleInputChange}
//                 disabled={isSubmitting}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent disabled:opacity-50"
//               >
//                 <option value="">Select a service</option>
//                 <option value="seo">Bus Branding</option>
//                 <option value="social">Social Media Advertising</option>
//                 <option value="brand">Train Advertisement</option>
//                 <option value="analytics">TV AID's</option>
//                 <option value="all">BusStop/Railway Station Advertising</option>
//               </select>
//             </div>
//             <div>
//               <label
//                 htmlFor="modal-budget"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Budget Range
//               </label>
//               <select
//                 id="modal-budget"
//                 name="budget"
//                 value={formData.budget}
//                 onChange={handleInputChange}
//                 disabled={isSubmitting}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent disabled:opacity-50"
//               >
//                 <option value="">Select budget range</option>
//                 <option value="5k-10k">₹5,000 - ₹10,000</option>
//                 <option value="10k-25k">₹10,000 - ₹25,000</option>
//                 <option value="25k-50k">₹25,000 - ₹50,000</option>
//                 <option value="50k+">₹50,000+</option>
//               </select>
//             </div>
//             <div>
//               <label
//                 htmlFor="modal-message"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Project Details
//               </label>
//               <textarea
//                 id="modal-message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 rows={3}
//                 disabled={isSubmitting}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent disabled:opacity-50"
//                 placeholder="Tell us about your marketing goals..."
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-[#2563EB] text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isSubmitting ? "Submitting..." : "Request Quote"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export const QuoteModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile_no: "", // ✅ Added mobile_no
        company: "",
        service: "",
        budget: "",
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
            const response = await fetch("/api/quotes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || "Failed to submit quote request");
            }
            setSubmitStatus({ type: "success", message: data.message });
            setFormData({
                name: "",
                email: "",
                mobile_no: "", // ✅ Reset after submit
                company: "",
                service: "",
                budget: "",
                message: "",
            });
            setTimeout(() => {
                onClose();
                setSubmitStatus(null);
            }, 2000);
        }
        catch (error) {
            console.error("Quote request error:", error);
            setSubmitStatus({ type: "error", message: error.message });
        }
        finally {
            setIsSubmitting(false);
        }
    };
    if (!isOpen)
        return null;
    return (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4", children: _jsx("div", { className: "bg-white rounded-xl max-w-md w-full max-h-screen overflow-y-auto animate-bounce-in", children: _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex justify-between items-center mb-6", children: [_jsx("h2", { className: "text-2xl font-bold text-[#111827]", children: "Get a Quote" }), _jsx("button", { onClick: onClose, className: "text-gray-500 hover:text-gray-700 text-2xl", children: "\u00D7" })] }), submitStatus && (_jsx("div", { className: `mb-4 p-4 rounded-lg ${submitStatus.type === "success"
                            ? "bg-green-100 text-green-700 border border-green-200"
                            : "bg-red-100 text-red-700 border border-red-200"}`, children: submitStatus.message })), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "modal-name", className: "block text-sm font-medium text-gray-700 mb-1", children: "Name *" }), _jsx("input", { type: "text", id: "modal-name", name: "name", value: formData.name, onChange: handleInputChange, required: true, disabled: isSubmitting, className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent disabled:opacity-50", placeholder: "Your full name" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "modal-email", className: "block text-sm font-medium text-gray-700 mb-1", children: "Email *" }), _jsx("input", { type: "email", id: "modal-email", name: "email", value: formData.email, onChange: handleInputChange, required: true, disabled: isSubmitting, className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent disabled:opacity-50", placeholder: "your@email.com" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "modal-mobile", className: "block text-sm font-medium text-gray-700 mb-1", children: "Mobile Number *" }), _jsx("input", { type: "tel", id: "modal-mobile", name: "mobile_no", value: formData.mobile_no, onChange: handleInputChange, required: true, disabled: isSubmitting, pattern: "[0-9]{10}" // Simple validation for 10 digits
                                        , className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent disabled:opacity-50", placeholder: "Enter your 10-digit number" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "modal-company", className: "block text-sm font-medium text-gray-700 mb-1", children: "Company" }), _jsx("input", { type: "text", id: "modal-company", name: "company", value: formData.company, onChange: handleInputChange, disabled: isSubmitting, className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent disabled:opacity-50", placeholder: "Your company name" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "modal-service", className: "block text-sm font-medium text-gray-700 mb-1", children: "Service Interest" }), _jsxs("select", { id: "modal-service", name: "service", value: formData.service, onChange: handleInputChange, disabled: isSubmitting, className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent disabled:opacity-50", children: [_jsx("option", { value: "", children: "Select a service" }), _jsx("option", { value: "Bus Advertising", children: "Bus Branding" }), _jsx("option", { value: "social Media Advertising", children: "Social Media Advertising" }), _jsx("option", { value: "Train Advertising", children: "Train Advertisement" }), _jsx("option", { value: "TV Advertising", children: "TV Advertising" }), _jsx("option", { value: "Outdoor Advertising", children: "BusStop / Railway Station Advertising" })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "modal-budget", className: "block text-sm font-medium text-gray-700 mb-1", children: "Budget Range" }), _jsxs("select", { id: "modal-budget", name: "budget", value: formData.budget, onChange: handleInputChange, disabled: isSubmitting, className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent disabled:opacity-50", children: [_jsx("option", { value: "", children: "Select budget range" }), _jsx("option", { value: "5k-10k", children: "\u20B95,000 - \u20B910,000" }), _jsx("option", { value: "10k-25k", children: "\u20B910,000 - \u20B925,000" }), _jsx("option", { value: "25k-50k", children: "\u20B925,000 - \u20B950,000" }), _jsx("option", { value: "50k+", children: "\u20B950,000+" })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "modal-message", className: "block text-sm font-medium text-gray-700 mb-1", children: "Project Details" }), _jsx("textarea", { id: "modal-message", name: "message", value: formData.message, onChange: handleInputChange, rows: 3, disabled: isSubmitting, className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent disabled:opacity-50", placeholder: "Tell us about your marketing goals..." })] }), _jsx("button", { type: "submit", disabled: isSubmitting, className: "w-full bg-[#2563EB] text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed", children: isSubmitting ? "Submitting..." : "Request Quote" })] })] }) }) }));
};
