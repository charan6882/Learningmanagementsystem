import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./pages/Courses";
import Enrollments from "./pages/Enrollments";
import Submissions from "./pages/Submissions";
import Discussions from "./pages/Discussions";
import Certificates from "./pages/Certificates";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div>
      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <main className="container py-4">
        <Routes>
          {/* Redirect root to Courses */}
          <Route path="/" element={<Navigate to="/courses" />} />

          {/* LMS Pages */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/enrollments" element={<Enrollments />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/discussions" element={<Discussions />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3 mt-4">
        <p className="mb-0">
          📚 Learning Management System – Built with <span className="text-warning">React + Bootstrap</span>
        </p>
      </footer>
    </div>
  );
}