import React from 'react';
import './Insights.css';
import AISummaryBlock from './components/AISummaryBlock';
import InsightCard from './components/InsightCard';
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, HeartPulse } from 'lucide-react';

const Insights = () => {
  const insightsData = [
    { title: 'Glucose increased over 3 reports', subtext: 'From 110 to 142 mg/dL - a 29% increase', icon: <TrendingUp size={18} />, color: '#F59E0B', bg: '#FEF3C7' },
    { title: 'Cholesterol trending downward', subtext: 'From 210 to 195 mg/dL - now in range', icon: <TrendingDown size={18} />, color: '#10B981', bg: '#D1FAE5' },
    { title: 'CVD risk trending upward', subtext: 'Combined glucose + BP elevation', icon: <AlertTriangle size={18} />, color: '#EF4444', bg: '#FEE2E2' },
    { title: 'Heart rate remains stable', subtext: 'Consistently 72-82 bpm over 6 months', icon: <CheckCircle size={18} />, color: '#10B981', bg: '#D1FAE5' },
    { title: 'Hemoglobin improved', subtext: 'From 12.8 to 13.2 g/dL', icon: <HeartPulse size={18} />, color: '#3B82F6', bg: '#DBEAFE' },
    { title: 'BMI still above normal', subtext: 'At 26.4 but improving from 27.1', icon: <AlertTriangle size={18} />, color: '#F59E0B', bg: '#FEF3C7' },
  ];

  return (
    <div className="insights-container">
      <div className="page-header">
        <h1>AI Insights</h1>
        <p>AI-generated patterns, anomalies, and personalized intelligence</p>
      </div>

      <AISummaryBlock />

      <div className="insights-grid">
        {insightsData.map((data, idx) => (
          <InsightCard key={idx} {...data} />
        ))}
      </div>

      <div className="insights-bottom-row">
        <div className="chart-placeholder-card">
          <h3>Glucose & BP Correlation</h3>
          <div className="mock-chart-area">
            <span className="mock-text">Chart Integration Ready</span>
          </div>
        </div>
        <div className="chart-placeholder-card">
          <h3>Priority Heatmap</h3>
          <div className="mock-chart-area">
             <span className="mock-text">Heatmap Integration Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
