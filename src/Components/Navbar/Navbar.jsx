import React from "react";
import "./Navbar.css";
import logo from "../../assets/medifyLogo.png";

const Navbar = () => {
  return (
    <div className="linear-background">
      <div className="navbar-wrapper">
        <div>
          <img src={logo} alt="logo" style={{ padding: "0px" }} />
        </div>
        <div className="nav-links">
          <p>Find Doctors</p>
          <p>Hospitals</p>
          <p>Medicines</p>
          <p>Surgeries</p>
          <p>Software for Provider</p>
          <p>Facilities</p>
          <button className="booking-button">My Bookings</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
