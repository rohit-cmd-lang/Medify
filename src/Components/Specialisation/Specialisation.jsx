import React from "react";
import "./Specialisation.css";
import drugstoreImg from "../../assets/Drugstore.png";
const Specialisation = () => {
  return (
    <div className="specialisation">
      <div className="specialisation-container">
        <h1 className="specialisation-heading">Find By Specialisation</h1>
        <div className="specialisation-cards">
          <div className="specialisation-card">
            <img src={drugstoreImg} alt="drugstore logo" />
            <p>Dentistry</p>
          </div>
          <div className="specialisation-card">
            <img src={drugstoreImg} alt="drugstore logo" />
            <p>Primary Care</p>
          </div>
          <div className="specialisation-card">
            <img src={drugstoreImg} alt="drugstore logo" />
            <p>Cardiology</p>
          </div>
          <div className="specialisation-card">
            <img src={drugstoreImg} alt="drugstore logo" />
            <p>MRI Resonance</p>
          </div>
          <div className="specialisation-card">
            <img src={drugstoreImg} alt="drugstore logo" />
            <p>Blood Test</p>
          </div>
          <div className="specialisation-card">
            <img src={drugstoreImg} alt="drugstore logo" />
            <p>Piscologist</p>
          </div>
          <div className="specialisation-card">
            <img src={drugstoreImg} alt="drugstore logo" />
            <p>Laboratory</p>
          </div>
          <div className="specialisation-card">
            <img src={drugstoreImg} alt="drugstore logo" />
            <p>X-ray</p>
          </div>
        </div>
        <button className="view-all-button">View All</button>
      </div>
    </div>
  );
};

export default Specialisation;
