import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cn from 'classnames';
import CartItem from './cart-item';

import { ReactComponent as CartIcon } from '../../icons/cart.svg';
import styles from './cart.module.css';

import { openCart, closeCart, toggleCart } from '../../redux/actions';

const Cart = ({ active, closeCart, toggleCart, order, restaurants }) => {
  const currentCart = useMemo(() => {
    const allProducts = restaurants.reduce(
      (prev, current) => [...prev, ...current.menu],
      []
    );
    const existsList = Object.keys(order).filter((id) => order[id] > 0);
    const orderList = existsList.map((id) =>
      allProducts.find((product) => product.id === id)
    );
    const currentCartItems = orderList.map((item) => ({
      product: item,
      amount: order[item.id],
      subtotal: order[item.id] * item.price,
    }));
    const total = currentCartItems.reduce(
      (prev, next) => prev + next.subtotal,
      0
    );
    const counter = currentCartItems.reduce(
      (prev, next) => prev + next.amount,
      0
    );
    return {
      items: currentCartItems,
      total,
      counter,
    };
  }, [restaurants, order]);
  return (
    <div className="cart-wrapper">
      <button className={styles.button} onClick={toggleCart}>
        <CartIcon className={styles.icon} />
        <span className={styles.counter}>{currentCart.counter}</span>
      </button>
      <div
        className={styles.cart}
        className={cn(styles.cart, { [styles.open]: active })}
      >
        <div className={styles.container}>
          <ul className={styles.list}>
            {currentCart.items.map((item) => (
              <CartItem key={item.product.id} data={item} />
            ))}
          </ul>
          <div className={styles.total}>
            <strong>Total:</strong> <strong>{currentCart.total} $</strong>
          </div>
          <button className={styles.close} onClick={closeCart}>
            &#10006;
          </button>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  active: PropTypes.bool.isRequired,
  closeCart: PropTypes.func.isRequired,
  toggleCart: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired,
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
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
