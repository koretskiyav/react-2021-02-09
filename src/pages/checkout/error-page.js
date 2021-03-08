import React from 'react';
import { connect } from 'react-redux';

import { checkoutErrorSelector } from '../../redux/selectors';

const ErrorPage = ({ error }) => (
  <div className="text-center mt15">{error}</div>
);

export default connect((state) => ({
  error: checkoutErrorSelector(state),
}))(ErrorPage);
