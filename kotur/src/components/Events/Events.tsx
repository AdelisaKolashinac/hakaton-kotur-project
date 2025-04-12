import React from "react";
import Banner from "./Banner";
import Calendar from "./Calendar/Calendar";
import "./Events.css";
import Header from "../Header/Header";
import EventsCardsList from "../EventsCardsList/EventsCardsList";
import Footer from "../Footer/Footer";
function Events() {
  return (
    <div>
      <Header />
      <Banner />
      <Calendar />
      <EventsCardsList />
      <Footer />
    </div>
  );
}

export default Events;
