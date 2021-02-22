import React from 'react';

import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './header.module.css';

const Header = ({openBasket}) => (
  <header className={styles.header}>
    <div></div>
    <Logo />
    <button onClick={openBasket} className={styles.cartButton}>&#128722;</button>
  </header>
);

export default Header;
