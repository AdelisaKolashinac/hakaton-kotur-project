import { useState } from "react";
import MenuFilterCard from "../MenuFilterCard/MenuFilterCard";
import RecommendationCard from "../RecommendationCard/RecommendationCard";
import { useMediaQuery } from "react-responsive";
import { MenuCardType } from "../../../types/types";


interface MenuFilterSectionProps {
  menuItems: MenuCardType[];
}

const MenuFilterSection = ({ menuItems }: MenuFilterSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState("Коктели");
  const [showAll, setShowAll] = useState(false);

  const categories = Array.from(
    new Set(menuItems.map((card) => card.category))
  );

  const filteredCards = menuItems.filter(
    (card) => card.category === selectedCategory
  );

  // Show only 3 cards if not expanded and screen is small
  const isMobileOrTablet = useMediaQuery({ maxWidth: 1024 });
  const cardsToDisplay =
    !isMobileOrTablet || showAll ? filteredCards : filteredCards.slice(0, 3);

  // Get top 2 recommended cards per category
  const topRecommendedCards = [...filteredCards]
    .sort((a, b) => b.recommended - a.recommended)
    .slice(0, 2);

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
      <div className="menu-cards-section">
        {/* Menu Items Section */}
        <div className="menu-items-container">
          {cardsToDisplay.map((item) => (
            <MenuFilterCard key={item.id} item={item} />
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

        {/* Recommendations Section */}
        <div className="recommendations-cards">
          {topRecommendedCards.map((card) => (
            <RecommendationCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default MenuFilterSection;
