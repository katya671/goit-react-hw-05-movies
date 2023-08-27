import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

const StyledLink = styled(NavLink)`
  &.active {
    color: var(--accent);
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 0px;
      top: 48px;
      width: 100%;
      border-radius: 2px;
      bottom: 0;
      height: 4px;
      background-color: var(--accent);
    }
  }
`;

export const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.navigation}>
          <StyledLink to="/" className={css.link}>
            Home
          </StyledLink>
          <StyledLink to="/movies" className={css.link}>
            Movies
          </StyledLink>
        </nav>
      </header>
      <div className={css.container}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
