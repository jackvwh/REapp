import React, { useState } from 'react';
import { useApiClient } from '../../../Hooks/useApiClient';
import QuestionTable from '../questionTable';

export default function SurveyRow({ props }) {
  const {
    executeDelete,
    loading: surveyLoading,
    error: surveyError,
  } = useApiClient.useDelete();
  const [showQuestions, setShowQuestions] = useState(false);

  if (!props) {
    console.error('Survey is undefined');
    return null;
  }

  function formatDate(date) {
    return new Intl.DateTimeFormat('da-DK').format(new Date(date));
  }

  const handleRemoveSurvey = async () => {
    const isConfirmed = confirm(
      'Er du sikker på at du vil slette denne undersøgelse?'
    );
    if (!isConfirmed) {
      return;
    }
    await executeDelete(`/surveys/${props.survey_id}`);
    // remove row from table
    document.getElementById(`/survey_${props.survey_id}`).remove();
    if (surveyError) {
      console.log(surveyError);
    }
  };

  const toggleQuestions = () => {
    setShowQuestions(!showQuestions);
  };

  return (
    <>
      <tr id={`survey_${props.survey_id}`}>
        <td>{props.survey_id}</td>
        <td>{props.survey_title}</td>
        <td>{props.description}</td>
        <td>{formatDate(props.created_at)}</td>
        <td>
          <button
            onClick={handleRemoveSurvey}
            className="btn btn-ghost btn-sm rounded-btn">
            Slet
          </button>
          <button
            onClick={toggleQuestions}
            className="btn btn-ghost btn-sm rounded-btn">
            {showQuestions ? 'Skjul spørgsmål' : 'Vis spørgsmål'}
          </button>
        </td>
      </tr>
      {showQuestions && (
        <tr>
          <td colSpan="5">
            <QuestionTable questionData={props.questions} />
          </td>
        </tr>
      )}
    </>
  );
}
