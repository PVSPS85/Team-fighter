import React from 'react';
import StatCard from '../../../components/StatCard/StatCard';
import { FileText, AlertTriangle, Heart } from 'lucide-react';

const StatsRow = () => {
  return (
    <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem' }}>
      <StatCard title="Total Reports" value="24" subtext="↗ +3 this week" icon={<FileText color="#0B7B8A" />} iconBgColor="#E6F6F8" subtextColor="#0B7B8A" />
      <StatCard title="Risk Alerts" value="3" subtext="↘ -1 from last week" icon={<AlertTriangle color="#EF4444" />} iconBgColor="#FEE2E2" subtextColor="#EF4444" />
      <StatCard title="Health Score" value="85/100" subtext="↗ +5 pts improvement" icon={<Heart color="#10B981" />} iconBgColor="#D1FAE5" subtextColor="#10B981" />
    </div>
  );
};

export default StatsRow;
