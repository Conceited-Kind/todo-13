import React from 'react';

const Button = ({ greeting = 'Hello' }) => {
  return <button className="button">{greeting}</button>;
};

export default Button;