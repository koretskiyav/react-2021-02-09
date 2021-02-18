import React from 'react';

import useAmount from '../hooks/use-amount';

export default (WrappedComponent) => (props) => {
  const { defaultAmount = 0 } = props;
  const amountProps = useAmount(defaultAmount);
  return <WrappedComponent {...props} {...amountProps} />;
};
