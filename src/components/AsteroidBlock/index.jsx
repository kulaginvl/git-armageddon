import React from 'react';

import style from './index.module.css';

function AsteroidBlock({
  name,
  close_approach_data,
  estimated_diameter,
  is_potentially_hazardous_asteroid,
}) {
  return (
    <div
      className={
        is_potentially_hazardous_asteroid ? style.asteroidblockred : style.asteroidblockgreen
      }>
      <div className={style.asteroidstats}>
        <h1>{name.replace(/[()]+/g, '')}</h1>
        <div>
          <p>Дата {close_approach_data[0].close_approach_date_full}</p>
        </div>
        <p>
          Расстояние {Math.floor(close_approach_data[0].miss_distance.kilometers).toLocaleString()}
          км
        </p>
        <p>Размер {Math.floor(estimated_diameter.meters.estimated_diameter_max)} м</p>
      </div>
      <div className={style.asteroidstatus}>
        <div>
          <div>
            <p>Оценка:</p>
            <p>{is_potentially_hazardous_asteroid ? 'Опасен' : 'Не опасен'}</p>
          </div>
        </div>
        <div>
          <button>На уничтожение</button>
        </div>
      </div>
    </div>
  );
}

export default AsteroidBlock;
