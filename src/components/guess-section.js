import React from 'react';

// import two Child components
// GuessForm will be a STATEFUL child to a STATELESS parent
import Feedback from './feedback';
import GuessForm from './guess-form';

// pass props from STATEFUL parent (game.js)
export default function GuessSection(props) {
  const { feedback, guessCount } = props;

// pass props to Child components
// feedback and guessCount go to Feedback component (a STATELESS child)
// onMakeGuess goes to GuessForm (a STATEFUL child)
// GuessForm will contain user input to send back to 'brain' (game.js)
    return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback feedback={feedback} guessCount={guessCount} />
      <GuessForm onMakeGuess={guess => props.onMakeGuess(guess)} />
    </section>
  );
}
