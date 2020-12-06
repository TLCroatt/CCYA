import React, { Component, useContext } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
// import eventArray from "./events";

import "react-big-calendar/lib/css/react-big-calendar.css";
import UserContext from "../utils/UserContext";

const localizer = momentLocalizer(moment);

export const Schedule = () => {
  const { calendarEvents } = useContext(UserContext);

  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={ calendarEvents }
        style={{ height: "100vh" }}
      />
    </div>
  );
}


export default Schedule;