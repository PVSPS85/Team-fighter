import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ message = "Analyzing report..." }) => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <div className="spinner-circle"></div>
      </div>
      <p className="spinner-message">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
