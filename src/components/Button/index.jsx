import React from 'react';
import style from './index.module.css';

function Button(props) {
  return (
    <button
      onClick={null}
      className={`${props.header ? `${style.buttonheader}` : `${style.button}`}`}>
      {props.children}
    </button>
  );
}

export default Button;
