import { useContext } from 'react';
import { currencyContext } from '../../contexts/currency-context'
import styles from './currency.module.css';
import cn from 'classnames';

const Currency = () => {
  const {currencies, activeCurrency, setActiveCurrency} = useContext(currencyContext);

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
