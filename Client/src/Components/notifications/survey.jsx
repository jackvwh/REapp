import React, { useState } from 'react';
import { useApiClient } from '../../Hooks/useApiClient.js';

export default function SurveyNotification({ surveyId, feedbackId }) {
  // survey state
  const {
    data: survey,
    loading: isSurveyLoading,
    error: surveyError,
  } = useApiClient.useGet(`surveys/${surveyId}`);

  // feedback state
  const {
    executePost,
    data: feedbackResponse,
    loading: isFeedbackLoading,
    error: feedbackError,
  } = useApiClient.usePost();

  // initialize state for feedback answers
  const [answers, setAnswers] = useState([]);

  const handleInputChange = e => {
    let value = null;
    let bool = null;
    let text = null;
    if (e.target.name === '1-10' || e.target.name === '1-5') {
      value = e.target.value;
    } else if (e.target.name === 'boolean') {
      bool = e.target.value;
    } else if (e.target.name === 'text') {
      text = e.target.value;
    }
    const answer = {
      questionId: e.target.id,
      answerText: text,
      answerValue: value,
      answerBool: bool,
    };
    setAnswers(prevAnswers => {
      // Check if the answer for the same questionId already exists
      const existingAnswerIndex = prevAnswers.findIndex(
        a => a.questionId === answer.questionId
      );

      if (existingAnswerIndex >= 0) {
        // Update existing answer
        return prevAnswers.map((item, index) =>
          index === existingAnswerIndex ? answer : item
        );
      } else {
        // Add new answer
        return [...prevAnswers, answer];
      }
    });
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await executePost(`feedback/${feedbackId}/answers`, { answers: answers });
      if (feedbackResponse) {
        window.location.reload();
        return;
      }
    } catch (error) {
      console.error(error, feedbackError);
    }
  };

  if (isSurveyLoading) {
    return <p>Loading survey...</p>;
  }
  if (surveyError) {
    return <p>Error loading survey</p>;
  }

  return (
    <div className="modal-box">
      <h2>Titel: {survey.survey_title}</h2>
      <p>Beskrivelse: {survey.description}</p>
      <form method="dialog">
        {survey.questions.map(question => (
          <div key={question.question_id}>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">{question.question_text}</span>
              </div>
            </label>
            {question.answer_type === 'boolean' ? (
              // Boolean type input
              <div className="radio-group">
                <label
                  className="radio checked:bg-blue-500 "
                  style={{ marginRight: '0.5rem' }}>
                  <input
                    type="radio"
                    name={question.answer_type}
                    id={question.question_id}
                    value="true"
                    checked={answers[question.question_id] === 'true'}
                    onChange={handleInputChange}
                  />
                  Ja
                </label>
                <label
                  className="radio checked:bg-blue-500 "
                  style={{ marginRight: '0.5rem' }}>
                  <input
                    type="radio"
                    name={question.answer_type}
                    id={question.question_id}
                    value="false"
                    checked={answers[question.question_id] === 'false'}
                    onChange={handleInputChange}
                  />
                  Nej
                </label>
              </div>
            ) : question.answer_type === '1-5' ? (
              <div className="radio-group space-x-2">
                {[1, 2, 3, 4, 5].map(num => (
                  <label key={num} className="radio checked:bg-blue-500">
                    <input
                      type="radio"
                      name={question.answer_type}
                      id={question.question_id}
                      value={num}
                      checked={answers[question.question_id] === num.toString()}
                      onChange={handleInputChange}
                    />
                    {num}
                  </label>
                ))}
              </div>
            ) : question.answer_type === '1-10' ? (
              <div className="radio-group space-x-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <label key={num} className="radio checked:bg-blue-500">
                    <input
                      type="radio"
                      name={question.answer_type}
                      id={question.question_id}
                      value={num}
                      checked={answers[question.question_id] === num.toString()}
                      onChange={handleInputChange}
                    />
                    {num}
                  </label>
                ))}
              </div>
            ) : question.answer_type === 'text' ? (
              <div className="form-control">
                <input
                  type="text"
                  name={question.answer_type}
                  id={question.question_id}
                  placeholder="Skriv her..."
                  onChange={handleInputChange}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            ) : (
              <p>Unknown answer type</p>
            )}
          </div>
        ))}
        <button
          className="btn btn-primary mt-2"
          type="submit"
          disabled={isFeedbackLoading}
          onClick={onSubmit}>
          {isFeedbackLoading ? <Spinner /> : 'Send svar'}
        </button>
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => document.getElementById('daily').close()}>
          X
        </button>
      </form>
    </div>
  );
}
const Spinner = () => {
  return <span className="loading loading-spinner loading-xs"></span>;
};
