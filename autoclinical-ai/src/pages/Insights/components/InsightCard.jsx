import React from 'react';

const InsightCard = ({ title, subtext, icon, color, bg }) => {
  return (
    <div style={{
      background: 'white', padding: '1.25rem', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid #F1F5F9'
    }}>
      <div style={{
        background: bg, color: color, width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem'
      }}>
        {icon}
      </div>
      <h4 style={{ margin: '0 0 4px 0', color: '#0F172A', fontSize: '1rem' }}>{title}</h4>
      <p style={{ margin: 0, color: '#64748B', fontSize: '0.85rem' }}>{subtext}</p>
    </div>
  );
};

export default InsightCard;
