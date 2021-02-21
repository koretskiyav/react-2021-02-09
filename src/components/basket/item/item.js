import React from 'react';
import PropTypes from 'prop-types';
import withStore from '../../../hocs/withStore';

const Item = ({ product, amount, decrement, increment, clear }) => {
  const { name, price } = product;

  return (
    <tr>
      <td>{name} ({price}$)</td>
      <td>{amount}</td>
      <td>{price * amount}$</td>
      <td>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={clear}>X</button>
      </td>
    </tr>
  );
};

Item.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number.isRequired,
  }).isRequired,
  // from HOC
  amount: PropTypes.number.isRequired,
  decrement: PropTypes.func,
  increment: PropTypes.func,
  clear: PropTypes.func,
};

export default withStore(Item);
