import dayjs from "dayjs";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import GlobalContext from "../Context/GlobalContext";
import { getMonth } from "../utils";

const SmallCalender = () => {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  console.log(currentMonth[0]);

  const { monthIndex, setSmallCalendarMonth, daySelected, setDaySelected } =
    useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  const handlePrevMonth = () => {
    console.log("handlePrevMonth");

    setCurrentMonthIdx(currentMonthIdx - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonthIdx(currentMonthIdx + 1);
  };

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  function getDayClass(day) {
    const formate = "DD-MM-YYYY";
    const nowDay = dayjs().format(formate);
    const currDay = day.format(formate);
    const slcDay = daySelected && daySelected.format(formate);
    if (nowDay === currDay) {
      return "bg-blue-500 rounded-full text-white";
    } else if (currDay === slcDay) {
      return "bg-blue-100 rounded-full text-blue-600 font-bold";
    } else {
      return "";
    }
  }
  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
        </p>
        <div>
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
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="text-sm py-1 text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button
                key={idx}
                className={`py-1 w-full ${getDayClass(day)}`}
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIdx);
                   setDaySelected(day);
                }}
              >
                <span className="text-sm">{day.format("D")}</span>{" "}
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SmallCalender;
