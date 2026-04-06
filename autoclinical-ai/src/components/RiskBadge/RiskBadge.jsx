import React from 'react';
import './RiskBadge.css';

const RiskBadge = ({ level }) => {
  const getBadgeStyle = () => {
    switch (level.toLowerCase()) {
      case 'high':
        return { bg: '#FEE2E2', text: '#EF4444', label: 'High Risk' };
      case 'moderate':
        return { bg: '#FEF3C7', text: '#F59E0B', label: 'Moderate' };
      case 'low':
      case 'normal':
        return { bg: '#D1FAE5', text: '#10B981', label: 'Normal' };
      default:
        return { bg: '#F1F5F9', text: '#64748B', label: level };
    }
  };

  const style = getBadgeStyle();

  return (
    <span 
      className="risk-badge" 
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {style.label}
    </span>
  );
};

export default RiskBadge;
