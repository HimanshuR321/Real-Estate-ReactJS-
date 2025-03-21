import React from 'react';

const Button = (props) => {
  const { type = "submit", text, className } = props;
  return (
    <div>
      <button onClick={props.onClick} type={type} className={`${className}`}>
        {text}
      </button>
    </div>
  );
};

export default Button;
