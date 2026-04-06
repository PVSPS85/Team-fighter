const colors = {
  Low: "#10b981",
  Moderate: "#f59e0b",
  High: "#ef4444",
};

export default function RiskBadge({ level = "Low" }) {
  return (
    <span
      style={{
        background: `${colors[level]}20`,
        color: colors[level],
        padding: "4px 10px",
        borderRadius: "12px",
        fontSize: "12px",
        fontWeight: "500",
      }}
    >
      {level}
    </span>
  );
}
