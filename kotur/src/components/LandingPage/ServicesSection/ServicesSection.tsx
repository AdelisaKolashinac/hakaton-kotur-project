import { servicesCards } from "../../../data/data";
import ServicesCard from "./ServicesCard/ServicesCard";

const ServicesSection = () => {
  const repeatedCards = [...servicesCards, ...servicesCards, ...servicesCards];

  return (
    <div className="services">
      <h2 className="services__title">Услуги</h2>
      <div className="services__wrapper">
        <div className="services__cardContainer">
          {repeatedCards.map((card, index) => (
            <ServicesCard key={`${card.id}-${index}`} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServicesSection;
