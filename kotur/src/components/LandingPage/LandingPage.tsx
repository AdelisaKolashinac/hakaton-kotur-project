import { useEffect, useState } from "react";
import "./HeroSection/HeroSection.css";
import "./PromotionalBanner/PromotionalBanner.css";
import "./ServicesSection/ServicesSection.css";
import "./ServicesSection/ServicesCard/ServicesCard.css";
import "./RecommendSection/RecommendSection.css";
import HeroSection from "./HeroSection/HeroSection";
import PromotionalBanner from "./PromotionalBanner/PromotionalBanner";
import EventsCardsList from "../EventsCardsList/EventsCardsList";
import ServicesSection from "./ServicesSection/ServicesSection";
import RecommendSection from "./RecommendSection/RecommendSection";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface ApiEvent {
  id: number;
  name: string;
  date: string;
  time: string;
  image: string;
}

const LandingPage = () => {
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
    <div className="landing-page">
      <Header />
      <HeroSection />
      <PromotionalBanner />
      <EventsCardsList apiEvents={apiEvents} isLoading={isLoading} />
      <ServicesSection />
      <RecommendSection />
      <Testimonials />
      <Footer />
    </div>
  );
};
export default LandingPage;
