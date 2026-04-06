import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';
import RoleSelection from './components/RoleSelection';
import UserDetailsForm from './components/UserDetailsForm';
import { Activity } from 'lucide-react';

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate('/overview'); // Send to dashboard
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-brand">
        <div className="brand-logo">
          <Activity size={32} color="white" />
        </div>
        <h1>AutoClinical AI</h1>
        <p>Upload medical reports, extract insights, detect risks, and get personalized health guidance instantly.</p>
      </div>

      {step === 1 ? (
        <RoleSelection onNext={() => setStep(2)} />
      ) : (
        <UserDetailsForm onComplete={handleComplete} />
      )}
      
      <div className="step-indicators">
        <div className={`dot ${step === 1 ? 'active' : ''}`}></div>
        <div className={`dot ${step === 2 ? 'active' : ''}`}></div>
      </div>
    </div>
  );
};

export default Onboarding;
