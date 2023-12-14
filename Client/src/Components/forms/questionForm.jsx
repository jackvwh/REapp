import React, { useState } from 'react';
import { useApiClient } from '../../Hooks/useApiClient';

const QuestionForm = () => {
  const {
    executePost,
    data: postResponse,
    loading: isPostLoading,
    error: postError,
  } = useApiClient.usePost();

  const [question, setQuestion] = useState({
    question: '',
    answerType: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setQuestion({ ...question, [name]: value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await executePost('/questions', question);
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
      <form method="dialog" className="modal-backdrop">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Skriv et spørgsmål</span>
          </div>
          <input
            type="text"
            placeholder="Skriv her"
            className="input input-bordered w-full max-w-xs text-black"
            name="question"
            onChange={handleChange}
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Svar type</span>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="answerType"
                value="text"
                onChange={handleChange}
              />
              <span className="label-text">Tekst</span>
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="answerType"
                value="boolean"
                onChange={handleChange}
              />
              <span className="label-text">Ja/Nej</span>
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="answerType"
                value="1-5"
                onChange={handleChange}
              />
              <span className="label-text">1-5</span>
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="answerType"
                value="1-10"
                onChange={handleChange}
              />
              <span className="label-text">1-10</span>
            </label>
          </div>
        </label>

        <button type="submit" onClick={onSubmit} className="btn btn-primary">
          {isPostLoading ? <Spinner /> : 'Tilføj spørgsmål'}
        </button>
      </form>
    </div>
  );
};
const Spinner = () => {
  return <span className="loading loading-spinner loading-xs"></span>;
};

export default QuestionForm;
