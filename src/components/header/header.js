import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../contexts/user-context';
import { currencyContext } from '../../contexts/currency-context';

import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './header.module.css';

const Header = () => {
  const { name, setName } = useContext(userContext);
  const { currentCurrency, setCurrentCurrency } = useContext(currencyContext);

  return (
    <header className={styles.header} onClick={() => setName('Ivan')}>
      <div className={styles.selectCur}>
        <label htmlFor="currency">Choose a currency:</label>
        <select
          name="currency"
          id="currency"
          value={currentCurrency}
          onChange={(e) => setCurrentCurrency(e.target.value)}
        >
          <option value="$">Dollar</option>
          <option value="€">Euro</option>
          <option value="₽">Ruble</option>
        </select>
      </div>
      <Link to="/restaurants">
        <Logo />
      </Link>
      <h2>{name}</h2>
    </header>
  );
};

export default Header;
