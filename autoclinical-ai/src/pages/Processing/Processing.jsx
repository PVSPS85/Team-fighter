import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Processing.css';
import StepProgressList from './components/StepProgressList';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const Processing = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Simulate AI processing steps for the hackathon
    const timers = [
      setTimeout(() => setCurrentStep(1), 1500),
      setTimeout(() => setCurrentStep(2), 3000),
      setTimeout(() => setCurrentStep(3), 4500),
      setTimeout(() => navigate('/results'), 6000) // Redirect to results
    ];
    return () => timers.forEach(clearTimeout);
  }, [navigate]);

  return (
    <div className="processing-container">
      <div className="processing-card">
        <LoadingSpinner message="AI is analyzing your report..." />
        <StepProgressList currentStep={currentStep} />
      </div>
    </div>
  );
};

export default Processing;
