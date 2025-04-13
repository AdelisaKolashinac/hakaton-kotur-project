import EventCard from "../EventCard/EventCard";
import "./EventsCardsList.css";

export interface EventCardType {
  id: number;
  img: string;
  name: string;
  date: string;
  time: string;
}

// Sample fallback data in case API fails
const sampleCards: EventCardType[] = [
  {
    id: 1,
    img: "./landingPage/image 417.png",
    name: "Meet prespa pre party",
    date: "Септември 5, 2024",
    time: "21:00",
  },
  {
    id: 2,
    img: "./landingPage/image 4177.png",
    name: "Концерт под сенка",
    date: "Јуни 15, 2024",
    time: "12:30",
  },
  {
    id: 3,
    img: "./landingPage/image 41777.png",
    name: "Диско принцип",
    date: "Септември 20, 2024",
    time: "20:00",
  },
];

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
