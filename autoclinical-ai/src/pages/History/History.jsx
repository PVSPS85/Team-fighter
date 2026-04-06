import ReportCard from "./components/ReportCard";
import "./History.css";

export default function History() {
  const reports = [
    { title: "Glucose Report", score: 72, risk: "Moderate" },
    { title: "Blood Panel", score: 78, risk: "Low" },
    { title: "Lipid Profile", score: 68, risk: "Moderate" },
  ];

  return (
    <div>
      <h1>Report History</h1>

      <div className="history-grid">
        {reports.map((r, i) => (
          <ReportCard key={i} {...r} />
        ))}
      </div>
    </div>
  );
}
