import React, { FC } from 'react';

import logo from './logo.png';

import style from './style.scss';

const Header: FC = () => (
  <div className={style.header}>
    <h2>My blog</h2>
    <img src={logo} alt="logopic" />
  </div>
);

export default Header;
