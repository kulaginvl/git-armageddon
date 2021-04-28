import React from 'react';
import style from './SortBy.module.css';

const SortBy = React.memo(function SortBy({ activeDistance, types, onClickItem }) {
  return (
    <div className={style.sort}>
      <p>Расстояние</p>
      {types &&
        types.map((type, index) => (
          <p
            key={type}
            onClick={() => onClickItem(index)}
            className={activeDistance === index ? `${style.active}` : `${style.disabled}`}>
            {type}
          </p>
        ))}
    </div>
  );
});

export default SortBy;
