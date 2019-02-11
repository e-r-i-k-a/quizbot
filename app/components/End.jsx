import React from 'react';
import Confetti from './Confetti';

const endText = 'congratulations!'

const spanSplit = (str) => {
  const midpoint = Math.floor((str.length - 1) / 2);

  return str.split('').map((letter, i) => (
    <span className='end-letter' key={i}
      style={{ '--delay': i <= midpoint ? i : str.length - 1 - i }}>{letter}</span>
  ))
};

const End = (props) => {

  const yes = props.yes;
  const no = props.total - yes;

  let paragraph = (yes > no) ?
    <div id='end-text'>
      <p id='end-heading'>You're definitely a camel!</p>
      <p>Don't let anyone tell you that you're anything less.</p>
      <p id='emoji'>&#x1F42B;&#x1F42B;</p>
    </div>
    :
    <div id='end-text'>
      <p id='end-heading'><bold>You're probably a camel!</bold></p>
      <p>There's no way to be completely sure.  Even if you're not a camel, don't let others define what you know yourself to be.</p>
      <p id='emoji'>&#x1F42B;&#x1F42B;&#x1F42B;</p>
    </div>

  return (
    <div id='end'>
      <Confetti />
      <div id='end-title'>
        <span className='end-letters'>{spanSplit(endText)}</span>
        {paragraph}
      </div>
    </div>
  )
}

export default End;
