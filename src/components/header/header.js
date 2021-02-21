import React from 'react';

import Cart from '../cart';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Logo />
    <Cart />
  </header>
);

export default Header;
