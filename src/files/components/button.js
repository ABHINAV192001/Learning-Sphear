// src/components/ui/button.js
import React from 'react';
import '../css/button.css';

const Button = ({ label, onClick, type = "button" }) => {
  return (
    <button className="btn" type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
