import React from 'react';
import PropTypes from 'prop-types';
import { decrement, increment, clear } from '../../../redux/actions';
import { connect } from 'react-redux';

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
  // from connect
  amount: PropTypes.number,
  decrement: PropTypes.func,
  increment: PropTypes.func,
  clear: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  amount: state.order[props.product.id] || 0,
});

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product.id)),
  decrement: () => dispatch(decrement(props.product.id)),
  clear: () => dispatch(clear(props.product.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
