import React, { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
const ContextWrapper = (props: any) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalenddarMonth, setSmallCalendarMonth] = useState<any>(null);
  const [daySelected, setDaySelected] = useState<any>(null);

  useEffect(() => {
    if (smallCalenddarMonth !== null) {
      setMonthIndex(smallCalenddarMonth);
    }
  }, [smallCalenddarMonth]);
  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalenddarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
