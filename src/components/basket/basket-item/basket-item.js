import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { increment, decrement, remove } from '../../../redux/actions';
import Button from '../../button';
import styles from './basket-item.module.css';

import { productRestaurantIDSelector } from '../../../redux/selectors';

function BasketItem({
  product,
  amount,
  subtotal,
  increment,
  decrement,
  remove,
  restaurantID,
}) {
  return (
    <div className={styles.basketItem}>
      <div className={styles.name}>
        <Link to={`/restaurants/${restaurantID}`}>
          <span>{product.name}</span>
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.counter}>
          <Button onClick={decrement} icon="minus" secondary small />
          <span className={styles.count}>{amount}</span>
          <Button onClick={increment} icon="plus" secondary small />
        </div>
        <p className={cn(styles.count, styles.price)}>{subtotal} $</p>
        <Button onClick={remove} icon="delete" secondary small />
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  restaurantID: productRestaurantIDSelector,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch(increment(ownProps.product.id)),
  decrement: () => dispatch(decrement(ownProps.product.id)),
  remove: () => dispatch(remove(ownProps.product.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketItem);
