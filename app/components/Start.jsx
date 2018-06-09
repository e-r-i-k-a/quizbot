import React from 'react';

const Start = (props) => {

  return (
    <div id='start'>
      <p>Landing Homepage</p>
      <button
            onClick={props.advance}
          >
            Take the Quiz!
				</button>
    </div>
  );
}

export default Start;
