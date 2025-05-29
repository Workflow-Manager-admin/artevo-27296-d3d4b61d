import React, { useState } from "react";
import Sidebar from "./Sidebar";

// PUBLIC_INTERFACE
/**
 * MainContainer for ArtEvo.
 * Handles fixed navbar, collapsible sidebar, and centered main content area with minimalist dark/gradient styling.
 */
function MainContainer() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="main-layout">
      {/* Top Navbar */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo">
            <span className="logo-symbol" aria-label="Logo" style={{ color: "#FF4081" }}>
              ●
            </span>
            <span className="logo-text">ArtEvo</span>
          </div>
          <button
            className="sidebar-toggle"
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
            onClick={() => setSidebarOpen((v) => !v)}
          >
            <span className="hamburger" />
          </button>
        </div>
      </nav>

      {/* Main Body with Sidebar and Content */}
      <div className={`core-container${sidebarOpen ? " sidebar-open" : ""}`}>
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="main-content">
          <div className="center-box">
            <div className="subtitle">AI-Powered Art Assistant</div>
            <h1 className="title" style={{ marginTop: 0 }}>Welcome to ArtEvo</h1>
            <div className="description">
              A minimalist, AI-driven art learning environment.<br />
              <span style={{ color: "#FF4081" }}>Start exploring creative tools!</span>
            </div>
            <button className="main-action-btn">Get Started</button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainContainer;
