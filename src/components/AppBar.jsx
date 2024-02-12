import { Suspense } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import { FaGun } from 'react-icons/fa6';
import { Bars } from 'react-loader-spinner';

import clsx from 'clsx';
import style from './AppBar.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};

export const AppBar = () => {
  return (
    <>
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
      <Suspense
        fallback={
          <Bars
            height="80"
            width="80"
            color="#747bff"
            ariaLabel="bars-loading"
            wrapperClass="loader"
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
