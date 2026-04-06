import React from 'react';

const PriorityHeatmap = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', height: '200px' }}>
      <div style={{ background: '#FEE2E2', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#991B1B', fontWeight: 'bold' }}>BP</div>
      <div style={{ background: '#FEF3C7', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#92400E', fontWeight: 'bold' }}>BMI</div>
      <div style={{ background: '#D1FAE5', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#065F46', fontWeight: 'bold' }}>HR</div>
      <div style={{ background: '#FEE2E2', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#991B1B', fontWeight: 'bold' }}>Gluc</div>
      <div style={{ background: '#D1FAE5', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#065F46', fontWeight: 'bold' }}>Chol</div>
      <div style={{ background: '#F1F5F9', borderRadius: '8px' }}></div>
    </div>
  );
};

export default PriorityHeatmap;
