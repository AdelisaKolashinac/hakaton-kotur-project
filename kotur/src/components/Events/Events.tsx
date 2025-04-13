import { useEffect } from "react";
import Banner from "./Banner/Banner";
import Calendar from "./Calendar/Calendar";
import "./Events.css";
import Header from "../Header/Header";
import EventsCardsList from "../EventsCardsList/EventsCardsList";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
function Events() {

  useEffect(() => {
    const fetchedData = async () => {
      fetch("https://f04d-62-162-133-188.ngrok-free.app/api/events", {
        headers: {
          "ngrok-skip-browser-warning": true,
          Accept: "application/json",
          "Content-Type": "application/json",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any,
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    };

    fetchedData();
  }, []);
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
