import React from 'react';

const FormatBadges = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '1.5rem 0' }}>
      {['PDF', 'JPG', 'PNG'].map(ext => (
        <span key={ext} style={{ background: '#F1F5F9', padding: '4px 12px', borderRadius: '4px', fontSize: '0.85rem', color: '#64748B', fontWeight: '500' }}>
          {ext}
        </span>
      ))}
    </div>
  );
};

export default FormatBadges;
