// Comparison document structure
const comparisonModel = {
  userId: "",
  earlierReportId: "",
  latestReportId: "",
  scoreDelta: 0,
  overallVerdict: "",    // Improved | Declined | Stable
  metricDiffs: [
    {
      metric: "",
      prev: 0,
      curr: 0,
      change: "",
      verdict: ""        // Improved | Declined
    }
  ],
  createdAt: ""
};

module.exports = { comparisonModel };
