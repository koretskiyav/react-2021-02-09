import React, {useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BuyProduct from '../buyProduct';
import RemoveProduct from '../removeProduct';

const Basket = ({order, products}) => {

  const getProductTotal = (id) => (order[id] * products[id].price);

  const getBasketTotal = () => {
    let sum = 0;
    Object.keys(order).map((id) => {
      sum += getProductTotal(id);
    });

    return sum;
  };

 return ( 
  <div>
    <h3>Basket:</h3>
    {Object.keys(order).map((id) => (
      <span key={id}>
        <div>Name: {products[id].name}</div>
        <div>Amount: {order[id]}</div>
        <div>Total: {getProductTotal(id)}$</div>
        <BuyProduct product={products[id]} />
        <RemoveProduct product={products[id]} />
      </span>
    ))}

    <div>Total: {getBasketTotal()}$</div>
  </div>
 )};

Basket.propTypes = {
  // restaurants: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //     name: PropTypes.string.isRequired,
  //   }).isRequired
  // ).isRequired,
  // onRestaurantClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  order: state.order || {},
});


export default connect(mapStateToProps)(Basket);
