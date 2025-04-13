import React, { useState } from "react";
import "./Calendar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Calendar: React.FC = () => {
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

  // Get current date info
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  // State for selected month and week
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedWeek, setSelectedWeek] = useState(0);

  // Hard-coded reference date from the image
  const formattedDay = "Недела";
  const formattedDate = "13.04";
  const formattedYear = "2025";

  // Get only the current month and the next 5 months (6 total)
  const getVisibleMonths = () => {
    let visibleMonths = [];
    for (let i = 0; i < 6; i++) {
      const monthIndex = (currentMonth + i) % 12;
      visibleMonths.push({ index: monthIndex, name: months[monthIndex] });
    }
    return visibleMonths;
  };

  const visibleMonths = getVisibleMonths();

  // Handle month selection
  const handleMonthSelect = (index: number) => {
    setSelectedMonth(index);
    setSelectedWeek(0); // Reset to first week when changing month
  };

  // Handle week selection
  const handleWeekSelect = (weekIndex: number) => {
    setSelectedWeek(weekIndex);
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
            <div className="day-name">Недела</div>
            <div className="date-number">13.04</div>
            <div className="date-year">2025</div>
          </div>
          <button className="add-event-btn">
            <span className="add-text">
              <FontAwesomeIcon icon={faPlus} className="add-icon" />
              <span className="add-text-label">Додај/посети</span>
            </span>
          </button>
        </div>

        <div className="weeks-stack">
          {[0, 1, 2, 3].map((weekIndex) => (
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
                  <div className="event-item">
                    <div className="calendar-event-label">SUBHEADING</div>
                    <p>Lorem ipsum</p>
                  </div>
                  <div className="event-item">
                    <div className="calendar-event-label">SUBHEADING</div>
                    <p>Lorem ipsum</p>
                  </div>
                  <div className="learn-more-container">
                    <FontAwesomeIcon icon={faPlus} className="add-icon" />
                    <a href="#" className="learn-more">
                      Дознај повеќе
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
