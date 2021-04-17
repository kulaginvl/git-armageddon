import React from 'react';
import SortBy from '../SortBy/SortBy';

import style from './Header.module.css';

function Header() {
  return (
    <div className={style.header}>
      <div className={style.header_text}>
        <h1>ARMAGGEDON V</h1>
        <p>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</p>
      </div>
      <div className={style.header_sort}>
        <SortBy />
      </div>
    </div>
  );
}

export default Header;
