import { useState } from "react";
import MenuFilterCard from "../MenuFilterCard/MenuFilterCard";
import RecommendationCard from "../RecommendationCard/RecommendationCard";
import { useMediaQuery } from "react-responsive";
import { MenuCardType } from "../../../types/types";
import { menuCards } from "../../../data/data";

interface MenuFilterSectionProps {
  apiMenuItems: MenuCardType[];
}

const MenuFilterSection = ({ apiMenuItems }: MenuFilterSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState("Коктели");
  const [showAll, setShowAll] = useState(false);

  const itemsToDisplay = apiMenuItems.length > 0 ? apiMenuItems : menuCards;

  const categories = Array.from(
    new Set(itemsToDisplay.map((card) => card.category))
  );

  const filteredCards = itemsToDisplay.filter(
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
      <div className="menu-cards-container">
        {/* Menu Cards Section */}
        <div className="menu-cards-wrapper">
          <div className="menu-filter-cards-container">
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
        </div>

        {/* Recommendations Section */}
        <div className="menu-recommendations-cards">
          {topRecommendedCards.map((card) => (
            <RecommendationCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default MenuFilterSection;
