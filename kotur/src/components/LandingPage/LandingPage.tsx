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

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <HeroSection />
      <PromotionalBanner />
      <EventsCardsList />
      <ServicesSection />
      <RecommendSection />
      <Testimonials />
      <Footer />
    </div>
  );
};
export default LandingPage;
