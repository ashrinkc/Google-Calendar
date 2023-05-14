import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index: any) => {},
  smallCalenddarMonth: 0,
  setSmallCalendarMonth: (index: any) => {},
  daySelected: null,
  setDaySelected: (day: any) => {},
  showEventModal: false,
  setShowEventModal: (show: any) => {},
  dispatchCalEvents: ({ type, payload }: { type: any; payload: any }) => {},
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: (a: any) => {},
});

export default GlobalContext;
