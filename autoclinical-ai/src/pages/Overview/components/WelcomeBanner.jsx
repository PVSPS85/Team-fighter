import React from 'react';

const WelcomeBanner = ({ name = "John" }) => {
  return (
    <div className="header-text">
      <h1 style={{ margin: '0 0 8px 0', fontSize: '1.8rem', color: '#0F172A' }}>Welcome back, {name}</h1>
      <p style={{ margin: 0, color: '#64748B' }}>Here's your AI-powered health intelligence overview</p>
    </div>
  );
};

export default WelcomeBanner;
