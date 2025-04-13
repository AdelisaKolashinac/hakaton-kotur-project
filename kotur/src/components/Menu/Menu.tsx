import "./MenuHeroSection/MenuHeroSection.css";
import "./MenuFilterSection/MenuFilterSection.css";
import "./MenuFilterCard/MenuFilterCard.css";
import Header from "../Header/Header";
import MenuHeroSection from "./MenuHeroSection/MenuHeroSection";
import MenuFilterSection from "./MenuFilterSection/MenuFilterSection";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";

export interface MenuFilterCardType {
  category: "Коктели" | "Кафе" | "Мезе";
  id: number;
  image: string;
  ingredients: string;
  is_popular: number;
  is_recommended: number;
  name: string;
}

const Menu = () => {
  const [menuItems, setMenuItems] = useState<MenuFilterCardType[]>([]);

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
        .then((data) => setMenuItems(data.data));
    };

    fetchData();
  }, []);

  console.log(menuItems);

  return (
    <div className="menu" id="koktel-meni">
      <Header />
      <MenuHeroSection />
      <MenuFilterSection menuItems={menuItems} />
      <Footer />
    </div>
  );
};
export default Menu;
