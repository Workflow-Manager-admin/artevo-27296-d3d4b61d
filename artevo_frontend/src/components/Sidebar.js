import React from "react";

// PUBLIC_INTERFACE
/**
 * Sidebar component for navigation between main app sections.
 * Collapsible and styled according to dark/ombre ArtEvo theme.
 */
function Sidebar({ open, onClose }) {
  return (
    <aside className={`sidebar${open ? " open" : ""}`}>
      <button className="sidebar-close-btn" aria-label="Close sidebar" onClick={onClose}>
        ×
      </button>
      <ul className="sidebar-nav">
        <li>
          <a className="sidebar-link active" href="#">
            <span role="img" aria-label="AI">🧠</span> AI Assistant
          </a>
        </li>
        <li>
          <a className="sidebar-link" href="#">
            <span role="img" aria-label="Gallery">🖼️</span> Gallery
          </a>
        </li>
        <li>
          <a className="sidebar-link" href="#">
            <span role="img" aria-label="Tutorials">📖</span> Tutorials
          </a>
        </li>
        <li>
          <a className="sidebar-link" href="#">
            <span role="img" aria-label="Profile">👤</span> Profile
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
