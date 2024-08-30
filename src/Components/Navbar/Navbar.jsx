import React from "react";
import "./Navbar.css";
import logo from "../../assets/medifyLogo.png";
import { Link } from "react-router-dom";

const Navbar = ({ type }) => {
  return (
    <div className={type === "home" ? "linear-background" : "navbar-alternate"}>
      <div className="navbar-wrapper z-10">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" style={{ padding: "0px" }} />
          </Link>
        </div>
        <div className="nav-links">
          <div className={type !== "home" ? "nav-link-active relative" : ""}>
            <Link to="/search">
              <p>Find Doctors</p>
            </Link>
            {type !== "home" && (
              <div className="bg-[#2AA7FF] h-[9px] w-[110%] absolute top-[51px]"></div>
            )}
          </div>
          <div>
            <p>Hospitals</p>
          </div>
          <div>
            <p>Medicines</p>
          </div>
          <div>
            <p>Surgeries</p>
          </div>
          <div>
            <p>Software for Provider</p>
          </div>
          <div>
            <p>Facilities</p>
          </div>
          <Link to="/bookings">
            <button className="booking-button">My Bookings</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
