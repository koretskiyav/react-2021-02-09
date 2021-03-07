import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { currencyContext } from '../../contexts/currency-context';
import {
  CURRENCY_EUR,
  CURRENCY_RUR,
  CURRENCY_USD,
} from '../../redux/constants';

const currencies = {
  [CURRENCY_USD]: {
    symbol: '$',
    exchange: 1,
  },
  [CURRENCY_EUR]: {
    symbol: '€',
    exchange: 0.84,
  },
  [CURRENCY_RUR]: {
    symbol: '₽',
    exchange: 74.29,
  },
};

const Price = (props) => {
  const { value } = props;
  const { currency: code } = useContext(currencyContext);

  const currency = currencies[code];
  const price = (Math.round(value * currency.exchange * 100) / 100).toFixed(2);

  return (
    <>
      {price} {currency.symbol}
    </>
  );
};

Price.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Price;
