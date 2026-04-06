import React from 'react';
import './CompareReports.css';
import ReportSelectorCard from './components/ReportSelectorCard';
import VerdictBanner from './components/VerdictBanner';
import MetricComparisonTable from './components/MetricComparisonTable';

const CompareReports = () => {
  return (
    <div className="compare-container">
      <div className="page-header">
        <h1>Compare Reports</h1>
        <p>Side-by-side health metric comparison</p>
      </div>

      <div className="comparison-selectors">
        <ReportSelectorCard 
          label="Earlier Report" 
          title="Diabetes Screening" 
          date="Jan 12, 2026" 
          score={62} 
        />
        <ReportSelectorCard 
          label="Latest Report" 
          title="High Glucose Risk Report" 
          date="Apr 3, 2026" 
          score={72} 
        />
      </div>

      <VerdictBanner />
      
      <div className="metrics-section">
        <h3>Metric Comparison</h3>
        <MetricComparisonTable />
      </div>
    </div>
  );
};

export default CompareReports;
