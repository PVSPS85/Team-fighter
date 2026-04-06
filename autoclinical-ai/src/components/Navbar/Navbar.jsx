import { memo } from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <input
          type="text"
          placeholder="Search reports, metrics..."
          className="search-input"
        />
      </div>

      <div className="navbar-right">
        <button className="role-btn">Patient</button>

        <div className="icon-btn">🔔</div>
        <div className="icon-btn">🌙</div>

        <div className="avatar">J</div>
      </div>
    </header>
  );
};

export default memo(Navbar);
