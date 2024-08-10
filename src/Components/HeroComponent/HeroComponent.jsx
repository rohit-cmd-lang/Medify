import React from "react";
import "./HeroComponent.css";
import heroImage from "../../assets/doctors_hero_img.png";

const HeroComponent = () => {
  return (
    <div className="linear-background-hero">
      <div className="hero-wrapper">
        <div className="hero-text">
          <div className="hero-heading">
            {/* FIXME: fix the gap between the two lines in the heading */}
            <p>Skip the travel! Find Online </p>
            <p>
              <span className="medical">Medical </span>
              <span className="center">Centers</span>
            </p>
          </div>
          <p className="hero-subheading">
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </p>

          <button className="button-find">Find Centers</button>
        </div>
        <div className="hero-image-wrapper">
          <img
            src={heroImage}
            alt="hero image"
            style={{
              overflow: "visible",
            }}
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
