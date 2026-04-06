import React from 'react';
import './Overview.css';
import { UploadCloud, FileText, AlertTriangle, Heart, Sparkles, TrendingUp, CheckCircle } from 'lucide-react';

const Overview = () => {
  const stats = [
    { title: 'Total Reports', value: '24', subtext: '↗ +3 this week', icon: <FileText color="#0B7B8A" />, color: '#E6F6F8', subColor: '#0B7B8A' },
    { title: 'Risk Alerts', value: '3', subtext: '↘ -1 from last week', icon: <AlertTriangle color="#EF4444" />, color: '#FEE2E2', subColor: '#EF4444' },
    { title: 'Health Score', value: '85/100', subtext: '↗ +5 pts improvement', icon: <Heart color="#10B981" />, color: '#D1FAE5', subColor: '#10B981' },
    { title: 'AI Confidence', value: '92%', subtext: '↗ High accuracy', icon: <Sparkles color="#8B5CF6" />, color: '#EDE9FE', subColor: '#8B5CF6' },
    { title: 'Reports This Week', value: '4', subtext: '↗ Active tracking', icon: <TrendingUp color="#3B82F6" />, color: '#DBEAFE', subColor: '#3B82F6' },
    { title: 'Improved Cases', value: '18', subtext: '↗ 75% improvement rate', icon: <CheckCircle color="#10B981" />, color: '#D1FAE5', subColor: '#10B981' },
  ];

  return (
    <div className="overview-container">
      <header className="page-header">
        <div className="header-text">
          <h1>Welcome back, John</h1>
          <p>Here's your AI-powered health intelligence overview</p>
        </div>
        <button className="btn-primary">
          <UploadCloud size={18} /> Upload Report
        </button>
      </header>

      <section className="stats-grid">
        {stats.map((stat, idx) => (
          <div className="stat-card" key={idx}>
            <div className="stat-icon" style={{ backgroundColor: stat.color }}>
              {stat.icon}
            </div>
            <h2>{stat.value}</h2>
            <p className="stat-title">{stat.title}</p>
            <span className="stat-subtext" style={{ color: stat.subColor }}>{stat.subtext}</span>
          </div>
        ))}
      </section>

      <section className="dashboard-bottom">
        <div className="quick-upload-card">
          <h3>Quick Upload</h3>
          <div className="upload-dropzone">
            <div className="dropzone-icon"><UploadCloud size={32} color="#0B7B8A"/></div>
            <h4>Drop your report here</h4>
            <p>PDF, JPG, PNG supported</p>
          </div>
          <button className="btn-primary full-width">Analyze Report →</button>
        </div>
        
        <div className="chart-card">
          <div className="chart-header">
            <div>
              <h3>Health Score Trend</h3>
              <p>6-month overview</p>
            </div>
            <span className="badge-positive">↗ +13 pts</span>
          </div>
          <div className="chart-placeholder">
             {/* Note for Hackathon: Integrate Recharts <LineChart> here */}
             <div className="mock-line"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
