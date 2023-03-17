import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import style from './Layout.module.css';
import { Suspense } from 'react';

function Layout() {
  return (
    <div>
      <header>
        <ul className={style.navLinkUl}>
          <li className={style.navLinkItem}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={style.navLinkItem}>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default Layout;
