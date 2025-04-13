import ServicesCard from "./ServicesCard/ServicesCard";

export interface ServicesCardType {
  id: number;
  img: string;
  icon: string;
  title: string;
  description: string;
  pageLink?: string;
  hashLink?: string;
}

const servicesCards: ServicesCardType[] = [
  {
    id: 1,
    img: "./landingPage/koktel-card.png",
    icon: "./landingPage/koktel-icon.png",
    title: "Коктел мени",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero numquam neque esse ea rem nobis qui eum magni magnam maiores.",
    pageLink: "/menu",
  },

  {
    id: 2,
    img: "./landingPage/iznajmiprostor-card.png",
    icon: "./landingPage/iznajmiprostor-icon.png",
    title: "Изнајми простор",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero numquam neque esse ea rem nobis qui eum magni magnam maiores.",
    hashLink: "iznajmi-prostor",
  },
  {
    id: 3,
    img: "./landingPage/ketering.png",
    icon: "./landingPage/ketering-icon.png",
    title: "Коктел кетеринг",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero numquam neque esse ea rem nobis qui eum magni magnam maiores.",
    hashLink: "koktel-ketering",
  },
  {
    id: 4,
    img: "./landingPage/kotur-card.png",
    icon: "./landingPage/ketering-icon.png",
    title: "Котур",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero numquam neque esse ea rem nobis qui eum magni magnam maiores.",
    hashLink: "kotur",
  },
];

const ServicesSection = () => {
  const repeatedCards = [...servicesCards, ...servicesCards, ...servicesCards];

  return (
    <div className="services-section">
      <h2 className="services-section-title">Услуги</h2>
      <div className="services-card-container">
        {repeatedCards.map((card, index) => (
          <ServicesCard key={`${card.id}-${index}`} card={card} />
        ))}
      </div>
    </div>
  );
};
export default ServicesSection;
