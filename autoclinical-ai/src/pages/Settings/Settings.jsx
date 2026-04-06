import React from 'react';
import './Settings.css';
import ProfileCard from './components/ProfileCard';
import AppearanceCard from './components/AppearanceCard';
import NotificationsCard from './components/NotificationsCard';

const Settings = () => {
  return (
    <div className="settings-container">
      <div className="page-header">
        <h1>Settings</h1>
        <p>Manage your account, preferences, and notifications</p>
      </div>

      <div className="settings-content">
        <ProfileCard />
        <AppearanceCard />
        <NotificationsCard />
      </div>
    </div>
  );
};

export default Settings;
