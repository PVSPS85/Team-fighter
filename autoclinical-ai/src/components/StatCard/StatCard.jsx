import React from 'react';
import './StatCard.css';

const StatCard = ({ title, value, subtext, icon, iconBgColor, subtextColor }) => {
  return (
    <div className="stat-card">
      <div className="stat-icon" style={{ backgroundColor: iconBgColor }}>
        {icon}
      </div>
      <h2 className="stat-value">{value}</h2>
      <p className="stat-title">{title}</p>
      <span className="stat-subtext" style={{ color: subtextColor }}>
        {subtext}
      </span>
    </div>
  );
};

export default StatCard;
