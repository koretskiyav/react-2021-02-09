import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../contexts/user-context';
import { CurrencyContext } from '../../contexts/currency-context';

import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './header.module.css';

const Header = () => {
  const { name, setName } = useContext(userContext);
  const { currenciesArr, setCurrency } = useContext(CurrencyContext);

  const changeCurrency = (value) => {
    setCurrency(value);
  };

  return (
    <header className={styles.header} onClick={() => setName('Ivan')}>
      <Link to="/restaurants">
        <Logo />
      </Link>
      <h2>{name}</h2>
      <select
        className={styles.select}
        name="currency"
        id="currency"
        onChange={(e) => {
          changeCurrency(e.target.value);
        }}
      >
        {currenciesArr.map((currency) => (
          <option value={currency.key} key={currency.key}>
            {currency.key}
          </option>
        ))}
      </select>
    </header>
  );
};

export default Header;
