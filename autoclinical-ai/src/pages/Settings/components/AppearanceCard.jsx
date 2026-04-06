import React from 'react';
import { Palette } from 'lucide-react';

const AppearanceCard = () => {
  return (
    <div className="settings-card">
      <div className="settings-card-header">
        <div style={{ background: '#F3E8FF', padding: '6px', borderRadius: '8px', color: '#9333EA', display: 'flex' }}>
          <Palette size={18} />
        </div>
        <h3>Appearance</h3>
      </div>
      <div className="settings-card-body">
        <div className="setting-row">
          <span className="setting-label">Dark Mode</span>
          <label className="toggle-switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppearanceCard;
