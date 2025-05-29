import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import AIAssistantPanel from './components/AIAssistantPanel';
import Gallery from './components/Gallery';
import Tutorials from './components/Tutorials';
import ProgressTracker from './components/ProgressTracker';

// PUBLIC_INTERFACE
/**
 * Top-level App component sets up routing for all main feature components via React Router.
 */
function App() {
  return (
    <div className="app">
      <Router>
        {/* MainContainer provides the navbar/sidebar/layout, renders main routes as children */}
        <MainContainer>
          <Routes>
            {/* Default route redirects to AI panel */}
            <Route path="/" element={<Navigate to="/ai-assistant" replace />} />
            <Route path="/ai-assistant" element={<AIAssistantPanel />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/progress" element={<ProgressTracker />} />
            {/* Fallback */}
            <Route path="*" element={<AIAssistantPanel />} />
          </Routes>
        </MainContainer>
      </Router>
    </div>
  );
}

export default App;