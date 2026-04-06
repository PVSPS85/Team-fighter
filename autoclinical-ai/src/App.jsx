import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Overview from './pages/Overview/Overview';
import UploadReport from './pages/UploadReport/UploadReport';
import History from './pages/History/History';
import CompareReports from './pages/CompareReports/CompareReports';
import Insights from './pages/Insights/Insights';
import Chatbot from './pages/Chatbot/Chatbot';
import Settings from './pages/Settings/Settings';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/overview" replace />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/upload" element={<UploadReport />} />
            <Route path="/history" element={<History />} />
            <Route path="/compare" element={<CompareReports />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
