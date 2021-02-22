import React from 'react';
import styles from './productInBasket.module.css';
import { ReactComponent as Minus } from '../../icons/minus.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';

import { increment, decrement } from '../../redux/actions';
import { connect } from 'react-redux';

const ProductInBasket = ({ product, quantity, increment, decrement }) => (
  <tr>
    <td>{product.name}</td>
    <td>{quantity}</td>
    <td>{product.price}$</td>
    <td>{quantity * product.price}$</td>
    <td className={styles.buttons}>
      <button className={styles.button} onClick={decrement}>
        <Minus />
      </button>
      <button className={styles.button} onClick={increment}>
        <Plus />
      </button>
    </td>
  </tr>
);

const mapStateToProps = (state, props) => ({
  amount: state.order[props.product.id] || 0,
});

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product.id)),
  decrement: () => dispatch(decrement(props.product.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductInBasket);
