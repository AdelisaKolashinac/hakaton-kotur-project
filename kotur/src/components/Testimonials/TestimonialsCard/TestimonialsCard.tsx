import { TestimonialsCardType } from "../Testimonials";

interface TestimonialsCardProps {
  card: TestimonialsCardType;
}

const TestimonialsCard = ({ card }: TestimonialsCardProps) => {
  return (
    <div className="testimonials-card">
<<<<<<< HEAD
      <p className="testimonials-card-desc">{card.description}</p>
=======
      <p className="testimonials-card-desc">
        {card.description}
      </p>
>>>>>>> 41a96168ba104f923fd6288214425277349f788e
      <div className="testimonials-card-user">
        <div className="user-icon">{card.userIcon}</div>
        <p className="user-name">{card.user}</p>
      </div>
    </div>
  );
};
export default TestimonialsCard;
