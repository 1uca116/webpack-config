import React from 'react';
import styles from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import imgPng from '@/assets/imagePng.png';
import imgJpg from '@/assets/imageJpg.jpg';
import  CalendarLogo from '@/assets/calendar.svg';

export const App = () => {
  return (
    <div className={styles.test}>
        <h1>platform = {__PLATFORM__}</h1>
        <div>
            <img src={imgPng} width={250}/>
            <img src={imgJpg} width={250}/>
            <CalendarLogo width={100} height={100} className={styles.icon}/>
        </div>
      <Link to={'/about'}>About</Link>
      <br />
      <Link to={'/shop'}>Shop</Link>
      <div>MAIN PAGE </div>
      <Outlet />
    </div>
  );
};
