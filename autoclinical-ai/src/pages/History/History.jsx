import React, { useState } from 'react';
import './History.css';
import SearchBar from './components/SearchBar';
import FilterTabs from './components/FilterTabs';
import ReportCard from './components/ReportCard';

const History = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Mock data based on your design
  const reports = [
    { id: 1, title: 'High Glucose Risk Report - John Doe', date: 'Apr 3, 2026', score: 72, risk: 'Moderate', tags: ['High Glucose', 'Elevated BP'], color: '#F59E0B' },
    { id: 2, title: 'Routine Blood Panel - John Doe', date: 'Mar 15, 2026', score: 78, risk: 'Low', tags: ['Normal', 'Improving'], color: '#10B981' },
    { id: 3, title: 'Lipid Profile Analysis - John Doe', date: 'Feb 28, 2026', score: 68, risk: 'Moderate', tags: ['High Cholesterol'], color: '#F59E0B' },
    { id: 4, title: 'Complete Health Check - John Doe', date: 'Feb 1, 2026', score: 74, risk: 'Low', tags: ['Normal'], color: '#10B981' },
    { id: 5, title: 'Diabetes Screening - John Doe', date: 'Jan 12, 2026', score: 62, risk: 'High', tags: ['Critical Glucose'], color: '#EF4444' },
    { id: 6, title: 'Quarterly Review - John Doe', date: 'Dec 20, 2025', score: 82, risk: 'Low', tags: ['Stable'], color: '#10B981' },
  ];

  return (
    <div className="history-container">
      <div className="page-header">
        <h1>Report History</h1>
        <p>View and manage your medical report history</p>
      </div>

      <div className="history-controls">
        <SearchBar />
        <FilterTabs activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      </div>

      <div className="reports-grid">
        {reports.map((report) => (
          <ReportCard key={report.id} report={report} />
        ))}
      </div>
    </div>
  );
};

export default History;
