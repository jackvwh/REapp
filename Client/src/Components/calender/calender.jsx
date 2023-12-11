import React, { useEffect, useRef, useState } from 'react';
import { DayPilot, DayPilotCalendar } from '@daypilot/daypilot-lite-react';
import '../../Styles/calender.css';

const Calendar = () => {
  const calendarRef = useRef();
  const [config, setConfig] = useState({
    locale: 'da-dk',
    viewType: 'Week',
    headerDateFormat: 'd MMMM yyyy',
    timeRangeSelectedHandling: 'Enabled',
    cellHeight: 60,
    eventMoveHandling: 'Update', // Added event move handling
    onEventMoved: async args => {
      // Added onEventMoved handler
      console.log('Event moved: ', args.e.text());
      const updatedEvent = {
        id: args.e.id(),
        start: args.newStart.toString(),
        end: args.newEnd.toString(),
        text: args.e.text(),
      };
      try {
        const response = await fetch(
          `http://localhost:3001/calender/events/${args.e.id()}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedEvent),
            credentials: 'include',
          }
        );
        const data = await response.json();
        console.log('Success:', data);
      } catch (error) {
        console.error('Error:', error);
      }
    },
    onTimeRangeSelected: async args => {
      const modal = await DayPilot.Modal.prompt('Create a new event:', 'Event 1');
      const dp = args.control;
      dp.clearSelection();
      if (modal.canceled) {
        return;
      }
      const newEvent = {
        start: args.start.toString(),
        end: args.end.toString(),
        text: modal.result,
      };
      dp.events.add(newEvent);

      try {
        const response = await fetch('http://localhost:3001/calender/events', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newEvent),
          credentials: 'include',
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
      const updatedEvent = {
        start: args.newStart.toString(),
        end: args.newEnd.toString(),
        text: args.e.text(),
      };
      try {
        const response = await fetch(
          `http://localhost:3001/calender/events/${args.e.id()}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedEvent),
            credentials: 'include',
          }
        );
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
        const response = await fetch('http://localhost:3001/calender/', {
          method: 'GET',
          credentials: 'include',
        });
        const data = await response.json();
        console.log('Success:', data);

        const events = data.map(event => ({
          id: event.event_id,
          text: event.text,
          start: new DayPilot.Date(event.start),
          end: new DayPilot.Date(event.end),
        }));

        setConfig(prevConfig => ({ ...prevConfig, events }));
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
