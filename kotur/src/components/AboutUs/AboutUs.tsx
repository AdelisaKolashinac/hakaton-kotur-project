// src/components/AboutUs/AboutUs.tsx
import React from "react";
import Hero from "./Hero";
import OurHistory from "./OurHistory";
import CoctailCatering from "./CoctailCatering";
import ReserveHall from "./ReserveHall";
import "./AboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <div className="aboutUs">
      <Hero />
      <OurHistory />
      <CoctailCatering />
      <ReserveHall />
    </div>
  );
};

export default AboutUs;
