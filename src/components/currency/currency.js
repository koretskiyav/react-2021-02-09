import { useContext } from 'react';
import { currencyContext } from '../../contexts/currency-context'
import styles from './currency.module.css';
import cn from 'classnames';

const Currency = () => {
  const {currencies, activeCurrency, setActiveCurrency} = useContext(currencyContext);

  const abc = currencies.map(currency => {
    const currencyName = currency.name;
    return (
    <button
      key={currencyName}
      className={cn(styles.currency__item, { [styles.active]: currencyName === activeCurrency })}
      onClick={() => setActiveCurrency(currencyName)}
    >{currencyName}</button>
  )});

  return (
    <>
      <div className={styles.currency}>
        {abc}
      </div>
    </>
  )
};

export default Currency
