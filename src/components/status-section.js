import React from 'react';

// import components - these components are STATELESS children to the STATELESS parent
import GuessList from './guess-list';
import GuessCount from './guess-count';
import AuralStatus from './aural-status';

// pass props from STATEFUL Parent component (game.js)
export default function StatusSection(props) {
  const { guesses, auralStatus } = props;
  const guessCount = guesses.length;

// StatusSection passes props to it's STATELESS children
  return (
    <section aria-labelledby="guessCount" aria-describedby="guessList">
      <GuessCount guessCount={guessCount} />
      <GuessList guesses={guesses} />
      <AuralStatus auralStatus={auralStatus} />
    </section>
  );
}
