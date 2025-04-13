import { EventCardType } from "../EventsCardsList/EventsCardsList";

interface EventCardProps {
  card: EventCardType;
}

const EventCard = ({ card }: EventCardProps) => {
  return (
    <div className={`event-card ${card.id % 2 === 0 ? 'odd' : 'even'}`}>
        <div className="calendar-icon"><img src="./landingPage/calendar.png" alt="Calendar Icon" /></div>
      <div className="event-img">
        <img src={card.img} alt="Event Image" />
      </div>
      <h5 className="event-name">{card.name}</h5>
      <p className="event-date">{card.date}</p>
      <p className="event-time">{card.time}ч</p>
    </div>
  );
};
export default EventCard;
