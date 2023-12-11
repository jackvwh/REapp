import { useEffect } from 'react';
import NotificationRow from '../notifications/tablerow';

function NotificationForm(props) {
  return (
    <div className="form-group">
      <form action="">
        <h1>Create a notification</h1>
        <label htmlFor="notification">Notification</label>
        <textarea
          className="form-control"
          id="notification"
          name="notification"
          placeholder="Enter notification"
          rows="3"
          value={props.notification}
          onChange={props.handleChange}
        />
        <label htmlFor="notification-type">Notification type</label>
        <select
          className="form-control"
          id="notification-type"
          name="notificationType"
          value={props.notificationType}
          onChange={props.handleChange}
        >
          <option value="info">Info</option>
          <option value="warning">Warning</option>
          <option value="error">Error</option>
          <option value="personal">Personal</option>
        </select>

        <div className="notification-list">
          <thead>
            Notifications
            <th>Text</th>
            <th> Answer Type</th>
          </thead>
          <tbody></tbody>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NotificationForm;
