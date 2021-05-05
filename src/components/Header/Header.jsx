import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Header.module.css';

function Header() {
  return (
    <div className={style.header}>
      <div className={style.headertext}>
        <h1>ARMAGGEDON V</h1>
        <p>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</p>
      </div>
      <div className={style.headersort}>
        <NavLink exact to="/" activeClassName={style.active}>
          Астероиды
        </NavLink>
        <NavLink to="/cart" activeClassName={style.active}>
          Уничтожение
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
