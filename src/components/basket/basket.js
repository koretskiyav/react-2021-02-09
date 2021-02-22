import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import OrderPosition from '../orderPosition';
import styles from './basket.module.css';

const Basket = ({ order = {}, restaurants = [] }) => {
  const allMenu = getAllMenu(restaurants);
  const orderPositions = getOrderPositions(order, allMenu);
  const totalCost = countTotalCost(orderPositions);

  return (
    orderPositions.length > 0 && (
      <div className={styles.basket}>
        <h3>Basket:</h3>
        {orderPositions}
        <div className={styles['basket__price']}>
          Total cost: <span className={styles['price']}>{totalCost}$</span>
        </div>
      </div>
    )
  );
};

Basket.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      menu: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string,
          price: PropTypes.number,
          ingredients: PropTypes.arrayOf(PropTypes.string.isRequired),
        })
      ),
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
      location: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number,
      }),
      reviews: PropTypes.array,
    }).isRequired
  ),
  // From connect
  order: PropTypes.object,
};

const getAllMenu = (restaurants = []) => {
  const allMenu = restaurants.reduce(
    (allMenu, restaurant = {}) => [...allMenu, ...(restaurant.menu || [])],
    []
  );

  return allMenu;
};

const getOrderPositions = (order = {}, allproducts = []) => {
  const positions = [];
  for (const [productId, count] of Object.entries(order)) {
    const product = allproducts.find((product) => product.id === productId);
    if (!!product) {
      positions.push(
        <OrderPosition key={productId} product={product} count={count} />
      );
    }
  }

  return positions;
};

const countTotalCost = (positions = []) =>
  positions.reduce(
    (summ, position) =>
      summ + position.props.product.price * position.props.count,
    0
  );

const mapStateToProps = (state) => ({
  order: state.order || {},
});

export default connect(mapStateToProps, null)(Basket);
