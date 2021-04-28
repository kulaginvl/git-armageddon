import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

import style from './Header.module.css';

function Header() {
  return (
    <div className={style.header}>
      <div className={style.headertext}>
        <h1>ARMAGGEDON V</h1>
        <p>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</p>
      </div>
      <div className={style.headersort}>
        <Link to="/">
          <Button header>Астероиды</Button>
        </Link>
        <Link to="/cart">
          <Button header>Уничтожение</Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
