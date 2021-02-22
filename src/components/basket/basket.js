import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Minus } from '../../icons/minus.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';

import { increment, decrement, clear } from '../../redux/actions';
import OrderPosition from '../orderPosition';
import styles from './basket.module.css';

const Basket = ({ increment, decrement, clear, order, restaurants = [] }) => {
  const allMenu = getAllMenu(restaurants);
  const orderPositions = getPositions(order, allMenu);
  const totalCost = countTotalCost(orderPositions);

  return (
    <div className={styles.basket}>
      <h2>Basket:</h2>
      {orderPositions}
      {orderPositions.length > 0 && 'Total cost: ' + totalCost}
    </div>
  );
};

const getAllMenu = (restaurants = []) => {
  const allMenu = restaurants.reduce(
    (allMenu, restaurant = {}) => [...allMenu, ...(restaurant.menu || [])],
    []
  );

  return allMenu;
};

const getPositions = (order = {}, allproducts = []) => {
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

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product.id)),
  decrement: () => dispatch(decrement(props.product.id)),
  clear: () => dispatch(clear(props.product.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
