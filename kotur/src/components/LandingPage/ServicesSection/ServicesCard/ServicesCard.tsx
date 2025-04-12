import { ServicesCardType } from "../ServicesSection";

interface ServicesCardProps {
  card: ServicesCardType;
}

const ServicesCard = ({ card }: ServicesCardProps) => {
  return (
    <div className="services-card">
      <div className="services-card-img">
        <img src={card.img} alt={card.title} />
        <div className="services-card-icon">
          <img src={card.icon} alt={card.title} />
        </div>
      </div>
      <div className="services-card-body">
        <h5 className="services-card-title">{card.title}</h5>
        <p className="services-card-description">{card.description}</p>
        <button className="services-card-button">Дознај повеќе</button>
      </div>
    </div>
  );
};
export default ServicesCard;
