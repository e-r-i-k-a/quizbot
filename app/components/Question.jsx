import React from 'react';

const Question = (props) => {
  const question = props.questionText;

  return (
    <div id='question'>
      <p id='question-text'>{question}</p>
      <div id='question-buttons'>
        <button onClick={()=>props.increment('yes')}>Yes</button>
        <button onClick={props.increment}>No</button>
      </div>
    </div>
  );
}

export default Question;
