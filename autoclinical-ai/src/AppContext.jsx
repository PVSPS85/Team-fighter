import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({ name: 'John Doe', role: 'Professional' });
  const [currentReport, setCurrentReport] = useState(null);
  const [analysisResults, setAnalysisResults] = useState(null);

  const value = {
    currentUser,
    setCurrentUser,
    currentReport,
    setCurrentReport,
    analysisResults,
    setAnalysisResults
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
