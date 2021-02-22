import React, { useMemo } from 'react';

import styles from './basket.module.css';
import { connect } from 'react-redux';
import BasketProduct from './backetProduct/basketProduct';
import { getProductById } from '../../utils/ProductFinder';
import cn from 'classnames';
import PropTypes from 'prop-types';

const calcTotalPrice = (orderProducts) => {
  const prices = orderProducts.map((product) => product.price * product.amount);
  return prices.length ? prices.reduce((sum, price) => sum + price) : 0;
}

const Basket = ({closeBasket, opened, order}) => {

  const orderProducts = useMemo(() => Object.keys(order).map((id) => {
      const product = getProductById(id);
      return {...product, amount: order[id]};
    })
  , [order])

  const orderList = orderProducts.map((product) => (
      <BasketProduct key={product.id} {...product}/>
  ));

  const totalPrice = useMemo(() => calcTotalPrice(orderProducts), [orderProducts]);

  return (
    <div className={cn(styles.basket, {[styles.opened]: opened})}>
      <div className={styles.header}>
        <h3 className={styles.headerName}>Basket</h3>
        <button className={styles.closeButton} onClick={closeBasket}>&times;</button>
      </div>
      {orderProducts.length ? <hr className={styles.hr}/> : null}
      <div>
        {orderList}
      </div>
      {orderProducts.length ? <hr className={styles.hr}/> : null}
      <div className={styles.total}>
        <h4 className={styles.totalHeader}>Total</h4>
        <strong className={styles.totalValue}>{totalPrice}$</strong>
      </div>
    </div>
  )
} 

Basket.propTypes = {
  closeBasket: PropTypes.func,
  opened: PropTypes.bool,
  order: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  order: state.order,
})

export default connect(mapStateToProps)(Basket);
