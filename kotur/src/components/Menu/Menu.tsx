import "./MenuHeroSection/MenuHeroSection.css";
import "./MenuFilterSection/MenuFilterSection.css";
import "./MenuFilterCard/MenuFilterCard.css";
import Header from "../Header/Header";
import MenuHeroSection from "./MenuHeroSection/MenuHeroSection";
import MenuFilterSection from "./MenuFilterSection/MenuFilterSection";
import Footer from "../Footer/Footer";

const Menu = () => {
  return (
    <div className="menu" id="koktel-meni">
      <Header />
      <MenuHeroSection />
      <MenuFilterSection />
      <Footer />
    </div>
  );
};
export default Menu;
