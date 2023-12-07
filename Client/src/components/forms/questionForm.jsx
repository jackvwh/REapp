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
      await executePost('questions', {
        ...question,
      });
      if (postResponse) {
        console.log(postResponse);
        window.location.reload();
        return;
      }
    } catch (error) {
      console.error(error);
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
            className="input input-bordered w-full max-w-xs"
            name="question"
            onClick={handleChange}
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Svar type</span>
          </div>
          <select className="select select-bordered">
            <option disabled selected>
              Pick one
            </option>
            <option value="text"> Tekst </option>
            <option value="boolean"> Ja/Nej </option>
            <option value="1-5">1-5</option>
            <option value="1-10">1-10</option>
          </select>
        </label>

        
        <button type="submit" onSubmit={onSubmit}>
          Tilføj spørgsmål
        </button>
      </form>
    </div>
  );
};

export default QuestionForm;
