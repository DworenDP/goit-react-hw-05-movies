import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { Loader } from 'pages/Loader';

export const SharedLayout = () => (
  <div>
    <header className={css.header}>
      <nav className={css.navbar}>
        <NavLink to="/" className={css.navLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.navLink}>
          Movies
        </NavLink>
      </nav>
    </header>
    <div className={css.container}>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  </div>
);
