import TestimonialsCard from "./TestimonialsCard/TestimonialsCard";
import "./Testimonials.css";

export interface TestimonialsCardType {
  id: number;
  description: string;
  user: string;
  userIcon: string;
}

const testimonialsCards: TestimonialsCardType[] = [
  {
    id: 1,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum aperiam libero a esse consequuntur doloribus facere quaerat saepe nulla corporis ratione, officiis rem. Rem, minima!",
    user: "Petko Petkovski",
    userIcon: "P",
  },
  {
    id: 2,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum aperiam libero a esse consequuntur doloribus facere quaerat saepe nulla corporis ratione, officiis rem. Rem, minima!",
    user: "Petko Petkovski",
    userIcon: "P",
  },
  {
    id: 3,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum aperiam libero a esse consequuntur doloribus facere quaerat saepe nulla corporis ratione, officiis rem. Rem, minima!",
    user: "Petko Petkovski",
    userIcon: "P",
  },
  {
    id: 4,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum aperiam libero a esse consequuntur doloribus facere quaerat saepe nulla corporis ratione, officiis rem. Rem, minima!",
    user: "Petko Petkovski",
    userIcon: "P",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <img src="./ImgsAboutUs/spoon.jpg" alt="Spoon Icon" />
      <h2>Што велат нашите задоволни клиенти</h2>
      <div className="testimonials-card-container">
        {testimonialsCards.map((card) => (
          <TestimonialsCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};
export default Testimonials;
