import React from "react";
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

const AboutUs: React.FC = () => {
  return (
    <div className="aboutUs">
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
