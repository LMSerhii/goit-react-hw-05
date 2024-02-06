import { NavLink } from 'react-router-dom';

import clsx from 'clsx';
import style from './AppBar.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};

export const AppBar = () => {
  return (
    <header className={style.header}>
      <p className={style.logo}>Logo</p>
      <nav className={style.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
