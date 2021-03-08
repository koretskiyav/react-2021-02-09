import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { currencySelector, currencySignSelector } from '../../redux/selectors';
import { currencyContext } from '../../contexts/currency-context';

const Cost = ({amount, currencies, currencySign}) => {
  const { currency } = useContext(currencyContext);
  const factor = currencies[currency];
  const sign = currencySign[currency];
  return (
    <>
      {amount * factor} {sign}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currencies: currencySelector,
  currencySign: currencySignSelector
});

export default connect(mapStateToProps)(Cost);
