import React, { useState } from 'react';
import { User } from 'lucide-react';

const ProfileCard = () => {
  const [role, setRole] = useState('Patient');

  return (
    <div className="settings-card">
      <div className="settings-card-header">
        <div style={{ background: '#E0F2FE', padding: '6px', borderRadius: '8px', color: '#0284C7', display: 'flex' }}>
          <User size={18} />
        </div>
        <h3>Profile</h3>
      </div>
      <div className="settings-card-body">
        <div className="setting-row">
          <span className="setting-label">Full Name</span>
          <span className="setting-value">John Doe</span>
        </div>
        <div className="setting-row">
          <span className="setting-label">Email</span>
          <span className="setting-value">user@autoclinical.ai</span>
        </div>
        <div className="setting-row">
          <span className="setting-label">Role</span>
          <div style={{ display: 'flex', background: '#F1F5F9', borderRadius: '8px', padding: '4px' }}>
            <button 
              onClick={() => setRole('Patient')}
              style={{ padding: '6px 16px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500', background: role === 'Patient' ? '#0B7B8A' : 'transparent', color: role === 'Patient' ? 'white' : '#64748B' }}
            >
              Patient
            </button>
            <button 
              onClick={() => setRole('Professional')}
              style={{ padding: '6px 16px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500', background: role === 'Professional' ? '#0B7B8A' : 'transparent', color: role === 'Professional' ? 'white' : '#64748B' }}
            >
              Professional
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
