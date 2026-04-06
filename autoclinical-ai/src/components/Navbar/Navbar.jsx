import React from 'react';
import { Bell, Search, User, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ userName = "John Doe", role = "Patient" }) => {
  return (
    <header className="top-navbar">
      <div className="navbar-search">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Search patients, reports, or metrics..." />
      </div>

      <div className="navbar-actions">
        <button className="icon-btn" aria-label="Toggle Dark Mode">
          <Moon size={20} />
        </button>
        <button className="icon-btn notification-btn" aria-label="Notifications">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>
        
        <div className="user-profile-dropdown">
          <div className="avatar-circle">
            <User size={18} />
          </div>
          <div className="user-details">
            <span className="user-name">{userName}</span>
            <span className="user-role">{role}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
