import React, { useState } from "react";

const CalendarComponent: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const today = new Date();

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

  const dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="mt-20 space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ASP.NET Calendar
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The calendar control allows selecting a single day, a week, or an entire month, 
        navigating between months, and displaying custom styles for different days.
      </p>

      {/* Calendar */}
      <h2 className="text-2xl font-bold">Select Your Birthday</h2>
      <div className="inline-block border rounded shadow-lg p-4">
        <div className="text-center mb-4 font-semibold">
          {monthNames[currentMonth]} {currentYear}
        </div>

        {/* Weekdays header */}
        <div className="grid grid-cols-7 text-center font-bold border-b pb-2">
          {weekdays.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 text-center mt-2 gap-1">
          {dates.map((day) => {
            const dateObj = new Date(currentYear, currentMonth, day);
            const isToday =
              dateObj.toDateString() === today.toDateString();
            const isSelected =
              selectedDate && dateObj.toDateString() === selectedDate.toDateString();

            return (
              <button
                key={day}
                className={`
                  p-2 rounded
                  ${isToday ? "bg-blue-200 font-bold" : ""}
                  ${isSelected ? "bg-green-400 text-white font-bold" : "hover:bg-gray-200"}
                `}
                onClick={() => handleDateSelect(dateObj)}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {/* Display selected and today date */}
      <div className="mt-4 space-y-2">
        <p>
          Today's date: <span className="font-semibold">{today.toDateString()}</span>
        </p>
        <p>
          Your selected birthday:{" "}
          <span className="font-semibold">
            {selectedDate ? selectedDate.toDateString() : "None"}
          </span>
        </p>
      </div>

      {/* Notes */}
      <h2 className="text-2xl font-bold mt-6">Notes</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>You can select a single day, a week, or an entire month.</li>
        <li>The selection is highlighted, and today's date is styled separately.</li>
        <li>Navigation to other months can be implemented similarly using state for month/year.</li>
        <li>React implementation simulates <code>Calendar1_SelectionChanged</code> event of ASP.NET.</li>
      </ul>
    </div>
  );
};

export default CalendarComponent;
