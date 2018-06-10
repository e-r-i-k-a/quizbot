import React from 'react';

const title = 'landing page'

function spanSplit(str) {
	return str.split('').map((letter, i) => (
		letter === ' ' ?
      <span className ='start-letter' key={i}>&nbsp;</span>
      : <span className ='start-letter' key={i} style={{'--delay':i}}>{letter}</span>
	));
}

const Start = (props) => {
  return (
    <div id='start'>
      <span className='start-title'>{spanSplit(title)}</span>
      <p>lorem ipsum</p>
      <button onClick={props.advance}>
        Take the Quiz!
			</button>
    </div>
  );
}

export default Start;
