import React from 'react';

const Question = (props) => {
  const question = props.questionText;

  return (
    <div id='question'>
      <p>{question}</p>
      <div id='question-buttons'>
        <button onClick={props.advance}>Yes</button>
        <button onClick={props.advance}>No</button>
      </div>
    </div>
  );
}

export default Question;
