import React from 'react';

import './Button.scss';

const Button = (props) => {
  const { className, children, onClick, disabled, type, outline, ...rest } =
    props;

  return (
    <button
      className={`${outline ? 'button-outline' : 'button'} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
