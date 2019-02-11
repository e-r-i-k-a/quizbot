import React from 'react';

const title1 = 'am i'
const title2 = 'a camel?'
const spanSplit= (str) => {
	return str.split('').map((letter, i) => (
		letter === ' ' ?
      <span className ='start-letter' key={i}>&nbsp;</span>
      : <span className ='start-letter' key={i} style={{'--delay': str===title1 ? i : title1.length + i}}>{letter}</span>
	));
};

const Start = (props) => {
  return (
    <div id='start'>
      <span id='start-title'>
        <span>{spanSplit(title1)}</span>
        <br/>
        <span>{spanSplit(title2)}</span>
      </span>
      <p id='start-text'>Ever wonder if you're a camel? Maybe you have long legs and a big-lipped snout, but you're not sure.  Take the quiz and find out.</p>
      <button onClick={props.increment}>
        Take the Quiz!
			</button>
    </div>
  );
}

export default Start;
