import React from 'react';

// pass props from STATELESS Parent component (StatusSection)
// this is a STATELESS child
// props.auralStatus - is from Game component's state
export default function AuralStatus(props) {
  return (
    <p
      id="status-readout"
      className="visuallyhidden"
      aria-live="assertive"
      aria-atomic="true"
    >
      {props.auralStatus}
    </p>
  );
}
