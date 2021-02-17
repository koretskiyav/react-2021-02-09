import React from 'react';

import useAmount from '../hooks/use-amount';

export default (WrappedComponent) => ({ startFrom, ...props }) => {
  const amountProps = useAmount(startFrom);
  return <WrappedComponent {...props} {...amountProps} />;
};
