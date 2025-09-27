import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./app/page.jsx";
import AdminDashboard from "./app/admin/AdminDashboard.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public marketing site */}
        <Route path="/" element={<Page />} />

        {/* Admin dashboard */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}
