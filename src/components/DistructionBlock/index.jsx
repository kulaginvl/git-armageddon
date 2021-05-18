import React from 'react';

import style from './index.module.css';

import Button from '../Button/index';

function DistructionBlock({ name, dang, onRemove, id }) {
  const handleRemoveClick = () => {
    onRemove(id);
  };
  return (
    <div className={dang ? style.asteroidblockred : style.asteroidblockgreen}>
      
        {/* <h1>{name.replace(/[()]+/g, '')}</h1>
        <div className={style.asteroidstatstext}>
          <div>
            <p>Дата</p>
          </div>
          
        </div>
        <div>
            <Button onClick={handleRemoveClick}> Удалить астероид </Button>
          </div> */}
          <div>
              <h1>{name.replace(/[()]+/g, '')}</h1>
          </div>
          <div>
            <span>Расстояние</span>
            <span>Размер</span>
         
          </div>

     
    </div>
  );
}

export default DistructionBlock;
