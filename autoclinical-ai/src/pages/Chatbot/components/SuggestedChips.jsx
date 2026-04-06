import React from 'react';
import { Sparkles } from 'lucide-react';

const SuggestedChips = ({ onSelect }) => {
  const suggestions = [
    "Explain this report", "What precautions should I take?", "Is this dangerous?", 
    "Summarize for a patient", "Summarize for a doctor", "Compare with last report",
    "What should I do next?", "What does this value mean?", "Should I be worried?"
  ];

  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#8B5CF6', fontSize: '0.85rem', fontWeight: '600', marginBottom: '10px' }}>
        <Sparkles size={14} /> Suggested questions
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {suggestions.map((text, idx) => (
          <button 
            key={idx}
            onClick={() => onSelect(text)}
            style={{
              background: 'white', border: '1px solid #CBD5E1', color: '#0B7B8A', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s'
            }}
            onMouseOver={(e) => { e.target.style.borderColor = '#0B7B8A'; e.target.style.background = '#E6F6F8'; }}
            onMouseOut={(e) => { e.target.style.borderColor = '#CBD5E1'; e.target.style.background = 'white'; }}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedChips;
