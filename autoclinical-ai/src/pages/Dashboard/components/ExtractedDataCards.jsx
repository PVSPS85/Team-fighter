import React from 'react';
import { Activity } from 'lucide-react';

const ExtractedDataCards = () => {
  const metrics = [
    { label: "Total Participants", value: "1,248" },
    { label: "Reports Analyzed", value: "8,932" },
    { label: "Anomalies Detected", value: "47", alert: true },
    { label: "Trial Efficacy Rate", value: "84.2%" }
  ];

  return (
    <div className="dash-card">
      <h3><Activity size={20} color="#0B7B8A" /> Cohort Metrics Snapshot</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
        {metrics.map((m, i) => (
          <div key={i} style={{ background: '#F8FAFC', padding: '1rem', borderRadius: '8px' }}>
            <span style={{ color: '#64748B', fontSize: '0.85rem' }}>{m.label}</span>
            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: m.alert ? '#EF4444' : '#0F172A', marginTop: '4px' }}>
              {m.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtractedDataCards;
