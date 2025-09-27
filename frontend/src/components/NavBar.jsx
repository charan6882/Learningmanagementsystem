import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        {/* Brand / Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          LMS
        </Link>

        {/* Navbar Toggler (for mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/courses">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/enrollments">
                Enrollments
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/submissions">
                Submissions
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/discussions">
                Discussions
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/certificates">
                Certificates
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}