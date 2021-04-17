import React from 'react';
import style from './SortBy.module.css';

function SortBy() {
  const types = ['в километрах', 'в дистанциях до луны'];
  const [active, setActive] = React.useState(0);

  const onSelectType = (index) => {
    setActive(index);
  };

  return (
    <div className={style.sort}>
      <p>Расстояние</p>
      {types.map((type, index) => (
        <p
          key={type}
          onClick={() => onSelectType(index)}
          className={active === index ? `${style.active}` : `${style.disabled}`}>
          {type}
        </p>
      ))}
    </div>
  );
}

export default SortBy;
