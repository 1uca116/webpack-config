import React, { useState } from 'react';
import styles from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import imgPng from '@/assets/imagePng.png';
import imgJpg from '@/assets/imageJpg.jpg';

function todo() {
  todo2();
}
function todo2() {
  throw new Error();
}

export const App = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => todo();
  return (
    <div className={styles.test} data-testid={'App.DataTestId'}>
      <div data-testid={'Images.DataTestId'}>
        <img src={imgPng} width={250} />
        <img src={imgJpg} width={250} />
      </div>
      {count}
      <button onClick={increment}>+</button>
      <Link to={'/about'}>About</Link>
      <br />
      <Link to={'/shop'}>Shop</Link>
      <div>MAIN PAGE </div>
      <Outlet />
    </div>
  );
};
