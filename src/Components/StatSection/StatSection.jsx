import React from "react";
import statCards from "../../assets/stat-section-img.png";
import "./StatSection.css";

const StatSection = () => {
  return (
    <div className="stat-section">
      <div className="stat-section-container">
        <div className="stat-section-content">
          <h3 className="stat-section-subheading">
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
          </h3>
          <h1 className="stat-section-heading">Our Families</h1>
          <p className="stat-section-para">
            We will work with you to develop individualised care plans,
            including management of chronic diseases. If we cannot assist, we
            can provide referrals or advice about the type of practitioner you
            require. We treat all enquiries sensitively and in the strictest
            confidence.
          </p>
        </div>
        <div className="stat-section-images">
          <img src={statCards} alt="" />
        </div>
      </div>
    </div>
  );
};

export default StatSection;
