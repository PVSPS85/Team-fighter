import React from 'react';
import { Bell } from 'lucide-react';

const NotificationsCard = () => {
  return (
    <div className="settings-card">
      <div className="settings-card-header">
        <div style={{ background: '#FEF3C7', padding: '6px', borderRadius: '8px', color: '#D97706', display: 'flex' }}>
          <Bell size={18} />
        </div>
        <h3>Notifications</h3>
      </div>
      <div className="settings-card-body">
        <div className="setting-row">
          <span className="setting-label">Report Analysis Complete</span>
          <label className="toggle-switch">
            <input type="checkbox" defaultChecked />
            <span className="slider"></span>
          </label>
        </div>
        <div className="setting-row">
          <span className="setting-label">Abnormal Metric Alerts</span>
          <label className="toggle-switch">
            <input type="checkbox" defaultChecked />
            <span className="slider"></span>
          </label>
        </div>
        <div className="setting-row">
          <span className="setting-label">Follow-up Reminders</span>
          <label className="toggle-switch">
            <input type="checkbox" defaultChecked />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NotificationsCard;
