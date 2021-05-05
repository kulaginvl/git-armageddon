import React from 'react';
import style from './index.module.css';

function Button({ onClick, children, h }) {
  return (
    <button onClick={onClick} className={`${h ? `${style.buttonheader}` : `${style.button}`}`}>
      {children}
    </button>
  );
}

export default Button;
