import React from "react";

const Button = ({ text, style, onClick }) => {
  return (
    <button className={`px-4 py-2 ${style}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
