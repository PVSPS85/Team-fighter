import React from 'react';
import { BrainCircuit } from 'lucide-react';

const AIExplanationBlock = () => {
  return (
    <div className="dash-card" style={{ background: '#F5F3FF', borderColor: '#EDE9FE' }}>
      <h3 style={{ color: '#6D28D9' }}><BrainCircuit size={20} /> AI Cohort Summary</h3>
      <p style={{ margin: 0, color: '#4C1D95', lineHeight: '1.6', fontSize: '0.95rem' }}>
        The current trial cohort shows a 12% improvement in overall biomarker stability compared to baseline. However, AI pattern recognition flags a localized cluster of elevated liver enzymes in the 45-55 age demographic that requires clinical review.
      </p>
    </div>
  );
};

export default AIExplanationBlock;
