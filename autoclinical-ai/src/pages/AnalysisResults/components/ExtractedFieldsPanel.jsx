import React from 'react';

const ExtractedFieldsPanel = () => {
  const fields = [
    { name: 'Fasting Glucose', value: '112 mg/dL', status: 'Elevated' },
    { name: 'Total Cholesterol', value: '185 mg/dL', status: 'Normal' },
    { name: 'Triglycerides', value: '140 mg/dL', status: 'Normal' },
  ];

  return (
    <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
      <h3 style={{ margin: '0 0 1.5rem 0', color: '#0F172A' }}>Extracted Biomarkers</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {fields.map((field, idx) => (
          <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid #F1F5F9' }}>
            <span style={{ fontWeight: '500', color: '#334155' }}>{field.name}</span>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span style={{ fontWeight: '700', color: '#0F172A' }}>{field.value}</span>
              <span style={{ 
                fontSize: '0.8rem', padding: '4px 8px', borderRadius: '4px', fontWeight: '600',
                background: field.status === 'Normal' ? '#D1FAE5' : '#FEF3C7',
                color: field.status === 'Normal' ? '#10B981' : '#D97706'
              }}>
                {field.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtractedFieldsPanel;
