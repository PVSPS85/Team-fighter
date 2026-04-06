import React from 'react';

const ReportSelectorCard = ({ label, title, date, score }) => {
  return (
    <div className="selector-card">
      <span className="selector-label">{label}</span>
      <h2>{title}</h2>
      <p>{date}</p>
      <div className="selector-score">
        {score}<span>/100</span>
      </div>
    </div>
  );
};

export default ReportSelectorCard;
