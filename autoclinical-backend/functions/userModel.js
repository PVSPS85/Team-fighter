// User document structure reference
const userModel = {
  name: "",
  email: "",
  role: "",              // Patient | Professional
  darkMode: false,
  notifications: {
    reportDone: true,
    alerts: true,
    reminders: true
  },
  createdAt: "",
  lastLogin: ""
};

module.exports = { userModel };
