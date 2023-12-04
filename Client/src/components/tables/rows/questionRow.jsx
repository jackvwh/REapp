export default function QuestionRow({ props }) {
  if (!props) {
    console.error('Survey is undefined');
    return null;
  }
  return (
    <tr>
      <td>{props.question_id}</td>
      <td>{props.question_text}</td>
      <td>{props.answer_type}</td>
      <td>
        <button className="btn btn-ghost btn-sm rounded-btn">Slet</button>
      </td>
    </tr>
  );
}
