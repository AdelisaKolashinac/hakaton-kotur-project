import { MenuFilterCardType } from "../Menu";

interface MenuFilterCardProps {
  item: MenuFilterCardType;
}

const MenuFilterCard = ({ item }: MenuFilterCardProps) => {
  return (
    <div className="menu-filter-card">
      <div className="menu-filter-card-img">
        <img src={item.image} alt="Cocktail Image" />
        <div className="overlay">
          <h3 className="item-name">{item.name}</h3>
          <p className="ingredients-label">Ingredients:</p>
          <ul className="item-ingredients">
            {item.ingredients}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MenuFilterCard;
