import React from "react";
import { NavLink } from "react-router-dom";

// PUBLIC_INTERFACE
/**
 * Sidebar component for navigation between main app sections.
 * Collapsible and styled according to dark/ombre ArtEvo theme.
 *
 * Renders nav links using NavLink for active highlighting.
 */
function Sidebar({ open, onClose }) {
  // Only close sidebar on navigation for mobile experience
  const handleNavClick = () => {
    if (typeof onClose === "function") onClose();
  };

  return (
    <aside className={`sidebar${open ? " open" : ""}`}>
      <button className="sidebar-close-btn" aria-label="Close sidebar" onClick={onClose}>
        ×
      </button>
      <ul className="sidebar-nav">
        <li>
          <NavLink
            to="/ai-assistant"
            className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")}
            onClick={handleNavClick}
          >
            <span role="img" aria-label="AI">🧠</span> AI Assistant
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")}
            onClick={handleNavClick}
          >
            <span role="img" aria-label="Gallery">🖼️</span> Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tutorials"
            className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")}
            onClick={handleNavClick}
          >
            <span role="img" aria-label="Tutorials">📖</span> Tutorials
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/progress"
            className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")}
            onClick={handleNavClick}
          >
            <span role="img" aria-label="Progress">📊</span> Progress Tracker
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
