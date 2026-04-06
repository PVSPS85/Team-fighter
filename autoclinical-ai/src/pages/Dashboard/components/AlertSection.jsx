import React from 'react';
import { BellRing } from 'lucide-react';

const AlertSection = () => {
  const alerts = [
    { time: "10 mins ago", text: "New lab results uploaded for Cohort B.", type: "info" },
    { time: "1 hr ago", text: "Critical: HbA1c threshold exceeded for ID #4092.", type: "danger" },
    { time: "3 hrs ago", text: "Daily AI summary generated successfully.", type: "success" }
  ];

  return (
    <div className="dash-card" style={{ height: '100%' }}>
      <h3><BellRing size={20} color="#F59E0B" /> Recent Alerts</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {alerts.map((a, i) => (
          <div key={i} style={{ 
            borderLeft: `4px solid ${a.type === 'danger' ? '#EF4444' : a.type === 'success' ? '#10B981' : '#3B82F6'}`,
            padding: '12px', background: '#F8FAFC', borderRadius: '4px' 
          }}>
            <p style={{ margin: '0 0 4px 0', fontSize: '0.9rem', color: '#1E293B' }}>{a.text}</p>
            <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertSection;
