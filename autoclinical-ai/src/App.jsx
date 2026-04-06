import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Overview from "./pages/Overview/Overview";
import UploadReport from "./pages/UploadReport/UploadReport";
import History from "./pages/History/History";
import CompareReports from "./pages/CompareReports/CompareReports";
import Insights from "./pages/Insights/Insights";
import Chatbot from "./pages/Chatbot/Chatbot";
import Settings from "./pages/Settings/Settings";

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/upload" element={<UploadReport />} />
        <Route path="/history" element={<History />} />
        <Route path="/compare" element={<CompareReports />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </MainLayout>
  );
}
