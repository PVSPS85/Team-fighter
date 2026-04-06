import React from 'react';
import { Sparkles } from 'lucide-react';

const AIExplanationBox = () => {
  return (
    <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: '16px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8B5CF6', fontWeight: '600' }}>
        <Sparkles size={20} /> AI Clinical Summary
      </div>
      
      <p style={{ margin: 0, color: '#475569', lineHeight: '1.6' }}>
        The uploaded lab report indicates stable lipid profiles, with Total Cholesterol and Triglycerides within standard ranges. However, Fasting Glucose is slightly elevated at 112 mg/dL, which falls into the pre-diabetic range. 
      </p>
      
      <div style={{ background: 'white', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #0B7B8A' }}>
        <strong style={{ color: '#0F172A', display: 'block', marginBottom: '4px' }}>Recommended Action</strong>
        <span style={{ color: '#475569', fontSize: '0.95rem' }}>Consider scheduling a follow-up HbA1c test in 3 months to monitor long-term glucose trends.</span>
      </div>
    </div>
  );
};

export default AIExplanationBox;
