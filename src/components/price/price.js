import React, { useContext } from 'react';
import { currencyContext } from '../../contexts/сurrency-context';

const Price = ({ price, className }) => {
  const { current } = useContext(currencyContext);
  return (
    <div className={className}>
      {price * current.ratio} {current.title}
    </div>
  );
};

export default Price;
