import React, { useEffect, useRef, useState } from 'react';
import { DayPilot, DayPilotCalendar } from "@daypilot/daypilot-lite-react";
import  '../../styles/calender.css';

const Calendar = () => {
  const calendarRef = useRef();
  const [config, setConfig] = useState({
    locale: "da-dk",
    viewType: "Week",
    headerDateFormat: "d MMMM yyyy",
    timeRangeSelectedHandling: "Enabled",
    cellHeight: 60,
    onTimeRangeSelected: async (args) => {
      const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
      const dp = args.control;
      dp.clearSelection();
      if (modal.canceled) { return; }
      dp.events.add({
        start: args.start,
        end: args.end,
        id: DayPilot.guid(),
        text: modal.result
      });
    },
    eventMoveHandling: "Update",
    onEventMoved: (args) => {
      console.log("Event moved: " + args.e.text());
    },
    eventResizeHandling: "Update",
    onEventResized: (args) => {
      console.log("Event resized: " + args.e.text());
    },
    eventClickHandling: "Disabled",
  });

  useEffect(() => {

    const events = [
      {
        id: 1,
        text: "Event 1",
        start: DayPilot.Date.today().addHours(10),
        end: DayPilot.Date.today().addHours(12),
        resource: "R1"
      },
      {
        id: 2,
        text: "Event 2",
        start: "2024-06-02T10:00:00",
        end: "2024-06-02T11:00:00",
        resource: "R2",
        barColor: "#38761d",
        barBackColor: "#93c47d"
      }
    ];

    // load event data using config
    setConfig(prevConfig => ({
      ...prevConfig,
      events
    }));

    // to improve performance, you can use the direct API to load resources and events instead:
    // getCalendar().update({events, columns});

  }, []);

  const getCalendar = () => calendarRef.current?.control;

  return (
    <div className='calendar-styling'>
      <DayPilotCalendar
        {...config}
        ref={calendarRef}
      />
    </div>
  );
}
export default Calendar;