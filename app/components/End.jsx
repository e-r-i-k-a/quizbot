import React from 'react';

const endText = 'congratulations!'

function spanSplit(str) {
  const midpoint = Math.floor((str.length-1)/2)
  return str.split('').map((letter, i) => (
    <span className='end-letter' key={i} style={{'--delay':i <= midpoint ? i : str.length-1 - i}}>{letter}</span>
  ))
}

const End = (props) => {
  return (
    <div id='end'>
      <span className='end-text'>{spanSplit(endText)}</span>
      <p>lorem ipsum</p>
    </div>
  );
}

export default End;
