import React, { useContext } from 'react';
import cn from 'classnames';

import { currencyContext } from '../../contexts/currency-context';
import {
  CURRENCY_USD,
  CURRENCY_EUR,
  CURRENCY_RUR,
} from '../../redux/constants';

import styles from './currencies-list.module.css';

const currencies = [CURRENCY_USD, CURRENCY_EUR, CURRENCY_RUR];

const CurrenciesList = () => {
  const { currency: activeCurrency, setCurrency } = useContext(currencyContext);

  return (
    <div className={styles['currency-list']}>
      {currencies.map((currency) => (
        <span
          key={currency}
          className={cn(styles.currency, {
            [styles.currency_active]: currency === activeCurrency,
          })}
          onClick={() => setCurrency(currency)}
        >
          {currency}
        </span>
      ))}
    </div>
  );
};

export default CurrenciesList;
