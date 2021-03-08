import React, { useState } from 'react';
import styles from './currency.module.css';
import cn from 'classnames';

const Currency = () => {
  const currencies = ['$', '₴', '₽'];
  const [activeCurrency, setActiveCurrency] = useState(currencies[0]);
  
  const abc = currencies.map(currency => (
    <button
      key={currency}
      className={cn(styles.currency__item, { [styles.active]: currency === activeCurrency })}
      onClick={() => setActiveCurrency(currency)}
    >{currency}</button>
  ));

  return (
    <>
      <div className={styles.currency}>
        {abc}
      </div>
    </>
  )
};

export default Currency
