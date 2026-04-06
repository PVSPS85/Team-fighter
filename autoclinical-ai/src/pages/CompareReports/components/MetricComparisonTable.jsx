import React from 'react';
import { CheckCircle, TrendingDown } from 'lucide-react';

const MetricComparisonTable = () => {
  const data = [
    { metric: 'Glucose', old: '162 mg/dL', new: '142 mg/dL', change: '12.3%', normal: '70-100', verdict: 'Improved' },
    { metric: 'Systolic BP', old: '145 mmHg', new: '138 mmHg', change: '4.8%', normal: '<120', verdict: 'Improved' },
  ];

  return (
    <table className="metric-table">
      <thead>
        <tr>
          <th>Metric</th>
          <th>Jan 2026</th>
          <th>Apr 2026</th>
          <th>Change</th>
          <th>Normal</th>
          <th>Verdict</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            <td className="metric-name">{row.metric}</td>
            <td className="metric-bold">{row.old}</td>
            <td className="metric-bold">{row.new}</td>
            <td>
              <span className="change-positive">
                <TrendingDown size={14} /> {row.change}
              </span>
            </td>
            <td>{row.normal}</td>
            <td>
              <span className="verdict-pill">
                <CheckCircle size={14} /> {row.verdict}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MetricComparisonTable;

