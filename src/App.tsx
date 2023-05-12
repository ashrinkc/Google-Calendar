import { useState, useContext, useEffect } from "react";
import CalendarHeader from "./components/CalendarHeader.tsx";
import Month from "./components/Month.tsx";
import Sidebar from "./components/Sidebar.tsx";
import { getMonth } from "./util.ts";
import GlobalContext from "./context/GlobalContext.ts";
function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <>
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
}

export default App;
