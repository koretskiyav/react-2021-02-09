import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './basket.module.css';

import Position from './position';

const Basket = ({ order, restaurants }) => {
  const products = useMemo(() => {
    return restaurants.reduce((acc, { menu }) => [...acc, ...menu], []);
  }, [restaurants]);

  const positions = useMemo(() => {
    const productsKeys = Object.keys(order);
    return products
      .filter(({ id }) => {
        return productsKeys.includes(id);
      })
      .map((product) => ({
        ...product,
        count: order[product.id],
        price: order[product.id] * product.price,
      }));
  }, [order, products]);

  const total = useMemo(
    () => positions.reduce((acc, { price }) => acc + price, 0),
    [positions]
  );

  const totalBlock = total ? <div>total: {total}$</div> : null;

  return (
    <div className={styles.container}>
      {positions.length
        ? positions.map((position) => (
            <Position key={position.id} position={position} />
          ))
        : 'Корзина пуста'}
      {totalBlock}
    </div>
  );
};

const mapStateToProps = (state) => ({
  order: state.order,
});

Position.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      menu: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired
  ).isRequired,
  order: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps)(Basket);
