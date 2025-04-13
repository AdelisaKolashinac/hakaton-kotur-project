import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/LandingPage/LandingPage.css";
import "./components/EventsCardsList/EventsCardsList.css";
import "./components/EventCard/EventCard.css";
import "./components/Testimonials/Testimonials.css";
import "./components/Footer/Footer.css";
import AboutUs from "./components/AboutUs/AboutUs";
import LandingPage from "./components/LandingPage/LandingPage";
import Gallery from "./components/Gallery/Gallery";
import Events from "./components/Events/Events";
function App() {
  return (
    <>
      {/* <LandingPage /> */}
      {/* <AboutUs /> */}
      {/* <Gallery /> */}
      <Events />
    </>
  );
}

export default App;
