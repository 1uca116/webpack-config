import React from 'react';
import styles from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div className={styles.test}>
      <Link to={'/about'}>About</Link>
      <br />
      <Link to={'/shop'}>Shop</Link>
      <div>MAIN PAGE </div>
      <Outlet />
    </div>
  );
};
