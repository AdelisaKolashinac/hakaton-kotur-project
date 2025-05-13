import "./MenuHeroSection/MenuHeroSection.css";
import "./MenuFilterSection/MenuFilterSection.css";
import "./MenuFilterCard/MenuFilterCard.css";
import Header from "../Header/Header";
import MenuHeroSection from "./MenuHeroSection/MenuHeroSection";
import MenuFilterSection from "./MenuFilterSection/MenuFilterSection";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { MenuCardType } from "../../types/types";

const Menu = () => {
  const [apiMenuItems, setApiMenuItems] = useState<MenuCardType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      fetch("https://4cc0-62-162-133-188.ngrok-free.app/api/menu", {
        headers: {
          "ngrok-skip-browser-warning": true,
          Accept: "application/json",
          "Content-Type": "application/json",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any,
      })
        .then((res) => res.json())
        .then((data) => setApiMenuItems(data.data));
    };

    fetchData();
  }, []);

  return (
    <div className="menu" id="koktel-meni">
      <Header />
      <MenuHeroSection />
      <MenuFilterSection apiMenuItems={apiMenuItems} />
      <Footer />
    </div>
  );
};
export default Menu;
