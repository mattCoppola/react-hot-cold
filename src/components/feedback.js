import React from 'react';

import './feedback.css';

// pass props from STATELESS parent
// this is a STATELESS child
// passing feedback and guessCount props
export default function Feedback(props) {
  /**
   * Below, we'll use the guessCount to generate a key so that React treats the feedback message
   * as a DOM change, even when a guess does not change the feedback text.
   * This is necessary for consistent aural feedback via aria-live.
  */
  const key = props.guessCount;

  let guessAgain;
  if (key !== 0) {
    guessAgain = <span className="visuallyhidden">Guess again!</span>;
  }

// display feedback to the user
return (
    <h2
      key={key}
      id="feedback"
      role="status"
      aria-live="assertive"
      aria-atomic="true"
    >
      {props.feedback} {guessAgain}
    </h2>
  );
}
