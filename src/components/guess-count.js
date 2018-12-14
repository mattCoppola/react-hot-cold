import React from 'react';

import './guess-count.css';

// pass props from STATELESS Parent component (StatusSection)
// this is a STATELESS child
// passing the guessCount variable that was created in the Parent
export default function GuessCount(props) {
    // set isPlural to true if guessCount is not equal to one
    const isPlural = props.guessCount !== 1;
    // set guessNoun to plural or singular depending on isPlural (T || F)
    const guessNoun = isPlural ? 'guesses' : 'guess';

    return (
        <h2 id="guessCount">
            You've made <span id="count">{props.guessCount}</span> {guessNoun}!
        </h2>
    );
}
