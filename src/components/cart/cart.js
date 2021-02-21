import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import { ReactComponent as CartIcon } from '../../icons/cart.svg';
import styles from './cart.module.css';

import { openCart, closeCart, toggleCart } from '../../redux/actions';

const Cart = ({ active, closeCart, toggleCart, order, restaurants }) => {
  console.log(order);
  console.log(restaurants);
  return (
    <div className="cart-wrapper">
      <button className={styles.button} onClick={toggleCart}>
        <CartIcon className={styles.icon} />
      </button>
      <div
        className={styles.cart}
        className={cn(styles.cart, { [styles.open]: active })}
      >
        <div className={styles.container}>
          <button className={styles.close} onClick={closeCart}>
            &#10006;
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  active: state.cartActive,
  order: state.order,
  restaurants: state.restaurants,
});

const mapDispatchToProps = {
  openCart,
  closeCart,
  toggleCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
