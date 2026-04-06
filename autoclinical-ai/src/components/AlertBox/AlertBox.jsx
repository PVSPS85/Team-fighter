import React from 'react';
import { AlertTriangle, Info, CheckCircle } from 'lucide-react';
import './AlertBox.css';

const AlertBox = ({ type = 'info', message }) => {
  const getAlertConfig = () => {
    switch (type) {
      case 'warning':
        return { icon: <AlertTriangle size={20} />, className: 'alert-warning' };
      case 'success':
        return { icon: <CheckCircle size={20} />, className: 'alert-success' };
      case 'info':
      default:
        return { icon: <Info size={20} />, className: 'alert-info' };
    }
  };

  const { icon, className } = getAlertConfig();

  return (
    <div className={`alert-box ${className}`}>
      <div className="alert-icon">{icon}</div>
      <p className="alert-message">{message}</p>
    </div>
  );
};

export default AlertBox;
