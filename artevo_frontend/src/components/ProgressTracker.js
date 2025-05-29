import React from "react";

// PUBLIC_INTERFACE
/**
 * Minimalist placeholder for the Progress Tracker.
 */
function ProgressTracker() {
  return (
    <div style={{
      padding: "38px 0",
      textAlign: "center",
      color: "var(--text-color)",
      fontFamily: "'Inter', 'Roboto', sans-serif"
    }}>
      <span style={{
        fontSize: "2.4rem",
        color: "var(--accent)",
        display: "inline-block",
        marginBottom: "12px"
      }}>
        📊
      </span>
      <h2 style={{ margin: 0, fontWeight: 600 }}>Progress Tracker</h2>
      <p style={{ color: "var(--text-secondary)" }}>
        Track your learning and achievements here.<br />
        Progress stats coming soon!
      </p>
    </div>
  );
}

export default ProgressTracker;
