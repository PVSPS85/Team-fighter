import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, UploadCloud, Clock, GitCompare, Lightbulb, MessageSquare, Settings } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const navItems = [
    { path: '/overview', name: 'Overview', icon: <LayoutDashboard size={20} /> },
    { path: '/upload', name: 'Upload Report', icon: <UploadCloud size={20} /> },
    { path: '/history', name: 'History', icon: <Clock size={20} /> },
    { path: '/compare', name: 'Compare Reports', icon: <GitCompare size={20} /> },
    { path: '/insights', name: 'Insights', icon: <Lightbulb size={20} /> },
    { path: '/chatbot', name: 'Chatbot', icon: <MessageSquare size={20} /> },
    { path: '/settings', name: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">~v~</div>
        <div>
          <h2>AutoClinical</h2>
          <p>AI Health Intelligence</p>
        </div>
      </div>
      
      <div className="sidebar-nav-section">
        <span className="nav-label">NAVIGATION</span>
        <nav className="nav-menu">
          {navItems.map((item) => (
            <NavLink 
              to={item.path} 
              key={item.name}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="sidebar-footer">
        <div className="footer-badge">
          <span className="badge-icon">🛡️</span> HIPAA-Inspired Design
        </div>
        <div className="footer-badge ai-badge">
          <span className="badge-icon">✨</span> AI Powered Analysis
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
