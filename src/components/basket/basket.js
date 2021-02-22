import React from 'react';
import { connect } from 'react-redux';
import ProductInBasket from '../productInBasket.js/productInBasket';

import styles from './basket.module.css';

const Basket = ({ restaurants, order }) => {
  const orderFromClient = Object.entries(order);
  const products = restaurants.flatMap((rest) => rest.menu);

  return (
    <div className={styles.basketContainer}>
      <h1>Your order:</h1>
      <table className={styles.tableOrder}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orderFromClient.map((el) => {
            const product = products.find((prod) => prod.id === el[0]);
            return (
              <ProductInBasket
                key={product.id}
                product={product}
                quantity={el[1]}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  order: state.order,
});

export default connect(mapStateToProps)(Basket);
