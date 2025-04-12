import ServicesCard from "./ServicesCard/ServicesCard";

export interface ServicesCardType {
  id: number;
  img: string;
  icon: string;
  title: string;
  description: string;
}

const servicesCards: ServicesCardType[] = [
  {
    id: 1,
    img: "./landingPage/koktel-card.png",
    icon: "./landingPage/koktel-icon.png",
    title: "Коктел мени",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero numquam neque esse ea rem nobis qui eum magni magnam maiores.",
  },

  {
    id: 2,
    img: "./landingPage/iznajmiprostor-card.png",
    icon: "./landingPage/iznajmiprostor-icon.png",
    title: "Изнајми простор",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero numquam neque esse ea rem nobis qui eum magni magnam maiores.",
  },
  {
    id: 3,
    img: "./landingPage/ketering.png",
    icon: "./landingPage/ketering-icon.png",
    title: "Коктел кетеринг",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero numquam neque esse ea rem nobis qui eum magni magnam maiores.",
  },
  {
    id: 4,
    img: "./landingPage/ketering.png",
    icon: "./landingPage/ketering-icon.png",
    title: "Котур",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero numquam neque esse ea rem nobis qui eum magni magnam maiores.",
  },
];

const ServicesSection = () => {
  return (
    <div className="services-section">
      <h2 className="services-section-title">Услуги</h2>
      <div className="rectangle-one"></div>
      <div className="rectangle-two"></div>
      <div className="services-card-container">
        {servicesCards.map((card) => (
          <ServicesCard key={card.id} card={card} />
        ))}
      </div>
      <div className="rectangle-three"></div>
    </div>
  );
};
export default ServicesSection;
