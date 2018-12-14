import React from 'react';

// import CHILD component
// Header is a STATELESS Parent to a STATELESS Child
import TopNav from './top-nav';

import './header.css';

// pass props from STATEFUL Parent (Game component)
export default function Header(props) {

// Header passes the props from Game on down to the TopNav component
// props are two methods from the Parent component
return (
    <header>
      <TopNav
        onGenerateAuralUpdate={() => props.onGenerateAuralUpdate()}
        onRestartGame={() => props.onRestartGame()}
      />
      <h1>HOT or COLD</h1>
    </header>
  );
}
