import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProductName, getProductPrice, getCartTotal } from './utility.js';

const Basket = ({ orders }) => {
  return (
    <div>
      <h3>Cart:</h3>
      {Object.keys(orders).map((productID) => (
        <div key={productID} className="cart-item">
          {getProductName(productID)}({orders[productID]}) -
          {getProductPrice(productID, orders[productID])}$
        </div>
      ))}
      <h4>Total: {getCartTotal(orders)}$</h4>
    </div>
  );
};

const mapStateToProps = (state) => ({
  orders: state.order,
});

export default connect(mapStateToProps)(Basket);
