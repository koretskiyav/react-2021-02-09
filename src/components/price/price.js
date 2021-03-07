import React, { useContext } from 'react';
import { currencyContext } from '../../contexts/сurrency-context';

const Price = ({ price, className }) => {
  const { currency } = useContext(currencyContext);
  return (
    <div className={className}>
      {price * currency.ratio} {currency.title}
    </div>
  );
};

export default Price;
