import { MenuFilterCardType } from "../MenuFilterSection/MenuFilterSection";

interface MenuFilterCardProps {
  card: MenuFilterCardType;
}

const MenuFilterCard = ({ card }: MenuFilterCardProps) => {
  return (
    <div className="menu-filter-card">
      <div className="menu-filter-card-img">
        <img src={card.image} alt="Cocktail Image" />
        <div className="overlay">
          <h3 className="item-name">{card.itemName}</h3>
          <p className="ingredients-label">Ingredients:</p>
          <ul className="item-ingredients">
            {card.itemIngredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MenuFilterCard;
