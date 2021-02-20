import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import style from './basket.module.css';

import { decrement, increment, clear } from '../../redux/actions';

const Basket = ({ menu, order, increment, decrement, clear }) => {
  let total = 0;

  return (
    <div className={style.basket}>
      {Object.keys(order).map((productId) => {
        const amount = order[productId];

        if (amount <= 0) {
          return null;
        }

        const product = menu.find(({ id }) => id === productId);
        const cost = amount * product.price;
        total += cost;

        return (
          <div key={productId}>
            {product.name}: {product.price}$ * {amount} = {cost}$
            <button onClick={() => decrement(productId)}>-</button>
            <button onClick={() => increment(productId)}>+</button>
            <button onClick={() => clear(productId)}>X</button>
          </div>
        );
      })}
      {!!total && (
        <div className="basket-total">Total: {total}$</div>
      )}
    </div>
  );
};

Basket.propTypes = {
  menu: PropTypes.array.isRequired,
  // from connect
  order: PropTypes.object,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  clear: PropTypes.func,
};

const mapStateToProps = (state) => ({
  order: state.order,
});

export default connect(mapStateToProps, {
  increment, decrement, clear
})(Basket);
