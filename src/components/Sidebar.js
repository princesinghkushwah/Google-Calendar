import React from "react";
import CreatEventButton from "./CreatEventButton";
import SmallCalender from "./SmallCalender";

const Sidebar = () => {
  return (
    <aside className="border p-5 w-64">
      <CreatEventButton />
      <SmallCalender />
    </aside>
  );
};

export default Sidebar;
