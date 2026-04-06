import { memo } from "react";
import "./StatCard.css";

const StatCard = ({ title, value, change }) => {
  return (
    <div className="stat-card">
      <p className="stat-title">{title}</p>
      <h2 className="stat-value">{value}</h2>
      {change && <span className="stat-change">{change}</span>}
    </div>
  );
};

export default memo(StatCard);
