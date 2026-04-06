import React from 'react';
import { ShieldAlert } from 'lucide-react';

const RiskIndicatorPanel = () => {
  const risks = [
    { name: "Patient ID #4092", risk: "Severe Hepatotoxicity", probability: "92%" },
    { name: "Patient ID #1108", risk: "Elevated BP Trend", probability: "78%" },
    { name: "Patient ID #5531", risk: "Protocol Non-adherence", probability: "65%" },
  ];

  return (
    <div className="dash-card">
      <h3><ShieldAlert size={20} color="#EF4444" /> AI Risk Stratification (Top Priority)</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ textAlign: 'left', color: '#64748B', fontSize: '0.85rem', borderBottom: '1px solid #E2E8F0' }}>
            <th style={{ padding: '12px 0' }}>Participant</th>
            <th style={{ padding: '12px 0' }}>Predicted Risk Event</th>
            <th style={{ padding: '12px 0' }}>AI Confidence</th>
            <th style={{ padding: '12px 0' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {risks.map((r, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #F1F5F9' }}>
              <td style={{ padding: '12px 0', fontWeight: '500' }}>{r.name}</td>
              <td style={{ padding: '12px 0', color: '#EF4444' }}>{r.risk}</td>
              <td style={{ padding: '12px 0' }}>{r.probability}</td>
              <td style={{ padding: '12px 0' }}>
                <button style={{ background: '#FEF2F2', color: '#DC2626', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>Review</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RiskIndicatorPanel;
