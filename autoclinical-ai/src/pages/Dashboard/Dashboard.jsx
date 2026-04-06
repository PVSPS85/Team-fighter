import React from 'react';
import './Dashboard.css';
import ExtractedDataCards from './components/ExtractedDataCards';
import RiskIndicatorPanel from './components/RiskIndicatorPanel';
import AlertSection from './components/AlertSection';
import { Users, FileSpreadsheet } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="professional-dashboard">
      <div className="page-header">
        <div>
          <h1>Clinical Trial Cohort #42</h1>
          <p>Real-time AI monitoring and risk stratification for trial participants</p>
        </div>
        <div className="header-actions">
          <button className="btn-secondary"><FileSpreadsheet size={18} /> Export Data</button>
          <button className="btn-primary"><Users size={18} /> Add Participant</button>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="main-panel">
          <ExtractedDataCards />
          <RiskIndicatorPanel />
        </div>
        <div className="side-panel">
          <AlertSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
