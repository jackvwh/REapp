import React, { useState } from 'react';
import { useApiClient } from '../../Hooks/useApiClient.js';

export default function SurveyForm({ questionData }) {
  const {
    executePost,
    data: postResponse,
    loading: isPostLoading,
    error: postError,
  } = useApiClient.usePost();

  const [survey, setSurvey] = useState({
    surveyTitle: '',
    description: '',
  });
  // set initial state to userData prop
  const [allQuestions, setAllQuestion] = useState(questionData);
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  const handleChange = e => {
    const { name, value } = e.target;
    setSurvey({ ...survey, [name]: value });
  };

  const addQuestionToSurvey = question => {
    setSelectedQuestions([...selectedQuestions, question]);
    // remove question from questionData
    setAllQuestion(allQuestions.filter(q => q.question_id !== question.question_id));
  };

  const removeQuestionFromSurvey = question => {
    setSelectedQuestions(
      selectedQuestions.filter(q => q.question_id !== question.question_id)
    );
    // add question to allQuestions again
    setAllQuestion([...allQuestions, question]);
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await executePost('/surveys', {
        ...survey,
        questions: selectedQuestions.map(question => question.question_id),
      });
      if (postResponse) {
        window.location.reload();
        return;
      }
    } catch (error) {
      console.error(error, postError);
    }
  };

  return (
    <div className="modal-box">
      <h1 className="font-bold text-lg">Create a survey</h1>
      <form method="dialog" className="modal-backdrop">
        <label htmlFor="survey-title" className="text-black">
          Survey title
        </label>
        <input
          className="form-control text-black"
          id="surveyTitle"
          name="surveyTitle"
          placeholder="Enter survey title"
          onChange={handleChange}
          required
        />
        <label className="labelStyle text-black" htmlFor="description">
          Description
        </label>
        <textarea
          className="form-control text-black"
          id="description"
          name="description"
          placeholder="Enter description"
          rows="3"
          onChange={handleChange}
        />

        <label className="labelStyle" htmlFor="selectedselectedQuestions">
          Valgte spørgsmål
        </label>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Text</th>
                <th>Answer Type</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {selectedQuestions && selectedQuestions.length === 0 ? (
                <tr>
                  <td colSpan="3">Ingen spørgsmål valgt</td>
                </tr>
              ) : (
                selectedQuestions
                  .sort((a, b) => a.question_id - b.question_id)
                  .map(question => (
                    <SurveyQuestionRowRemove
                      key={'selectedQuestion' + question.question_id}
                      props={question}
                      removeQuestion={removeQuestionFromSurvey}
                    />
                  )) || <div>loading...</div>
              )}
            </tbody>
          </table>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isPostLoading}
          onClick={onSubmit}>
          {isPostLoading ? <Spinner /> : 'Gem spørgeskema'}
        </button>
      </form>

      <div className="question-list">
        <h3 className="text-black">Alle spørgsmål</h3>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Text</th>
              <th>Answer Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allQuestions && allQuestions.length === 0 ? (
              <tr>
                <td colSpan="3">Ingen spørgsmål fundet</td>
              </tr>
            ) : (
              allQuestions
                .sort((a, b) => a.question_id - b.question_id)
                .map(question => (
                  <SurveyQuestionRowAdd
                    key={question.question_id}
                    props={question}
                    addQuestion={addQuestionToSurvey}
                  />
                )) || <div>loading...</div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SurveyQuestionRowAdd({ props, addQuestion }) {
  if (!props) {
    console.error('Question is undefined');
    return null;
  }
  const handleAddQuestion = () => {
    addQuestion(props);
  };

  return (
    <tr className="hover">
      <th>{props.question_id}</th>
      <td>{props.question_text}</td>
      <td>{props.answer_type}</td>
      <td colSpan="4">
        <button className="btn btn-primary btn-sm " onClick={handleAddQuestion}>
          Tilføj spørgsmål
        </button>
      </td>
    </tr>
  );
}
function SurveyQuestionRowRemove({ props, removeQuestion }) {
  if (!props) {
    console.error('Question is undefined');
    return null;
  }
  const handleRemoveQuestion = () => {
    removeQuestion(props);
  };

  return (
    <tr className="hover">
      <th className="text-black">{props.question_id}</th>
      <td className="text-black">{props.question_text}</td>
      <td className="text-black">{props.answer_type}</td>
      <td colSpan="4">
        <button className="btn btn-primary btn-sm" onClick={handleRemoveQuestion}>
          Fjern spørgsmål
        </button>
      </td>
    </tr>
  );
}
const Spinner = () => {
  return <span className="loading loading-spinner loading-xs"></span>;
};
