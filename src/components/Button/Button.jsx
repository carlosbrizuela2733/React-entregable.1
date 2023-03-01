import React from "react";

import "./Button.css";

const Button = ({ handleClick }) => {
  return (
    <button onClick={handleClick}>
      <span>Nueva Frase</span>
      <span>➡</span>
    </button>
  );
};

export default Button;