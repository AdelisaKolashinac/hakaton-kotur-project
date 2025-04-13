import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/LandingPage/LandingPage.css";
import "./components/EventsCardsList/EventsCardsList.css";
import "./components/EventCard/EventCard.css";
import "./components/Testimonials/Testimonials.css";
import "./components/Footer/Footer.css";
import "./components/Menu/Menu.css";
import "./components/Menu/RecommendationCard/RecommendationCard.css";
import Menu from "./components/Menu/Menu";
import LandingPage from "./components/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery/Gallery";
import Events from "./components/Events/Events";
import AboutUs from "./components/AboutUs/AboutUs";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  );
}

export default App;
