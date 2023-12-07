import React, { useState } from 'react';
import { useApiClient } from '../../Hooks/useApiClient';

export default function DailySurveyNotification({ surveyId, feedbackId }) {
  // survey state
  const {
    data: survey,
    loading: isSurveyLoading,
    error: surveyError,
  } = useApiClient.useGet(`surveys/${surveyId}`);
  // feedback state
  const {
    executePut,
    data: feedbackResponse,
    loading: isFeedbackLoading,
    error: feedbackError,
  } = useApiClient.usePut();
  // initialize states for feedback
  const [answers, setAnswers] = useState([]);

  const handleInputChange = e => {
    console.log(e.target)
    let value;
    if ( e.target.name === '1-10') {
      value = e.target.value
    }


    const answer = {
      questionId: e.target.name,
      answerText: e.target.value || null,
      answerValue: e.target.value || null,
      answerBool: e.target.value || null,
    };
    // setAnswers({ ...answers, answer });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(answers);
    try {
      await executePut(`feedback/${feedbackId}/answers`, { feedbackId, answers });
      if (feedbackResponse) {
        console.log(feedbackResponse);
        window.location.reload();
        return;
      }
    } catch (error) {
      console.error(error);
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
      <h2>{survey.title}</h2>
      <p>{survey.description}</p>
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
                <label className="radio checked:bg-blue-500 text-black">
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
                <label className="radio checked:bg-blue-500 text-black">
                  <input
                    type="radio"
                    name={question.answer_type}
                    value="false"
                    checked={answers[question.question_id] === 'false'}
                    onChange={handleInputChange}
                  />
                  Nej
                </label>
              </div>
            ) : question.answer_type === 'text' ? (
              // Text type input
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs text-black"
                id={question.question_id}
                name={question.answer_type}
                onChange={handleInputChange}
                value={answers[question.question_id]}
              />
            ) : question.answer_type === '1-5' ? (
              <div className="radio-group">
                {[1, 2, 3, 4, 5].map(num => (
                  <label key={num} className="radio checked:bg-blue-500 text-black">
                    <input
                      type="radio"
                      name={question.answer_type}
                      value={num}
                      checked={answers[question.question_id] === num.toString()}
                      onChange={handleInputChange}
                    />
                    {num}
                  </label>
                ))}
              </div>
            ) : question.answer_type === '1-10' ? (
              <div className="radio-group">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <label key={num} className="radio checked:bg-blue-500 text-black">
                    <input
                      type="radio"
                      name={question.answer_type}
                      value={num}
                      checked={answers[question.question_id] === num.toString()}
                      onChange={handleInputChange}
                    />
                    {num}
                  </label>
                ))}
              </div>
            ) : (
              // Unknown type
              <p>Unknown answer type: {question.answer_type}</p>
            )}
          </div>
        ))}
        <button onSubmit={handleSubmit} className="btn btn-primary" type="submit">
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
