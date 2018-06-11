import React from 'react';

const title = 'am i wrong?'

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
      <p id='start-text'>Ever wonder if you're racist? Maybe you've said some controversial things or offended someone.  Take the quiz and find out.</p>
      <button onClick={props.advance}>
        Take the Quiz!
			</button>
    </div>
  );
}

export default Start;
