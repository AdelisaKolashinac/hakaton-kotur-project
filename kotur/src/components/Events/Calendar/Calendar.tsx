import React, { useState, useEffect } from "react";
import "./Calendar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface ApiEvent {
  id: number;
  name: string;
  date: string;
  time: string;
  image: string;
}

interface CalendarProps {
  events?: ApiEvent[];
}

const Calendar: React.FC<CalendarProps> = ({ events = [] }) => {
  // Macedonian month abbreviations
  const months = [
    "Јан",
    "Фев",
    "Мар",
    "Апр",
    "Мај",
    "Јун",
    "Јул",
    "Авг",
    "Сеп",
    "Окт",
    "Ное",
    "Дек",
  ];

  // Macedonian days of the week
  const daysOfWeek = [
    "Недела",
    "Понеделник",
    "Вторник",
    "Среда",
    "Четврток",
    "Петок",
    "Сабота",
  ];

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const currentYear = currentDate.getFullYear();
  const currentDayOfWeek = currentDate.getDay(); // 0 for Sunday, 1 for Monday, etc.

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedWeek, setSelectedWeek] = useState(0);
  // Group events by month and week
  const [eventsByMonth, setEventsByMonth] = useState<
    Record<number, ApiEvent[][]>
  >({});

  useEffect(() => {
    // Group events by month and week
    const groupedEvents: Record<number, ApiEvent[][]> = {};

    events.forEach((event) => {
      try {
        const eventDate = new Date(event.date);
        const month = eventDate.getMonth();
        const weekOfMonth = Math.floor((eventDate.getDate() - 1) / 7);

        if (!groupedEvents[month]) {
          groupedEvents[month] = [[], [], [], []]; // Initialize 4 weeks per month
        }

        if (groupedEvents[month][weekOfMonth]) {
          groupedEvents[month][weekOfMonth].push(event);
        }
      } catch (e) {
        console.error("Error processing event date:", e);
      }
    });

    setEventsByMonth(groupedEvents);
  }, [events]);

  const getVisibleMonths = () => {
    let visibleMonths = [];
    for (let i = 0; i < 6; i++) {
      const monthIndex = (currentMonth + i) % 12;
      visibleMonths.push({ index: monthIndex, name: months[monthIndex] });
    }
    return visibleMonths;
  };

  const visibleMonths = getVisibleMonths();

  const handleMonthSelect = (index: number) => {
    setSelectedMonth(index);
    setSelectedWeek(0);
  };

  const handleWeekSelect = (weekIndex: number) => {
    setSelectedWeek(weekIndex);
  };

  const formatDateDisplay = (day: number, month: number, year: number) => {
    return `${day < 10 ? "0" + day : day}.${
      month < 9 ? "0" + (month + 1) : month + 1
    }`;
  };

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">Календар Котур Настани</h2>

      <div className="month-tabs">
        {visibleMonths.map((monthObj) => (
          <button
            key={monthObj.index}
            className={`month-tab ${
              selectedMonth === monthObj.index ? "active" : ""
            }`}
            onClick={() => handleMonthSelect(monthObj.index)}
          >
            {monthObj.name}
          </button>
        ))}
      </div>

      <div className="calendar-layout">
        <div className="current-date-wrapper">
          <div className="current-date">
            <div className="day-name">{daysOfWeek[currentDayOfWeek]}</div>
            <div className="date-number">
              {formatDateDisplay(currentDay, currentMonth, currentYear)}
            </div>
            <div className="date-year">{currentYear}</div>
          </div>
          <button className="add-event-btn">
            <span className="add-text">
              <FontAwesomeIcon icon={faPlus} className="add-icon" />
              <span className="add-text-label">Додај/посети</span>
            </span>
          </button>
        </div>

        <div className="weeks-stack">
          {[0, 1, 2, 3].map((weekIndex) => {
            const weekEvents = eventsByMonth[selectedMonth]?.[weekIndex] || [];

            return (
              <div
                key={weekIndex}
                className={`week-item ${
                  selectedWeek === weekIndex ? "active" : ""
                }`}
                onClick={() => handleWeekSelect(weekIndex)}
              >
                <div className="week-header">
                  <h3>Недела #{weekIndex + 1}</h3>
                </div>
                <div className="week-content">
                  <div className="calendar-events">
                    {weekEvents.length > 0 ? (
                      weekEvents.slice(0, 2).map((event) => (
                        <div key={event.id} className="event-item">
                          <div className="calendar-event-label">
                            {new Date(event.date).getDate()}
                          </div>
                          <p>{event.name}</p>
                        </div>
                      ))
                    ) : (
                      <div className="event-item">
                        <div className="calendar-event-label">НЕМА НАСТАНИ</div>
                        <p>Нема закажани настани за оваа недела</p>
                      </div>
                    )}
                    {weekEvents.length > 0 && (
                      <div className="learn-more-container">
                        <FontAwesomeIcon icon={faPlus} className="add-icon" />
                        <a href="#" className="learn-more">
                          Дознај повеќе
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
