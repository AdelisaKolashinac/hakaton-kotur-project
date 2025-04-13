import { useState } from "react";
import MenuFilterCard from "../MenuFilterCard/MenuFilterCard";
import RecommendationCard from "../RecommendationCard/RecommendationCard";
import { useMediaQuery } from "react-responsive";

export interface MenuFilterCardType {
  id: number;
  image: string;
  itemName: string;
  itemIngredients: string[];
  category: "Коктели" | "Кафе" | "Мезе";
}

const cardsToFilter: MenuFilterCardType[] = [
  {
    id: 1,
    image: "./menu/filter-card-img1.png",
    itemName: "Mojito",
    itemIngredients: ["White rum", "Mint", "Lime juice", "Sugar", "Soda water"],
    category: "Коктели",
  },
  {
    id: 2,
    image: "./menu/filter-card-img2.png",
    itemName: "Mojito",
    itemIngredients: ["White rum", "Mint", "Lime juice", "Sugar", "Soda water"],
    category: "Коктели",
  },
  {
    id: 3,
    image: "./menu/filter-card-img3.png",
    itemName: "Mojito",
    itemIngredients: ["White rum", "Mint", "Lime juice", "Sugar", "Soda water"],
    category: "Коктели",
  },
  {
    id: 4,
    image: "./menu/filter-card-img4.png",
    itemName: "Mojito",
    itemIngredients: ["White rum", "Mint", "Lime juice", "Sugar", "Soda water"],
    category: "Коктели",
  },
  {
    id: 5,
    image: "./menu/filter-card-img5.png",
    itemName: "Mojito",
    itemIngredients: ["White rum", "Mint", "Lime juice", "Sugar", "Soda water"],
    category: "Коктели",
  },
  {
    id: 6,
    image: "./menu/filter-card-img6.png",
    itemName: "Mojito",
    itemIngredients: ["White rum", "Mint", "Lime juice", "Sugar", "Soda water"],
    category: "Коктели",
  },
  {
    id: 7,
    image: "./menu/filter-card-img7.png",
    itemName: "Mojito",
    itemIngredients: ["White rum", "Mint", "Lime juice", "Sugar", "Soda water"],
    category: "Коктели",
  },
  {
    id: 8,
    image: "./menu/filter-card-img8.png",
    itemName: "Mojito",
    itemIngredients: ["White rum", "Mint", "Lime juice", "Sugar", "Soda water"],
    category: "Коктели",
  },
  {
    id: 9,
    image: "./menu/filter-card-img9.png",
    itemName: "Mojito",
    itemIngredients: ["White rum", "Mint", "Lime juice", "Sugar", "Soda water"],
    category: "Коктели",
  },
  {
    id: 10,
    image: "./menu/filter-card-img10.png",
    itemName: "Mojito",
    itemIngredients: ["White rum", "Mint", "Lime juice", "Sugar", "Soda water"],
    category: "Коктели",
  },
  {
    id: 7,
    image: "./menu/filter-card-img7.png",
    itemName: "Mojito",
    itemIngredients: ["White rum", "Mint", "Lime juice", "Sugar", "Soda water"],
    category: "Кафе",
  },
  {
    id: 8,
    image: "./menu/filter-card-img8.png",
    itemName: "Mojito",
    itemIngredients: ["White rum", "Mint", "Lime juice", "Sugar", "Soda water"],
    category: "Кафе",
  },
  {
    id: 9,
    image: "./menu/filter-card-img9.png",
    itemName: "Mojito",
    itemIngredients: ["White rum", "Mint", "Lime juice", "Sugar", "Soda water"],
    category: "Кафе",
  },
  {
    id: 10,
    image: "./menu/filter-card-img10.png",
    itemName: "Mojito",
    itemIngredients: ["White rum", "Mint", "Lime juice", "Sugar", "Soda water"],
    category: "Кафе",
  },
  {
    id: 7,
    image: "./menu/filter-card-img7.png",
    itemName: "Mojito",
    itemIngredients: ["White rum", "Mint", "Lime juice", "Sugar", "Soda water"],
    category: "Мезе",
  },
  {
    id: 8,
    image: "./menu/filter-card-img8.png",
    itemName: "Mojito",
    itemIngredients: ["White rum", "Mint", "Lime juice", "Sugar", "Soda water"],
    category: "Мезе",
  },
  {
    id: 9,
    image: "./menu/filter-card-img9.png",
    itemName: "Mojito",
    itemIngredients: ["White rum", "Mint", "Lime juice", "Sugar", "Soda water"],
    category: "Мезе",
  },
  {
    id: 10,
    image: "./menu/filter-card-img10.png",
    itemName: "Mojito",
    itemIngredients: ["White rum", "Mint", "Lime juice", "Sugar", "Soda water"],
    category: "Мезе",
  },
];

const MenuFilterSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Коктели");
  const [showAll, setShowAll] = useState(false);

  const categories = Array.from(
    new Set(cardsToFilter.map((card) => card.category))
  );

  const filteredCards = cardsToFilter.filter(
    (card) => card.category === selectedCategory
  );

  // Show only 3 cards if not expanded and screen is small
  const isMobileOrTablet = useMediaQuery({ maxWidth: 1024 });
  const cardsToDisplay =
    !isMobileOrTablet || showAll ? filteredCards : filteredCards.slice(0, 3);

  return (
    <section className="menu-filter-section container">
      <div className="filter-buttons-container">
        {categories.map((category) => (
          <button
            key={category}
            className={`${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <h2>{selectedCategory}</h2>
      <div className="menu-items-section">
        <div className="menu-items-content">
          <div className="menu-items-card-container">
            {cardsToDisplay.map((card) => (
              <MenuFilterCard key={card.id} card={card} />
            ))}
          </div>
          {isMobileOrTablet && filteredCards.length > 3 && (
            <button
              className="filter-show-more-btn"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Прикажи помалку" : "Прикажи повеќе"}
            </button>
          )}
        </div>
        <div className="recommendations-cards">
          <RecommendationCard />
          <RecommendationCard />
        </div>
      </div>
    </section>
  );
};
export default MenuFilterSection;
