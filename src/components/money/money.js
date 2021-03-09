import React, { useContext } from 'react';
import { currencyContext } from '../../contexts/currency-context';

const Money = ({ value }) => {
  const { currentCurrency } = useContext(currencyContext);

  if (currentCurrency === '€') {
    value = value * 0.84;
  } else if (currentCurrency === '₽') {
    value = value * 74;
  }

  return (
    <span>
      {value} {currentCurrency}
    </span>
  );
};

export default Money;
