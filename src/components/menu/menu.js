import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Product from '../product';
import Basket from '../basket';
import Loader from '../loader';
import { productsListSelector } from '../../redux/selectors';
import { loadRestaurantProducts } from '../../redux/actions';

import styles from './menu.module.css';

const Menu = ({ products, restaurantId, loadRestaurantProducts }) => {
  useEffect(() => {
    if (products.length === 0) loadRestaurantProducts(restaurantId);
  }, [restaurantId, products, loadRestaurantProducts]);

  return (
    <div className={styles.menu}>
      <div>
        {products.length !== 0 ? (
          products.map(({ id }) => <Product key={id} id={id} />)
        ) : (
          <Loader />
        )}
      </div>
      <div>
        <Basket />
      </div>
    </div>
  );
};

Menu.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadRestaurantProducts: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({
    products: productsListSelector(state),
  }),
  { loadRestaurantProducts }
)(Menu);
