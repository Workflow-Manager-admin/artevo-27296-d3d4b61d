import React from "react";

// PUBLIC_INTERFACE
/**
 * Minimalist placeholder for interactive Tutorials.
 */
function Tutorials() {
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
        📖
      </span>
      <h2 style={{ margin: 0, fontWeight: 600 }}>Tutorials</h2>
      <p style={{ color: "var(--text-secondary)" }}>
        Step-by-step art tutorials with AI<br />
        will be available here soon!
      </p>
    </div>
  );
}

export default Tutorials;
