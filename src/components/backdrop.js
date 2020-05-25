import React from 'react';

const backdrop = (props) => (
  <div
    onClick={props.closeSignupForm}
    className="backdrop"
    id="backdrop"
  >
    {props.children}
  </div>
);

export default backdrop;
