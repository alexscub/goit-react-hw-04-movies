import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <ul className={styles.navList}>
      <li>
        <NavLink
          exact
          to="/"
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
