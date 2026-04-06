import React from 'react';

const UserDetailsForm = ({ onComplete }) => {
  return (
    <div className="onboarding-card">
      <h2 style={{ margin: '0 0 8px 0', fontSize: '1.5rem' }}>Welcome aboard</h2>
      <p style={{ color: '#94A3B8', margin: '0 0 2rem 0', fontSize: '0.95rem' }}>Your AI health intelligence platform is ready</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#CBD5E1' }}>Full Name</label>
          <input type="text" defaultValue="John Doe" style={{ width: '100%', padding: '12px 16px', background: 'rgba(0,0,0,0.2)', border: '1px solid #334155', borderRadius: '8px', color: 'white', fontSize: '1rem', outline: 'none' }} />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#CBD5E1' }}>Email</label>
          <input type="email" defaultValue="user@autoclinical.ai" style={{ width: '100%', padding: '12px 16px', background: 'rgba(0,0,0,0.2)', border: '1px solid #334155', borderRadius: '8px', color: 'white', fontSize: '1rem', outline: 'none' }} />
        </div>
      </div>

      <button onClick={onComplete} style={{ width: '100%', padding: '14px', background: '#0B7B8A', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer' }}>
        Get Started →
      </button>
    </div>
  );
};

export default UserDetailsForm;
