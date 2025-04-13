import React, { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Calendar from "./Calendar/Calendar";
import "./Events.css";
import Header from "../Header/Header";
import EventsCardsList from "../EventsCardsList/EventsCardsList";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

interface ApiEvent {
  id: number;
  name: string;
  date: string;
  time: string;
  image: string;
}

function Events() {
  const [apiEvents, setApiEvents] = useState<ApiEvent[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://4cc0-62-162-133-188.ngrok-free.app/api/events",
          {
            headers: {
              "ngrok-skip-browser-warning": "true",
              Accept: "application/json",
              "Content-Type": "application/json",
            } as Record<string, string>,
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setApiEvents(data.data || []);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
        console.error("Error fetching events:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <Header />
      <Banner />
      <Calendar events={apiEvents} />
      {error && <p className="error-message">Error loading events: {error}</p>}
      <EventsCardsList apiEvents={apiEvents} isLoading={isLoading} />
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
