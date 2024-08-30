import React from "react";
import HeaderRibbon from "../Components/HeaderRibbon/HeaderRibbon";
import Navbar from "../Components/Navbar/Navbar";
import HeroComponent from "../Components/HeroComponent/HeroComponent";
import SearchComponent from "../Components/SearchComponent/SearchComponent";
import Specialisation from "../Components/Specialisation/Specialisation";
import DoctorsCarousel from "../Components/DoctorsCarousel/DoctorsCarousel";
import Consultation from "../Components/Consultation/Consultation";
import LatestNewsSection from "../Components/LatestNewsSection/LatestNewsSection";
import StatSection from "../Components/StatSection/StatSection";
import Faq from "../Components/Faq/Faq";
import AppDownload from "../Components/AppDownload/AppDownload";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Homepage = ({
  states,
  fetchCities,
  currentState,
  setCurrentState,
  cities,
  setCurrentCity,
  currentCity,
  fetchHospitals,
}) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!currentState || !currentCity) {
      console.log("Please select both a state and a city.");
      return; // Prevent searching if state or city is not selected
    }
    console.log("searching");
    fetchHospitals(currentState, currentCity);
    navigate("/search");
  };
  return (
    <div>
      <HeaderRibbon />
      <Navbar type="home" />
      <HeroComponent />
      <SearchComponent
        states={states}
        fetchCities={fetchCities}
        currentState={currentState}
        setCurrentState={setCurrentState}
        cities={cities}
        setCurrentCity={setCurrentCity}
        currentCity={currentCity}
        handleSearch={handleSearch}
        type="home"
      />
      <Specialisation />
      <DoctorsCarousel />
      <Consultation />
      <LatestNewsSection />
      <StatSection />
      <Faq />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default Homepage;
