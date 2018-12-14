import React from 'react';

import './guess-list.css';

// pass props from STATELESS Parent component (StatusSection)
// this is a STATELESS child
export default function GuessList(props) {
// map through guesses array, creating an li for each guess
  const guesses = props.guesses.map((guess, index) => (
    <li key={index}>
      {guess}
    </li>
  ));
// return an unordered list containing the guesses variable that was mapped
  return (
    <ul id="guessList" className="guessBox clearfix">
      {guesses}
    </ul>
  );
}
