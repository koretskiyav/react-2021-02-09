import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../contexts/user-context';
import CurrenciesList from '../currencies-list';

import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './header.module.css';

const Header = () => {
  const { setName } = useContext(userContext);

  return (
    <header className={styles.header} onClick={() => setName('Ivan')}>
      <Link to="/restaurants">
        <Logo />
      </Link>
      <CurrenciesList />
    </header>
  );
};

export default Header;
