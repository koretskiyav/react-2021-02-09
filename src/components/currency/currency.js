import React, { useContext, useMemo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CurrencyContext } from '../../contexts/currency-context';
import { orderProductsSelector } from '../../redux/selectors';

const Currency = ({ value, order }) => {
  const { currencies, currency } = useContext(CurrencyContext);

  const calculatedValue = useMemo(() => {
    return (value * currencies[currency].coeff).toFixed(2);
  }, [currency, order]);

  return (
    <span>
      {calculatedValue} {currencies[currency].symbol}
    </span>
  );
};

const mapStateToProps = createStructuredSelector({
  order: orderProductsSelector,
});

export default connect(mapStateToProps)(Currency);
