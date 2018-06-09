import React from 'react';

const Question = (props) => {
  const question = props.questionText;

  return (
    <div id='question'>
      <p>{question}</p>
      <button
            onClick={props.advance}
          >
            Next Question!
				</button>
    </div>
  );
}

export default Question;