import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ReactComponent as Minus } from '../../icons/minus.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';
import { ReactComponent as Clear } from '../../icons/clear.svg';
import { increment, decrement, clear } from '../../redux/actions';

import styles from './orderPosition.module.css';

const OrderPosition = ({ product, count = 0, increment, decrement, clear }) => {
  const totalCost = product.price * count;

  return (
    <div className={styles['order-position']}>
      <span className={styles['order-position__title']}>{product.name}</span>
      (price: <span className={styles['price']}>{product.price}$</span>)
      <span className={styles['price']}>x{count}</span>. Total Cost:{' '}
      <span className={styles['price']}>{totalCost}$</span>
      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={decrement}
          data-id="order-position-decrement"
        >
          <Minus />
        </button>
        <button
          className={styles.button}
          onClick={increment}
          data-id="order-position-increment"
        >
          <Plus />
        </button>
        <button
          className={styles.button}
          onClick={clear}
          data-id="order-position-clear"
        >
          <Clear />
        </button>
      </div>
    </div>
  );
};

OrderPosition.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number,
    name: PropTypes.string,
  }),
  count: PropTypes.number,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product.id)),
  decrement: () => dispatch(decrement(props.product.id)),
  clear: () => dispatch(clear(props.product.id)),
});

export default connect(null, mapDispatchToProps)(OrderPosition);
