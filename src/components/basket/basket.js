import React from 'react';
import { connect } from 'react-redux';
import Product from '../product';

const Banner = ({ order, restaurants }) => {
  const products = restaurants.flatMap((restaurant) => restaurant.menu),
    productsInBasket = products.filter((product) => {
      if (order.hasOwnProperty(product.id)) return product;
    });
  return (
    <div>
      {productsInBasket.length
        ? productsInBasket.map((product) => (
            <Product key={product.id} product={product} isBasket />
          ))
        : ''}
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  order: state.order || {},
  restaurants: state.restaurants,
});

export default connect(mapStateToProps)(Banner);
