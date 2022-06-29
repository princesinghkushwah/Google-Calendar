import { useState, useContext, useEffect } from "react";
import "./App.css";
import CalenderHeader from "./components/CalenderHeader";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";
import GlobalContext from "./Context/GlobalContext";
import { getMonth } from "./utils";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  const { monthIndex } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));   
  }, [monthIndex]);
  console.log(currentMonth);
  return (
    <>
      <div className="h-screen flex flex-col">
        <CalenderHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
}

export default App;
