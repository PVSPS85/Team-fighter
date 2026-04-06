import React from 'react';
import { AlertOctagon } from 'lucide-react';
import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("AutoClinical Caught Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-container">
          <AlertOctagon size={64} color="#EF4444" />
          <h1>System Exception Detected</h1>
          <p>Our AI encountered an unexpected anomaly in the application state.</p>
          <button onClick={() => window.location.reload()} className="btn-refresh">
            Reboot System
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
