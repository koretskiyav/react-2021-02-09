import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../contexts/user-context';

import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './header.module.css';

const Header = ({ currency }) => {
  const { name, setName } = useContext(userContext);

  return (
    <header className={styles.header} onClick={() => setName('Ivan')}>
      <Link to="/restaurants">
        <Logo />
      </Link>
      <h2>{name}</h2>
      {currency}
    </header>
  );
};

export default Header;
