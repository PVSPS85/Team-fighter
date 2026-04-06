import React from 'react';
import { TrendingUp } from 'lucide-react';

const VerdictBanner = () => {
  return (
    <div className="verdict-banner">
      <div className="verdict-icon">
        <TrendingUp size={24} />
      </div>
      <div className="verdict-text">
        <h3>Overall: Improved</h3>
        <p>Health score increased by <span className="pts-highlight">+10 points</span>. All metrics trending positively.</p>
      </div>
    </div>
  );
};

export default VerdictBanner;
