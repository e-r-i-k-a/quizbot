import React from 'react';
const title = 'landing page'

const Start = (props) => {
  return (
    <div id='start'>
      <div id='start-title'>
        {title.split('').map((letter, i) => {
          return (
            letter === ' ' ?
            <span className='start-letter'
            key={i}>&nbsp;</span>
            : <span
            className='start-letter'
            key={i} style={{'--delay':i}}>{letter}</span>
          )
        })}
      </div>

      <button
        onClick={props.advance}
      >
        Take the Quiz!
				</button>
    </div>
  );
}

export default Start;
