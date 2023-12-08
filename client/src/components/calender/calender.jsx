import React, { useEffect, useRef, useState } from 'react';
import { DayPilot, DayPilotCalendar } from '@daypilot/daypilot-lite-react';
import '../../styles/calender.css';

const Calendar = () => {
  const calendarRef = useRef();
  const [config, setConfig] = useState({
    locale: 'da-dk',
    viewType: 'Week',
    headerDateFormat: 'd MMMM yyyy',
    timeRangeSelectedHandling: 'Enabled',
    cellHeight: 60,
    onTimeRangeSelected: async args => {
      const modal = await DayPilot.Modal.prompt('Create a new event:', 'Event 1');
      const dp = args.control;
      dp.clearSelection();
      if (modal.canceled) {
        return;
      }
      const newEvent = {
        start: args.start,
        end: args.end,
        id: DayPilot.guid(),
        text: modal.result,
      };
      dp.events.add();

      try {
        const response = await fetch('http://localhost:5000/calender', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newEvent),
        });
        const data = await response.json();
        console.log('Success:', data);
      } catch (error) {
        console.error('Error:', error);
      }
    },
    eventResizeHandling: 'Update',
    onEventResized: async args => {
      console.log('Event resized: ', args.e.text());
      try {
        const response = await fetch(`http://localhost:5000/calender/${args.e.id()}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            start: args.newStart,
            end: args.newEnd,
            test: args.e.text(),
          }),
        });
        const data = await response.json();
        console.log('Success:', data);
      } catch (error) {
        console.error('Error:', error);
      }
    },
    eventClickHandling: 'Disabled',
  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Make a GET request to fetch the events
        const response = await fetch('http://localhost:3000/calender');
        const data = await response.json();
        console.log('Success:', data);
  
        const events = data.map(event => ({
          id: event.event_id,
          text: event.text,
          start: new DayPilot.Date(event.start),
          end: new DayPilot.Date(event.end),
          resource: event.profile_id,
        }));
  
        setConfig(events);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    fetchEvents();
  }, []);

  const getCalendar = () => calendarRef.current?.control;

  return (
    <div className="calendar-styling">
      <DayPilotCalendar {...config} ref={calendarRef} />
    </div>
  );
};
export default Calendar;
