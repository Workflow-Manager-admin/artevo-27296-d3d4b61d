import React from "react";

// PUBLIC_INTERFACE
/**
 * Minimalist placeholder for the AI Assistant panel.
 */
function AIAssistantPanel() {
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
        🧠
      </span>
      <h2 style={{ margin: 0, fontWeight: 600 }}>AI Assistant</h2>
      <p style={{ color: "var(--text-secondary)" }}>
        Your creative virtual art guide will appear here.<br />
        Personalized feedback &amp; help coming soon!
      </p>
    </div>
  );
}

export default AIAssistantPanel;
