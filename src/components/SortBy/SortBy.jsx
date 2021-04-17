import React from 'react';
import style from './SortBy.module.css';

function SortBy() {
  return (
    <>
      <p>Расстояние</p>
      <div className={`${style.sort1} ${style.active}`}>
        <p>в километрах,</p>
      </div>
      <div className={`${style.sort2}`}>
        <p>в дистанциях до луны</p>
      </div>
    </>
  );
}

export default SortBy;
