import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      {/* Left: Logo & Title */}
      <div className="header-left">
        <span className="header-logo">🎯</span>
        <h1 className="header-title">Student Management System</h1>
      </div>

      {/* Middle: Search bar */}
      {/* <div className="header-search">
        <input type="text" placeholder="Search students..." />
        <button>Search</button>
      </div> */}

      {/* Right: Navigation + Profile */}
      <div className="header-right">
        <nav className="header-nav">
          <a href="/" className="nav-link">Dashboard</a>
          {/* <a href="/add" className="nav-link">Add Student</a>
          <a href="/students" className="nav-link">Student List</a> */}
        </nav>

        <div className="profile">
          <img
            src="https://i.pravatar.cc/40?img=8"
            alt="Profile"
            className="profile-img"
          />
          <span className="profile-name">Admin</span>
        </div>
      </div>
    </header>
  );
}
