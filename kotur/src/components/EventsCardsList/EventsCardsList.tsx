import { sampleCards } from "../../data/data";
import { EventCardType } from "../../types/types";
import EventCard from "../EventCard/EventCard";
import "./EventsCardsList.css";

interface ApiEvent {
  id: number;
  name: string;
  date: string;
  time: string;
  image: string;
}

interface EventsCardsListProps {
  apiEvents?: ApiEvent[];
  isLoading?: boolean;
}

const EventsCardsList = ({
  apiEvents = [],
  isLoading = false,
}: EventsCardsListProps) => {
  // Format API events to match EventCardType format
  const formattedApiEvents: EventCardType[] = apiEvents.map((event) => ({
    id: event.id,
    img: event.image,
    name: event.name,
    date: formatDate(event.date),
    time: event.time,
  }));

  // Function to format date to Macedonian format
  function formatDate(dateStr: string): string {
    try {
      const date = new Date(dateStr);

      // Macedonian month names
      const macedonianMonths = [
        "Јануари",
        "Февруари",
        "Март",
        "Април",
        "Мај",
        "Јуни",
        "Јули",
        "Август",
        "Септември",
        "Октомври",
        "Ноември",
        "Декември",
      ];

      const month = macedonianMonths[date.getMonth()];
      return `${month} ${date.getDate()}, ${date.getFullYear()}`;
    } catch (e) {
      return dateStr; // Return the original date if parsing fails
    }
  }

  // Use API events if available, otherwise use sample data
  const eventsToDisplay =
    formattedApiEvents.length > 0 ? formattedApiEvents : sampleCards;

  // For carousel scroll effect, we need to repeat the cards
  const repeatedCards = [
    ...eventsToDisplay,
    ...eventsToDisplay,
    ...eventsToDisplay,
  ];

  if (isLoading) {
    return <div className="loading-indicator">Loading events...</div>;
  }

  return (
    <section className="events-cards-list">
      <div className="events-cards-wrapper">
        <div className="card-container">
          {repeatedCards.map((card, index) => (
            <EventCard key={`${card.id}-${index}`} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsCardsList;
