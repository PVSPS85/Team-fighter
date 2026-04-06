import React from 'react';
import { FileText, Calendar, Eye, GitCompare } from 'lucide-react';
import RiskBadge from '../../../components/RiskBadge/RiskBadge';

const ReportCard = ({ report }) => {
  return (
    <div className="report-card">
      <div className="report-card-header">
        <div className="file-icon-box">
          <FileText color="#3B82F6" size={20} />
        </div>
        <RiskBadge level={report.risk} />
      </div>
      
      <h3>{report.title}</h3>
      <div className="report-date">
        <Calendar size={14} /> {report.date}
      </div>

      <div className="report-score-row">
        <span style={{color: '#64748B'}}>Score</span>
        <span style={{fontWeight: 700}}>{report.score}/100</span>
      </div>
      
      <div className="score-bar-bg">
        <div 
          className="score-bar-fill" 
          style={{ width: `${report.score}%`, backgroundColor: report.color }}
        ></div>
      </div>

      <div className="report-tags">
        {report.tags.map((tag, idx) => (
          <span key={idx} className="tag">{tag}</span>
        ))}
      </div>

      <div className="report-actions">
        <button className="btn-action btn-view">
          <Eye size={16} /> View
        </button>
        <button className="btn-action btn-compare">
          <GitCompare size={16} /> Compare
        </button>
      </div>
    </div>
  );
};

export default ReportCard;
