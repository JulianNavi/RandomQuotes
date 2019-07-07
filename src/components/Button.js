import React from 'react';

const Button = ({ buttonDisplayName, clickHandler }) => (
  // eslint-disable-next-line no-unused-expressions
  <button onClick={clickHandler}>{buttonDisplayName}</button>
);

export default Button;
