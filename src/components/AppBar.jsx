import { NavLink, Link } from 'react-router-dom';
import { FaGun } from 'react-icons/fa6';

import clsx from 'clsx';
import style from './AppBar.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};

export const AppBar = () => {
  return (
    <header className={style.header}>
      <Link to="/" className={style.logo}>
        Evening
        <span className={style.logoIcon}>
          <FaGun />
        </span>
        movie
      </Link>
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
