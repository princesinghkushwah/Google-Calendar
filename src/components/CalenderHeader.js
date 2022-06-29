import dayjs from "dayjs";
import React from "react";
import { useContext } from "react";
import logo from "../assets/goglogo.png";
import GlobalContext from "../Context/GlobalContext";

const CalenderHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  const handlePrevMonth = () => {
    console.log("handlePrevMonth");

    setMonthIndex(monthIndex - 1);
  };

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };
  return (
    <header className="px-4 py-2 flex items-center">
      <img src={logo} alt="calender" className="mr-2 w-12 h-12" />
      <h1 className="mr-10 text-xl text-gray-500 font-bold">Calender</h1>
      <button
        className="border rounded py-2 px-4 mr-5 hover:bg-gray-200"
        onClick={() =>
          setMonthIndex(
            monthIndex === dayjs().month()
              ? monthIndex + Math.random()
              : dayjs().month()
          )
        }
      >
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outiled cursor-pointer text-gray-600 mx-2 ">
          {"<"}
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outiled cursor-pointer text-gray-600 mx-2">
          {">"}
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
};

export default CalenderHeader;
