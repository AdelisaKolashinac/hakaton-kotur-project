import React from "react";
import Banner from "./Banner/Banner";
import Calendar from "./Calendar/Calendar";
import "./Events.css";
import Header from "../Header/Header";
import EventsCardsList from "../EventsCardsList/EventsCardsList";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
function Events() {
  return (
    <div>
      <Header />
      <Banner />
      <Calendar />
      <EventsCardsList />
      <div className="btn-container">
        <Link to="/gallery" className="btn btn-to-gallery">
          Погледни Архива
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Events;
