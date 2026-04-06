import React, { Suspense, lazy, memo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Overview = lazy(() => import("./pages/Overview/Overview"));
const UploadReport = lazy(() => import("./pages/UploadReport/UploadReport"));
const History = lazy(() => import("./pages/History/History"));
const CompareReports = lazy(() => import("./pages/CompareReports/CompareReports"));
const Insights = lazy(() => import("./pages/Insights/Insights"));
const Chatbot = lazy(() => import("./pages/Chatbot/Chatbot"));
const Settings = lazy(() => import("./pages/Settings/Settings"));

const LoadingScreen = () => (
  <div className="min-h-screen flex items-center justify-center text-slate-500">
    Loading...
  </div>
);

const App = memo(function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/upload" element={<UploadReport />} />
        <Route path="/history" element={<History />} />
        <Route path="/compare" element={<CompareReports />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
});

export default App;
