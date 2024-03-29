import React from "react";
import PieChartIcon from "./../Icons/PieChartIcon";
// import JBIcon from "./../Icons/JBIcon";
import "./Navbar.scss";

export default function SideNavbar() {
  return (
    <div className="side-navbar">
      <div className="navbar-brand">{/**Branch Icon */}</div>
      <div className="navbar-list">
        <br />
        <div className="navbar-item active">
          <PieChartIcon className="nav-icon" />
          <strong style={{ letterSpacing: "1px" }}>Dashboard</strong>
        </div>
      </div>
    </div>
  );
}
