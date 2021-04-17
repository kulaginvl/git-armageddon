import React from 'react';
import AsteroidBlock from '../../components/AsteroidBlock';
import SortBy from '../../components/SortBy/SortBy';

import style from './Home.module.css';

function Home({ items }) {
  return (
    <div className={style.home}>
      <div className={style.sort}>
        <div>
          <input type="checkbox" />
          <p>Показать только опасные</p>
        </div>
        <div className={style.sortby}>
          <SortBy />
        </div>
      </div>

      {items.map((obj) => (
        <AsteroidBlock key={obj.id} {...obj} />
      ))}
    </div>
  );
}

export default Home;
