import React from 'react';
import { Download, Share2 } from 'lucide-react';

const ResultActionButtons = () => {
  return (
    <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
      <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '10px', background: 'white', border: '1px solid #CBD5E1', borderRadius: '8px', color: '#475569', fontWeight: '600', cursor: 'pointer' }}>
        <Download size={18} /> Download PDF
      </button>
      <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '10px', background: 'white', border: '1px solid #CBD5E1', borderRadius: '8px', color: '#475569', fontWeight: '600', cursor: 'pointer' }}>
        <Share2 size={18} /> Share Results
      </button>
    </div>
  );
};

export default ResultActionButtons;
