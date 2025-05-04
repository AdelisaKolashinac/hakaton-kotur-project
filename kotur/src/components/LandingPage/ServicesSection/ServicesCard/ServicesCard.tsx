import { Link } from "react-router-dom";
import { ServicesCardType } from "../../../../types/types";

interface ServicesCardProps {
  card: ServicesCardType;
}

const ServicesCard = ({ card }: ServicesCardProps) => {
  const link = card.pageLink ? card.pageLink : `/aboutus#${card.hashLink}`;

  return (
    <Link to={link} className="servicesCard">
      <div className="servicesCard__img">
        <img src={card.img} alt={card.title} />
        <div className="servicesCard__icon">
          <img src={card.icon} alt={card.title} />
        </div>
      </div>
      <div className="servicesCard__body">
        <h5 className="servicesCard__title">{card.title}</h5>
        <p className="servicesCard__description">{card.description}</p>
        <button className="servicesCard__button">Дознај повеќе</button>
      </div>
    </Link>
  );
};
export default ServicesCard;
