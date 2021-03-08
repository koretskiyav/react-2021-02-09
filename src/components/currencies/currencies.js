import React, { useContext } from 'react';
import styles from './currencies.module.css';
import { currencyContext } from '../../contexts/currency-context';

function Currencies() {

  const { currency, setCurrency } = useContext(currencyContext);
  const currencies = ['usd', 'eur', 'rub'];

  return (
    <div>
      {
        currencies.map((id) => {
            const style = currency === id ? styles.currency_active : styles.currency;
            return (<div key={id} className={style} onClick={() => setCurrency(id)}> {id} </div>);
          }
        )
      }
    </div>
  );
}

export default Currencies;
