import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";
const CalendarHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };
  return (
    <header className="px-4 py-2 flex items-center">
      <img
        src="https://thumbs.dreamstime.com/b/calendar-icon-white-background-flat-style-calendar-icon-your-web-site-design-logo-app-ui-calendar-symbol-calendar-icon-151463207.jpg"
        className="mr-2 w-12 h-12"
      />
      <h1 className="mr-10 text-xl text-gray-500 font-bold">Calendar</h1>
      <button className="border rounded py-2 px-4 mr-5">Today</button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          Left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          Right
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
};

export default CalendarHeader;
