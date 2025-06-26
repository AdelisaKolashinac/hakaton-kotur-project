import { MenuCardType } from "../../../types/types";

interface MenuFilterCardProps {
  item: MenuCardType;
}

const MenuFilterCard = ({ item }: MenuFilterCardProps) => {
  return (
    <div className="menu-card">
      <div className="menu-card-img">
        <img src={item.image} alt="Cocktail Image" />
        <div className="overlay">
          <h3 className="item-name">{item.name}</h3>
          <p className="ingredients-label">Ingredients:</p>
          <ul className="item-ingredients">{item.ingredients}</ul>
        </div>
      </div>
    </div>
  );
};
export default MenuFilterCard;
