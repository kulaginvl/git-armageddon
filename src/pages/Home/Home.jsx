import React from 'react';
import AsteroidBlock from '../../components/AsteroidBlock';
import SortBy from '../../components/SortBy/SortBy';

import { useSelector } from 'react-redux';

import style from './Home.module.css';

function Home() {
  const { items } = useSelector(({ asteroids }) => {
    return {
      items: asteroids.items,
    };
  });
  return (
    <div className={style.home}>
      <div className={style.sort}>
        <div className={style.sortdang}>
          <input type="checkbox" />
          <p>Показать только опасные</p>
        </div>
        <div className={style.sortby}>
          <SortBy
          // items={[
          //   { name: 'в километрах', type: 'km' },
          //   { name: 'в дистанциях до луны', type: 'luna' },
          // ]}
          />
        </div>
      </div>

      {items && items.map((obj) => <AsteroidBlock key={obj.id} {...obj} />)}
    </div>
  );
}

export default Home;
