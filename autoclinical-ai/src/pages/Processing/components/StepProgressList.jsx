import React from 'react';
import { CheckCircle2, CircleDashed, Circle } from 'lucide-react';

const StepProgressList = ({ currentStep }) => {
  const steps = [
    "Extracting text via OCR",
    "Identifying clinical biomarkers",
    "Cross-referencing normal ranges",
    "Generating AI insights"
  ];

  return (
    <div className="step-list">
      {steps.map((step, idx) => {
        let icon = <Circle size={20} />;
        let statusClass = "";

        if (idx < currentStep) {
          icon = <CheckCircle2 size={20} color="#10B981" />;
          statusClass = "completed";
        } else if (idx === currentStep) {
          icon = <CircleDashed size={20} color="#3B82F6" className="spin-animation" />;
          statusClass = "active";
        }

        return (
          <div key={idx} className={`step-item ${statusClass}`}>
            {icon}
            <span>{step}</span>
          </div>
        );
      })}
    </div>
  );
};

export default StepProgressList;
