import React from "react";
import SearchIcon from "../../assets/searchIcon.png";
import buttonSearchIcon from "../../assets/buttonsearchIcon.png";
import HospitalIcon from "../../assets/Hospital.png";
import ambulanceIcon from "../../assets/Ambulance.png";
import doctorsIcon from "../../assets/Doctor.png";
import labIcon from "../../assets/Drugstore.png";
import medicalIcon from "../../assets/Capsule.png";
import "./SearchComponent.css";

const SearchComponent = () => {
  return (
    <div className="wrapper-searchComponent">
      {/* for search boxes and buttons */}
      <div className="wrapper-searchBox">
        {/* for search boxes */}
        <button className="button-search">
          <img src={buttonSearchIcon} />
          Search
        </button>
        <div className="searchBox">
          <img src={SearchIcon} />
          <input placeholder="City" />
        </div>
        <div className="searchBox">
          <img src={SearchIcon} />
          <input placeholder="state" />
        </div>
      </div>
      {/* for cards */}
      <div>
        <p
          style={{
            fontSize: "20px",
            lineHeight: "30px",
            fontWeight: "500",
            textAlign: "center",
            marginTop: "5rem",
          }}
        >
          You may be looking for
        </p>
        <div className="wrapper-card">
          {/* five cards in a flex container */}
          <div className="card">
            <img src={doctorsIcon} />
            <p>Doctors</p>
          </div>
          <div className="card">
            <img src={labIcon} />
            <p>Labs</p>
          </div>
          <div className="card active">
            <img src={HospitalIcon} />
            <p>Hospitals</p>
          </div>
          <div className="card">
            <img src={medicalIcon} />
            <p>Medical Store</p>
          </div>
          <div className="card">
            <img src={ambulanceIcon} />
            <p>Ambulance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
