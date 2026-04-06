import React, { useState } from 'react';
import { Stethoscope, User } from 'lucide-react';

const RoleSelection = ({ onNext }) => {
  const [selected, setSelected] = useState('Patient');

  return (
    <div className="onboarding-card">
      <h2 style={{ margin: '0 0 8px 0', fontSize: '1.5rem' }}>Choose your role</h2>
      <p style={{ color: '#94A3B8', margin: '0 0 2rem 0', fontSize: '0.95rem' }}>Select how you'll use AutoClinical AI</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        
        <div onClick={() => setSelected('Professional')} style={{
          padding: '1.25rem', border: `1px solid ${selected === 'Professional' ? '#0B7B8A' : '#334155'}`, borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', background: selected === 'Professional' ? 'rgba(11, 123, 138, 0.1)' : 'transparent'
        }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '10px' }}><Stethoscope size={20} /></div>
          <div style={{ flex: 1 }}>
            <h4 style={{ margin: '0 0 4px 0' }}>Healthcare Professional</h4>
            <p style={{ margin: 0, color: '#94A3B8', fontSize: '0.85rem' }}>Detailed analytics, raw data, clinical summaries</p>
          </div>
          <div style={{ width: '18px', height: '18px', borderRadius: '50%', border: `2px solid ${selected === 'Professional' ? '#0B7B8A' : '#64748B'}`, background: selected === 'Professional' ? '#0B7B8A' : 'transparent' }}></div>
        </div>

        <div onClick={() => setSelected('Patient')} style={{
          padding: '1.25rem', border: `1px solid ${selected === 'Patient' ? '#0B7B8A' : '#334155'}`, borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', background: selected === 'Patient' ? 'rgba(11, 123, 138, 0.1)' : 'transparent'
        }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '10px' }}><User size={20} /></div>
          <div style={{ flex: 1 }}>
            <h4 style={{ margin: '0 0 4px 0' }}>Patient</h4>
            <p style={{ margin: 0, color: '#94A3B8', fontSize: '0.85rem' }}>Simple explanations, guidance, actionable advice</p>
          </div>
          <div style={{ width: '18px', height: '18px', borderRadius: '50%', border: `2px solid ${selected === 'Patient' ? '#0B7B8A' : '#64748B'}`, background: selected === 'Patient' ? '#0B7B8A' : 'transparent' }}></div>
        </div>

      </div>

      <button onClick={onNext} style={{ width: '100%', padding: '14px', background: '#0B7B8A', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer' }}>
        Continue →
      </button>
    </div>
  );
};

export default RoleSelection;
