import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AnalysisResults.css';
import ExtractedFieldsPanel from './components/ExtractedFieldsPanel';
import AIExplanationBox from './components/AIExplanationBox';
import { CheckCircle, ArrowRight } from 'lucide-react';

const AnalysisResults = () => {
  const navigate = useNavigate();

  return (
    <div className="results-container">
      <div className="success-banner">
        <CheckCircle size={24} color="#10B981" />
        <div>
          <h2>Analysis Complete</h2>
          <p>Your report has been successfully processed by AutoClinical AI.</p>
        </div>
      </div>

      <div className="results-grid">
        <ExtractedFieldsPanel />
        <AIExplanationBox />
      </div>

      <div className="results-actions">
        <button className="btn-secondary" onClick={() => navigate('/upload')}>Upload Another</button>
        <button className="btn-primary" onClick={() => navigate('/overview')}>Go to Dashboard <ArrowRight size={18}/></button>
      </div>
    </div>
  );
};

export default AnalysisResults;
