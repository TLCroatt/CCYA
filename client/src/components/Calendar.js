import React, { useContext } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
// import eventArray from "./events";

import "react-big-calendar/lib/css/react-big-calendar.css";
import UserContext from "../utils/UserContext";

const localizer = momentLocalizer(moment);

export const Schedule = () => {
  const { calendarEvents, } = useContext(UserContext);
  // fillEvents();

  return (
    <div className="App">
      {(calendarEvents && calendarEvents.length > 0 ? 
        <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={ calendarEvents }
        style={{ height: "100vh" }}
      /> :
      <h3>Calendar is loading</h3>
      )}

    </div>
  );
}


export default Schedule;