import React, { useEffect, useMemo, useReducer, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

function savedEventsReducer(
  state: any,
  { type, payload }: { type: any; payload: any }
) {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt: any) => (evt.id === payload.id ? payload : evt));
    case "delete":
      return state.filter((evt: any) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}

function initEvents() {
  const storageEvents = localStorage.getItem("savedEvents");
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}

const ContextWrapper = (props: any) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalenddarMonth, setSmallCalendarMonth] = useState<any>(null);
  const [daySelected, setDaySelected] = useState<any>(dayjs());
  const [showEventModal, setShowEventModal] = useState<any>(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [labels, setLabels] = useState<any>([]);
  const [savedEvents, dispatchCalEvents] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  useEffect(() => {
    setLabels((prevLabels: any) => {
      return [...new Set(savedEvents.map((evt: any) => evt.label))].map(
        (label: any) => {
          const currentLabel = prevLabels.find(
            (lbl: any) => lbl.label === label
          );
          return {
            label,
            checked: currentLabel ? currentLabel.checked : true,
          };
        }
      );
    });
  }, [savedEvents]);

  useEffect(() => {
    if (smallCalenddarMonth !== null) {
      setMonthIndex(smallCalenddarMonth);
    }
  }, [smallCalenddarMonth]);

  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);
  function updateLabel(label: any) {
    setLabels(
      labels.map((lbl: any) => (lbl.label === label.label ? label : lbl))
    );
  }

  const filteredEvents = useMemo(() => {
    return savedEvents.filter((evt: any) =>
      labels
        .filter((lbl: any) => lbl.checked)
        .map((lbl: any) => lbl.label)
        .includes(evt.label)
    );
  }, [savedEvents, labels]);
  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalenddarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
        dispatchCalEvents,
        savedEvents,
        selectedEvent,
        setSelectedEvent,
        setLabels,
        labels,
        updateLabel,
        filteredEvents,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
