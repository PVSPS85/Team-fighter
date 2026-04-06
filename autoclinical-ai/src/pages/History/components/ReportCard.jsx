import RiskBadge from "../../../components/RiskBadge/RiskBadge";

export default function ReportCard({ title, score, risk }) {
  return (
    <div className="report-card">
      <div className="card-header">
        <h3>{title}</h3>
        <RiskBadge level={risk} />
      </div>

      <p className="score">{score}/100</p>

      <div className="actions">
        <button className="view">View</button>
        <button className="compare">Compare</button>
      </div>
    </div>
  );
}
