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
// import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <>
      {/* <LandingPage /> */}
      <Menu />
    </>
  );
}

export default App;
