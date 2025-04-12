import "./MenuHeroSection/MenuHeroSection.css";
import "./MenuFilterSection/MenuFilterSection.css";
import "./MenuFilterCard/MenuFilterCard.css";
import Header from "../Header/Header";
import MenuHeroSection from "./MenuHeroSection/MenuHeroSection";
import MenuFilterSection from "./MenuFilterSection/MenuFilterSection";

const Menu = () => {
  return (
    <div className="menu">
      <Header />
      <MenuHeroSection />
      <MenuFilterSection />
    </div>
  );
};
export default Menu;
