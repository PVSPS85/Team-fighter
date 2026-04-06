import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Shield, Zap, Database } from 'lucide-react';
import './Landing.css';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <nav className="landing-nav">
        <div className="brand"><Activity color="#0B7B8A" /> AutoClinical AI</div>
        <button className="btn-login" onClick={() => navigate('/welcome')}>Login</button>
      </nav>

      <header className="hero-section">
        <div className="hero-badge">✨ Award-Winning Clinical Trial Tech</div>
        <h1>Accelerate Clinical Trials with <span className="text-gradient">AI Intelligence</span></h1>
        <p>Upload medical reports, stratify patient cohorts, and detect anomalies in seconds, not weeks. The future of trial management is here.</p>
        <button className="btn-cta" onClick={() => navigate('/welcome')}>Launch Platform</button>
      </header>

      <section className="features-grid">
        <div className="feature-card">
          <Zap color="#F59E0B" size={32} />
          <h3>Instant Extraction</h3>
          <p>Proprietary OCR and LLM pipeline digitizes physical lab reports instantly.</p>
        </div>
        <div className="feature-card">
          <Shield color="#10B981" size={32} />
          <h3>Risk Stratification</h3>
          <p>Real-time anomaly detection keeps your trial participants safe.</p>
        </div>
        <div className="feature-card">
          <Database color="#3B82F6" size={32} />
          <h3>Longitudinal Tracking</h3>
          <p>Compare historical biomarkers side-by-side with zero manual data entry.</p>
        </div>
      </section>
    </div>
  );
};

export default Landing;
