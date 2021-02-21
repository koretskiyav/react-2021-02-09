import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { increment, decrement, remove } from '../../../redux/actions';

import styles from './cart-item.module.css';

const CartItem = ({ data, increment, decrement, remove }) => {
  const { product, amount, subtotal } = data;
  return (
    <li className={styles.item}>
      <h5 className={styles.title}>
        <button className={styles.btn} onClick={decrement}>
          -
        </button>
        {product.name}
        <button className={styles.btn} onClick={increment}>
          +
        </button>
      </h5>
      <div className={styles.info}>
        <span>x{amount}</span>
        <button className={styles.btn} onClick={remove}>
          &#10006;
        </button>
        <span>{subtotal} $</span>
      </div>
    </li>
  );
};

CartItem.propTypes = {
  data: PropTypes.shape({
    product: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string.isRequired,
    }),
    amount: PropTypes.number,
    subtotal: PropTypes.number,
  }).isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.data.product.id)),
  decrement: () => dispatch(decrement(props.data.product.id)),
  remove: () => dispatch(remove(props.data.product.id)),
});

export default connect(null, mapDispatchToProps)(CartItem);
