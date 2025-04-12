import { TestimonialsCardType } from "../Testimonials";

interface TestimonialsCardProps {
  card: TestimonialsCardType;
}

const TestimonialsCard = ({ card }: TestimonialsCardProps) => {
  return (
    <div className="testimonials-card">
      <p className="testimonials-card-desc">
        {card.description}
      </p>
      <div className="testimonials-card-user">
        <div className="user-icon">{card.userIcon}</div>
        <p className="user-name">{card.user}</p>
      </div>
    </div>
  );
};
export default TestimonialsCard;
