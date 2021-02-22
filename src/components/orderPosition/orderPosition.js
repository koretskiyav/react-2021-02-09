import React from 'react';
import styles from './orderPosition.module.css';

const OrderPosition = ({ product, count = 0 }) => {
  const totalCost = product.price * count;

  return (
    <div className={styles['order-position']}>
      {product.name} (price: {product.price}). Count x{count}. Total Cost:{' '}
      {totalCost}$.
    </div>
  );
};

export default OrderPosition;
