import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

export const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <h1>Easy Buy</h1>
      <ul className={styles.list}>
        <li>
          <Link to="..">Dashboard</Link>
        </li>
        <li>
          <Link to="../products">Products</Link>
        </li>
      </ul>
    </nav>
  );
};
