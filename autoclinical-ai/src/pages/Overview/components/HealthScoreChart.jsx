import React from 'react';

const HealthScoreChart = () => {
  return (
    <div style={{ height: '250px', display: 'flex', alignItems: 'flex-end', gap: '10px', padding: '1rem 0' }}>
       {/* Mock Bar Chart to simulate Recharts */}
       {[40, 55, 45, 70, 65, 85].map((height, i) => (
         <div key={i} style={{ flex: 1, background: i === 5 ? '#0B7B8A' : '#E2E8F0', height: `${height}%`, borderRadius: '4px 4px 0 0', transition: 'height 0.3s' }}></div>
       ))}
    </div>
  );
};

export default HealthScoreChart;
