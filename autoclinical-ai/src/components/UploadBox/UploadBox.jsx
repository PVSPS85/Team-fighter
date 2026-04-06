import React from 'react';
import './UploadReport.css';
import { UploadCloud, Shield, Cpu, Zap } from 'lucide-react';

const UploadReport = () => {
  return (
    <div className="upload-container">
      <div className="upload-header">
        <h1>Upload Report</h1>
        <p>Upload your medical report for AI-powered analysis</p>
      </div>

      <div className="upload-card">
        <div className="upload-area">
          <div className="upload-icon-wrapper">
            <UploadCloud size={40} color="#0B7B8A" />
          </div>
          <h2>Drag & drop your medical report</h2>
          <p>or click to browse files</p>
          
          <div className="file-types">
            <span>PDF</span>
            <span>JPG</span>
            <span>PNG</span>
          </div>

          <button className="btn-browse">Browse Files</button>
        </div>

        <div className="upload-features">
          <div className="feature">
            <Shield size={16} /> Secure Upload
          </div>
          <div className="feature">
            <Cpu size={16} /> AI-Powered Analysis
          </div>
          <div className="feature">
            <Zap size={16} /> Instant Insights
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadReport;
