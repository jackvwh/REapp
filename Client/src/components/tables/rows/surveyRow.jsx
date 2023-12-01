export default function SurveyRow({ props }) {
  if (!props) {
    console.error('Survey is undefined');
    return null;
  }
  function formatDate(date) {
    return new Intl.DateTimeFormat('da-DK').format(date);
  }
  return (
    <tr>
      <td>{props.survey_id}</td>
      <td>{props.survey_title}</td>
      <td>{props.description}</td>
      <td>{formatDate(new Date(props.created_at))}</td>
      <td>
        <button className="btn btn-ghost btn-sm rounded-btn">Rediger</button>
      </td>
    </tr>
  );
}
