import React from 'react';

import style from './index.module.css';

function DistructionBlock({ name, dang }) {
  const onAddAsteroids = () => alert('Dobavlen asteroid!');
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default DistructionBlock;
