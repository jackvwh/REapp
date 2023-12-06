import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Draggable, Dropcontainer, Eventcalendar, setOptions, Toast } from '@mobiscroll/react';

setOptions({
  theme: 'ios',
  themeVariant: 'light'
});

const now = new Date();
const today = new Date(now.setMinutes(59));
const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);

const Appointment = (props) => {
  const [draggable, setDraggable] = React.useState();

  const setDragElm = React.useCallback((elm) => {
    setDraggable(elm);
  }, []);

  const event = props.data;
  const eventLength = Math.abs(new Date(event.end).getTime() - new Date(event.start).getTime()) / (60 * 60 * 1000);

  return (
    <div>
      {!event.hide && (
        <div ref={setDragElm} className="docs-appointment-task" style={{ background: event.color }}>
          <div>{event.title}</div>
          <div>{eventLength + ' hour' + (eventLength > 1 ? 's' : '')}</div>
          <Draggable dragData={event} element={draggable} />
        </div>
      )}
    </div>
  );
};

const calender = () => {
  const doctors = React.useMemo(
    () => [
      {
        id: 1,
        name: 'Sander',
      },
    ],
    []
  );

  const view = React.useMemo(() => {
    return {
      schedule: {
        type: 'week',
        startTime: '05:00',
        endTime: '23:00',
        allDay: false,
      },
    };
  }, []);

  const myInvalid = React.useMemo(
    () => [
      {
        recurring: {
          repeat: 'daily',
          until: yesterday,
        },
      },
      {
        start: yesterday,
        end: today,
      },
    ],
    []
  );

  const [myEvents, setEvents] = React.useState([
    {
      id: 'job1',
      start: '2023-12-06T14:00',
      end: '2023-12-06T16:00',
      resource: 1,
      title: 'Myla Bennett',
      job: 'Wisdom tooth removal',
      color: '#334ab9',
    },
    {
      id: 'job2',
      start: '2023-12-06T17:00',
      end: '2023-12-06T18:30',
      resource: 1,
      title: 'Beatrix Foley',
      job: 'Braces',
      color: '#177e70',
    },
    {
      id: 'job3',
      start: '2023-12-06T08:00',
      end: '2023-12-06T09:30',
      resource: 3,
      title: 'Frank Watson',
      job: 'Teeth whitening',
      color: '#d1891f',
    },
    {
      id: 'job4',
      start: '2023-12-06T10:00',
      end: '2023-12-06T12:30',
      resource: 3,
      title: 'Jaime Joyce',
      job: 'Root canal treatment',
      color: '#cb3939',
    },
    {
      id: 'job5',
      start: '2023-12-06T13:00',
      end: '2023-12-06T14:00',
      resource: 3,
      title: 'Corey Shepard',
      job: 'Tooth extraction',
      color: '#aba343',
    },
    {
      id: 'job6',
      start: '2023-12-06T14:00',
      end: '2023-12-06T16:00',
      resource: 4,
      title: 'Callie Leonard',
      job: 'Crown and bridge',
      color: '#1ca11a',
    },
    {
      id: 'job7',
      start: '2023-12-06T17:00',
      end: '2023-12-06T18:00',
      resource: 4,
      title: 'Harley Thomson',
      job: 'Tartar removal',
      color: '#a446b5',
    },
    {
      id: 'job8',
      start: '2023-12-06T09:00',
      end: '2023-12-06T11:00',
      resource: 6,
      title: 'Ricky Welch',
      job: 'Wisdom tooth removal',
      color: '#334ab9',
    },
  ]);

  const [appointments, setAppointments] = React.useState([
    {
      id: 'd1',
      title: 'Winfred Lesley',
      job: 'Teeth whitening',
      color: '#d1891f',
      start: '2023-12-06T08:00',
      end: '2023-12-06T09:30',
      unscheduled: true,
    },
    {
      id: 'd2',
      title: 'Rosalin Delice',
      job: 'Crown and bridge',
      color: '#1ca11a',
      start: '2023-12-06T08:00',
      end: '2023-12-06T10:00',
      unscheduled: true,
    },
    {
      id: 'd3',
      title: 'Macy Steven',
      job: 'Root canal treatment',
      color: '#cb3939',
      start: '2023-12-06T10:00',
      end: '2023-12-06T12:30',
      unscheduled: true,
    },
    {
      id: 'd4',
      title: 'Lavern Cameron',
      job: 'Tartar removal',
      color: '#a446b5',
      start: '2023-12-06T12:00',
      end: '2023-12-06T13:00',
      unscheduled: true,
    },
  ]);

  const [contBg, setContBg] = React.useState('');
  const [myColors, setColors] = React.useState([]);
  const [dropCont, setDropCont] = React.useState();
  const [toastMessage, setToastMessage] = React.useState('');
  const [isToastOpen, setToastOpen] = React.useState(false);

  const setDropElm = React.useCallback((elm) => {
    setDropCont(elm);
  }, []);

  const onEventCreate = React.useCallback((args) => {
    const event = args.event;
    event.unscheduled = false;
    setColors([]);
  }, []);

  const onEventCreated = React.useCallback((args) => {
    setToastMessage(args.event.title + ' added');
    setToastOpen(true);
    setEvents((prevEvents) => [...prevEvents, args.event]);
    setAppointments((prevAppointments) => prevAppointments.filter((item) => item.id !== args.event.id));
  }, []);

  const handleFailed = React.useCallback((event) => {
    if (event.start <= today) {
      setToastMessage("Can't add event in the past");
    } else {
      setToastMessage('Make sure not to double book');
    }
    setToastOpen(true);
  }, []);

  const onEventCreateFailed = React.useCallback(
    (args) => {
      handleFailed(args.event);
    },
    [handleFailed]
  );

  const onEventUpdateFailed = React.useCallback(
    (args) => {
      handleFailed(args.event);
    },
    [handleFailed]
  );

  const onEventDelete = React.useCallback((args) => {
    setToastMessage(args.event.title + ' unscheduled');
    setToastOpen(true);
    setEvents((prevEvents) => prevEvents.filter((item) => item.id !== args.event.id));
  }, []);

  const onEventDragEnter = React.useCallback(() => {
    setColors([
      {
        background: '#f1fff24d',
        start: '08:00',
        end: '20:00',
        recurring: {
          repeat: 'daily',
        },
      },
    ]);
  }, []);

  const onEventDragLeave = React.useCallback(() => {
    setColors([]);
  }, []);

  const onItemDrop = React.useCallback((args) => {
    if (args.data) {
      args.data.unscheduled = true;
      setAppointments((prevAppointments) => [...prevAppointments, args.data]);
    }
    setContBg('');
  }, []);

  const onItemDragEnter = React.useCallback((args) => {
    if (!(args.data && args.data.unscheduled)) {
      setContBg('#d0e7d2cc');
    }
  }, []);

  const onItemDragLeave = React.useCallback(() => {
    setContBg('');
  }, []);

  const onToastClose = React.useCallback(() => {
    setToastOpen(false);
  }, []);

  React.useEffect(() => {
    for (const event of myEvents) {
      // convert dates to date objects
      event.start = event.start ? new Date(event.start) : event.start;
      event.end = event.end ? new Date(event.end) : event.end;
      // mark past events as fixed by setting the event.editable property to false
      event.editable = !!(event.start && today < event.start);
    }
  }, [myEvents]);

  return (
    <div className="mbsc-grid mbsc-no-padding">
      <div className="mbsc-row">
        <div className="mbsc-col-sm-9 docs-appointment-calendar">
          <Eventcalendar
            data={myEvents}
            view={view}
            resources={doctors}
            invalid={myInvalid}
            dragToMove={true}
            dragToCreate={true}
            eventOverlap={false}
            externalDrop={true}
            externalDrag={true}
            colors={myColors}
            onEventCreate={onEventCreate}
            onEventCreated={onEventCreated}
            onEventCreateFailed={onEventCreateFailed}
            onEventUpdateFailed={onEventUpdateFailed}
            onEventDelete={onEventDelete}
            onEventDragEnter={onEventDragEnter}
            onEventDragLeave={onEventDragLeave}
          />
          <Toast isOpen={isToastOpen} message={toastMessage} onClose={onToastClose} />
        </div>
        <div className="mbsc-col-sm-3 docs-appointment-cont" ref={setDropElm} style={{ backgroundColor: contBg }}>
          <Dropcontainer onItemDrop={onItemDrop} onItemDragEnter={onItemDragEnter} onItemDragLeave={onItemDragLeave} element={dropCont}>
            <div className="mbsc-form-group-title">Unscheduled appointments</div>
            {appointments.map((app) => (
              <Appointment key={app.id} data={app} />
            ))}
          </Dropcontainer>
        </div>
      </div>
    </div>
  );
};

export default calender;