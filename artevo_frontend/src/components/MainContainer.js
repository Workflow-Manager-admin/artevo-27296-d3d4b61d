import React, { useState } from "react";
import Sidebar from "./Sidebar";

// PUBLIC_INTERFACE
/**
 * MainContainer for ArtEvo.
 * Handles fixed navbar, collapsible sidebar, and renders routed main content.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Routed page content (provided by App)
 */
function MainContainer({ children }) {
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
          {/* center-box is for consistency/minimal design, but we render routed content here */}
          <div className="center-box">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainContainer;
