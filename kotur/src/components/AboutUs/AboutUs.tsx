import React, { useEffect } from "react";
import Header from "../Header/Header";
import Hero from "./Hero";
import OurHistory from "./OurHistory";
import CoctailCatering from "./CoctailCatering";
import FormReserve from "./FormReserve";
import ReserveHall from "./ReserveHall";
import FormHall from "./FormHall";
import Team from "./Team";
import ApplyJob from "./ApplyJob";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";

import "./AboutUs.css";
import { useLocation } from "react-router-dom";

const AboutUs: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  
  return (
    <div className="aboutUs" id="kotur">
      <Header />
      <Hero />
      <OurHistory />
      <CoctailCatering />
      <FormReserve />
      <ReserveHall />
      <FormHall />
      <Team />
      <ApplyJob />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default AboutUs;
