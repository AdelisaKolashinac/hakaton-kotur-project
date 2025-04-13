import { Link } from "react-router-dom";
import { EventCardType } from "../EventsCardsList/EventsCardsList";
import "./EventCard.css";

interface EventCardProps {
  card: EventCardType;
}

const EventCard = ({ card }: EventCardProps) => {
  // Parse the time to display in proper format
  const formattedTime = card.time.includes(":") ? card.time : `${card.time}:00`;

  // Get day from date for showing in calendar icon
  const getDay = () => {
    try {
      // Extract day from date string like "април 13, 2025"
      const dayMatch = card.date.match(/\d+/);
      return dayMatch ? dayMatch[0] : "";
    } catch (e) {
      return "";
    }
  };

  return (
    <Link
      to={`/event/${card.id}`} // Link to individual event page in the future
      className={`event-card ${card.id % 2 === 0 ? "odd" : "even"}`}
    >
      <div className="calendar-icon">
        <div className="calendar-day">{getDay()}</div>
      </div>
      <div className="event-img">
        <img src={card.img} alt={card.name} />
      </div>
      <h5 className="event-name">{card.name}</h5>
      <p className="event-date">{card.date}</p>
      <p className="event-time">{formattedTime}ч</p>
    </Link>
  );
};

export default EventCard;
