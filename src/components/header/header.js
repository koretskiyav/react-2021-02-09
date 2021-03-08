import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../contexts/user-context';

import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './header.module.css';
import Currencies from '../currencies';

const Header = () => {

  return (
    <header className={styles.header}>
      <Link to="/restaurants">
        <Logo />
      </Link>
      <Currencies/>
    </header>
  );
};

export default Header;
