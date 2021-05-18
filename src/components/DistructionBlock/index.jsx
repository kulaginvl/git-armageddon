import React from 'react';

import style from './index.module.css';

import Button from '../Button/index';

function DistructionBlock({ name, dang, onRemove, id, size, distance }) {
  const handleRemoveClick = () => {
    onRemove(id);
  };
  return (
    <div className={dang ? style.asteroidblockred : style.asteroidblockgreen}>
          <div className={style.distrtitle}>
              <h1>{name.replace(/[()]+/g, '')}</h1>
          </div>
          <div className={style.distrstats}>
              <div className={style.distrtext}>
            <span>Расстояние:</span> 
            <span> {Math.floor(distance).toLocaleString()} км</span>
              </div>
              <div className={style.distrtext}>
              <span>Размер:</span> 
              <span> {Math.floor(size)} м</span>
              </div>
          </div>
          <div className={style.distrbtn}> 
            <Button onClick={handleRemoveClick}> Удалить астероид </Button>
          </div>   
    </div>
  );
}

export default DistructionBlock;
