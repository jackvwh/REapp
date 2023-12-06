import React, { useState } from 'react';

const SurveyQuestionForm = ({ onAddQuestion }) => {
  const [question, setQuestion] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onAddQuestion(question);
    setQuestion('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={question}
        onChange={e => setQuestion(e.target.value)}
        placeholder="Tilføj spørgsmål"
        required
      />

      <select name="answerType" id="answerType">
        <option value="text">Text</option>
        <option value="boolean">Date</option>
        <option value="1-10">1-5</option>
        <option value="1-5">1-10</option>
      </select>
      <button type="submit">Tilføj spørgsmål</button>
    </form>
  );
};

export default SurveyQuestionForm;
