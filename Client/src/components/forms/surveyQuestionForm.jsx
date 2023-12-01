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
        placeholder="Enter your question"
        required
      />
      <button type="submit">Add Question</button>
    </form>
  );
};

export default SurveyQuestionForm;
