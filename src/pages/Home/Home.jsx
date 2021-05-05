import React from 'react';
import AsteroidBlock from '../../components/AsteroidBlock';
import SortBy from '../../components/SortBy/SortBy';

import { useSelector, useDispatch } from 'react-redux';

import style from './Home.module.css';
import { setDistance, showDanger } from '../../redux/actions/filters';
import { fetchAsteroids } from '../../redux/actions/asteroids';
import { addAsteroidsToDistrict } from '../../redux/actions/distriction';

const distanceNames = ['в километрах', 'в дистанциях до луны'];

function Home() {
  const dispatch = useDispatch();

  const items = useSelector(({ asteroids }) => asteroids.items);
  const districtItems = useSelector(({ distriction }) => distriction.items);
  const { danger, distance } = useSelector(({ filters }) => filters);
  console.log(danger, distance);
  console.log(districtItems);

  const onSelectDistance = React.useCallback((index) => {
    dispatch(setDistance(index));
  }, []);

  const onSelectDang = React.useCallback(() => {
    dispatch(showDanger());
  }, []);

  const handleAddAsteroidToDistrict = (obj) => {
    dispatch(addAsteroidsToDistrict(obj));
  };

  React.useEffect(() => {
    dispatch(fetchAsteroids());
  }, [distance, danger]);

  return (
    <div className={style.home}>
      <div className={style.sort}>
        <div className={style.sortdang}>
          <input
            type="checkbox"
            onChange={() => {
              onSelectDang();
            }}
          />
          <p>Показать только опасные</p>
        </div>
        <div className={style.sortby}>
          <SortBy activeDistance={distance} onClickItem={onSelectDistance} types={distanceNames} />
        </div>
      </div>
      {items &&
        danger === true &&
        items.map(function (obj) {
          if (obj.is_potentially_hazardous_asteroid === true)
            return (
              <AsteroidBlock
                onClickAddAsteroid={handleAddAsteroidToDistrict}
                key={obj.id}
                {...obj}
                activeDistance={distance}
              />
            );
        })}
      {items &&
        danger === false &&
        items.map((obj) => (
          <AsteroidBlock
            onClickAddAsteroid={handleAddAsteroidToDistrict}
            key={obj.id}
            {...obj}
            activeDistance={distance}
          />
        ))}
    </div>
  );
}

export default Home;
