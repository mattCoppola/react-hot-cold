import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

// import Game component - this is the brain of the app
import Game from './components/game';

// render Game component to the root ID of index.html
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
