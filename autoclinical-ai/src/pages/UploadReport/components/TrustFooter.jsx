import React from 'react';
import { Shield, Cpu, Zap } from 'lucide-react';

const TrustFooter = () => {
  const features = [
    { icon: <Shield size={16} />, text: 'Secure Upload' },
    { icon: <Cpu size={16} />, text: 'AI-Powered Analysis' },
    { icon: <Zap size={16} />, text: 'Instant Insights' }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', padding: '1.5rem', borderTop: '1px solid #E2E8F0', background: '#FFFFFF' }}>
      {features.map((item, idx) => (
        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0B7B8A', fontSize: '0.9rem', fontWeight: '500' }}>
          {item.icon} {item.text}
        </div>
      ))}
    </div>
  );
};

export default TrustFooter;
