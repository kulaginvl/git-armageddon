import React from 'react';
import Button from '../Button';

import style from './index.module.css';

function AsteroidBlock({
  name,
  close_approach_data,
  estimated_diameter,
  is_potentially_hazardous_asteroid,
  activeDistance,
}) {
  return (
    <div
      className={
        is_potentially_hazardous_asteroid ? style.asteroidblockred : style.asteroidblockgreen
      }>
      <div className={style.asteroidstats}>
        <h1>{name.replace(/[()]+/g, '')}</h1>
        <div className={style.asteroidstatstext}>
          <div>
            <p>Дата</p>
          </div>
          <div>
            <p> {close_approach_data[0].close_approach_date}</p>
          </div>
        </div>
        <div className={style.asteroidstatstext}>
          <div>
            <p>Расстояние</p>
          </div>
          <div>
            {activeDistance === 0 && (
              <p>
                {Math.floor(close_approach_data[0].miss_distance.kilometers).toLocaleString()} км
              </p>
            )}
            {activeDistance === 1 && (
              <p>{Math.floor(close_approach_data[0].miss_distance.lunar).toLocaleString()} лун</p>
            )}
          </div>
        </div>
        <div className={style.asteroidstatstext}>
          <div>
            <p>Размер</p>
          </div>
          <div>
            <p> {Math.floor(estimated_diameter.meters.estimated_diameter_max)} м</p>
          </div>
        </div>
      </div>
      <div className={style.asteroidstatus}>
        <div>
          <div>
            <p>Оценка:</p>
            <p>{is_potentially_hazardous_asteroid ? 'опасен' : 'не опасен'}</p>
          </div>
        </div>
        <div>
          <Button>На уничтожение</Button>
        </div>
      </div>
    </div>
  );
}

export default AsteroidBlock;
