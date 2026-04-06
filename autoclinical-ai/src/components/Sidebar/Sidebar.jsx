import { NavLink } from "react-router-dom";
import { memo } from "react";
import "./Sidebar.css";

const navItems = [
  { path: "/", label: "Overview" },
  { path: "/upload", label: "Upload Report" },
  { path: "/history", label: "History" },
  { path: "/compare", label: "Compare Reports" },
  { path: "/insights", label: "Insights" },
  { path: "/chatbot", label: "Chatbot" },
  { path: "/settings", label: "Settings" },
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo">AutoClinical</h2>

      <nav>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default memo(Sidebar);
