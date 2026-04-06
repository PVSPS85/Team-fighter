import React from 'react';
import { AlertTriangle } from 'lucide-react';

const AlertsPanel = () => {
  return (
    <div style={{ background: '#FEF2F2', padding: '1.5rem', borderRadius: '16px', border: '1px solid #FCA5A5' }}>
      <h3 style={{ margin: '0 0 1rem 0', color: '#991B1B', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <AlertTriangle size={20} /> Action Required
      </h3>
      <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#7F1D1D', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <li>Fasting Glucose is above the normal threshold (100 mg/dL).</li>
        <li>Blood pressure indicates Stage 1 Hypertension.</li>
      </ul>
    </div>
  );
};

export default AlertsPanel;
