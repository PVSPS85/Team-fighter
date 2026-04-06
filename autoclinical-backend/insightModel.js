// Insight document structure
const insightModel = {
  type: "",              // trend | anomaly | correlation
  metric: "",
  fromValue: 0,
  toValue: 0,
  description: "",
  iconType: "",          // up | down | warning | check | bulb
  createdAt: ""
};

module.exports = { insightModel };
