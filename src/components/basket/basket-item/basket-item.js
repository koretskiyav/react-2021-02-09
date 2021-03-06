import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { increment, decrement, remove } from '../../../redux/actions';
import Button from '../../button';
import styles from './basket-item.module.css';

function BasketItem({
  product,
  amount,
  subtotal,
  restaurantId,
  increment,
  decrement,
  remove,
  disabled,
}) {
  return (
    <div className={styles.basketItem}>
      <div className={styles.name}>
        <Link to={`/restaurants/${restaurantId}/menu`}>
          <span>{product.name}</span>
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.counter}>
          <Button
            onClick={decrement}
            icon="minus"
            secondary
            small
            disabled={disabled}
          />
          <span className={styles.count}>{amount}</span>
          <Button
            onClick={increment}
            icon="plus"
            secondary
            small
            disabled={disabled}
          />
        </div>
        <p className={cn(styles.count, styles.price)}>{subtotal} $</p>
        <Button
          onClick={remove}
          icon="delete"
          secondary
          small
          disabled={disabled}
        />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    disabled,
    product: { id },
  } = ownProps;

  return {
    increment: () => !disabled && dispatch(increment(id)),
    decrement: () => !disabled && dispatch(decrement(id)),
    remove: () => !disabled && dispatch(remove(id)),
  };
};

export default connect(null, mapDispatchToProps)(BasketItem);
