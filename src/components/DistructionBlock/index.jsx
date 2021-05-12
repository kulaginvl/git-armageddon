import React from 'react';

import style from './index.module.css';

import Button from '../Button/index';

function DistructionBlock({ name, dang, onRemove, id }) {
  const onAddAsteroids = () => alert('Dobavlen asteroid!');
  const handleRemoveClick = () => {
    onRemove(id);
  };
  return (
    <div className={dang ? style.asteroidblockred : style.asteroidblockgreen}>
      <div className={style.asteroidstats}>
        <h1>{name.replace(/[()]+/g, '')}</h1>
        <div className={style.asteroidstatstext}>
          <div>
            <p>Дата</p>
          </div>
          <div>
            <p> Date</p>
            <Button onClick={handleRemoveClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DistructionBlock;
