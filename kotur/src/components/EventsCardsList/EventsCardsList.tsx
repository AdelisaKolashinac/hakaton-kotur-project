import EventCard from "../EventCard/EventCard";

export interface EventCardType {
  id: number;
  img: string;
  name: string;
  date: string;
  time: string;
}

const cards: EventCardType[] = [
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

const EventsCardsList = () => {
  return (
    <section className="events-cards-list">
      <div className="card-container">
        {cards.map((card) => (
          <EventCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};
export default EventsCardsList;
