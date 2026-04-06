import React from 'react';
import { Cpu } from 'lucide-react';

const AISummaryBlock = () => {
  return (
    <div className="ai-summary-block" style={{
      background: '#F5F3FF', border: '1px solid #EDE9FE', borderRadius: '16px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ background: '#8B5CF6', padding: '8px', borderRadius: '8px', color: 'white', display: 'flex' }}>
          <Cpu size={20} />
        </div>
        <h3 style={{ margin: 0, color: '#0F172A', fontSize: '1.1rem' }}>AI-Generated Summary</h3>
      </div>
      <p style={{ margin: 0, color: '#475569', lineHeight: '1.6', fontSize: '0.95rem' }}>
        Based on 6 reports over 6 months: cholesterol and hemoglobin improving, but glucose and BP require immediate attention. Rising glucose-BP correlation suggests metabolic stress. Lifestyle intervention recommended within 2-4 weeks.
      </p>
    </div>
  );
};

export default AISummaryBlock;
