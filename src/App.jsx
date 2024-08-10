import { useState } from "react";

import "./App.css";
import HeaderRibbon from "./Components/HeaderRibbon/HeaderRibbon";
import Navbar from "./Components/Navbar/Navbar";
import HeroComponent from "./Components/HeroComponent/HeroComponent";
import SearchComponent from "./Components/SearchComponent/SearchComponent";
import Faq from "./Components/Faq/Faq";
import AppDownload from "./Components/AppDownload/AppDownload";
import Footer from "./Components/Footer/Footer";
import Specialisation from "./Components/Specialisation/Specialisation";
import Consultation from "./Components/Consultation/Consultation";
import StatSection from "./Components/StatSection/StatSection";
import LatestNewsSection from "./Components/LatestNewsSection/LatestNewsSection";
import DoctorsCarousel from "./Components/DoctorsCarousel/DoctorsCarousel";

function App() {
  return (
    <>
      <HeaderRibbon />
      <Navbar />
      <HeroComponent />
      <SearchComponent />
      <Specialisation />
      <Consultation />
      <LatestNewsSection />
      <StatSection />
      <Faq />
      <AppDownload />
      <Footer />
    </>
  );
}

export default App;
