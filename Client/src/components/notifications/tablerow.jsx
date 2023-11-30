export default function NotificationRow(props) {
  const { notification, notificationType } = props;
  return (
    <tr>
      <td>{notification}</td>
      <td>{notificationType}</td>
    </tr>
  );
}
