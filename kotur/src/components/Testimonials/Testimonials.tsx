import TestimonialsCard from "./TestimonialsCard/TestimonialsCard";
import "./Testimonials.css";
import { testimonialsCards } from "../../data/data";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <img src="./landingPage/dark-spoon.png" alt="Spoon Icon" />
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
