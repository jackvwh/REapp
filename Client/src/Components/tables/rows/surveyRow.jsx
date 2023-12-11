import { useApiClient } from '../../../Hooks/useApiClient';

export default function SurveyRow({ props }) {
  const {
    executeDelete,
    data: surveyResponse,
    loading: surveyLoading,
    error: surveyError,
  } = useApiClient.useDelete();
  if (!props) {
    console.error('Survey is undefined');
    return null;
  }
  function formatDate(date) {
    return new Intl.DateTimeFormat('da-DK').format(date);
  }

  const handleRemoveSurvey = async () => {
    await executeDelete(`surveys/${props.survey_id}`);
    // remove row from table
    document.getElementById(`survey_${props.survey_id}`).remove();
    if (surveyError) {
      console.log(surveyError);
    }
  };
  return (
    <tr id={`survey_${props.survey_id}`}>
      <td>{props.survey_id}</td>
      <td>{props.survey_title}</td>
      <td>{props.description}</td>
      <td>{formatDate(new Date(props.created_at))}</td>
      <td>
        <button
          onClick={handleRemoveSurvey}
          className="btn btn-ghost btn-sm rounded-btn"
        >
          Slet
        </button>
      </td>
    </tr>
  );
}
