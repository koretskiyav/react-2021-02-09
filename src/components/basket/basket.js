import React from 'react';
import { connect } from 'react-redux'
import { restaurants } from '../../fixtures';
import { increment, decrement, remove } from '../../redux/actions';
import PropTypes from 'prop-types';

const Basket = ({ order, increment, decrement, remove }) => {
  const orderIdList = Object.keys(order);
  const menuAll = []
  restaurants.forEach(({ menu }) => menu.forEach(product => menuAll.push(product)));
  return (
    <>
      <b>Корзина</b>
      {orderIdList.length > 0 && Object.values(order).some(value => value > 0) ?
        <>
          {orderIdList.map(product_id =>
            (order[product_id] !== 0) ?
              <div key={product_id}>
                <p>{menuAll.find(({id}) => id === product_id).name}</p>
                <p>{order[product_id]}</p>
                <p>{order[product_id] * menuAll.find(({id}) => id === product_id).price}$</p>
                <p>
                  <button onClick={() => increment(product_id)}>+</button>
                  <button onClick={() => decrement(product_id)}>-</button>
                  <button onClick={() => remove(product_id)}>&#9747;</button>
                </p>
                <hr />
              </div>
              : null
          )}
          </> : <p>Ваша корзина пуста</p>}
      <b>Итого:</b>
      <p>{orderIdList.reduce((sum,product_id) => sum + order[product_id] * menuAll.find(({id}) => id === product_id).price, 0) }$</p>
    </>)
}

Basket.propTypes = {
  order: PropTypes.object.isRequired,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  remove: PropTypes.func,
};

const mapStateToProps = (state) => ({
  order: state.order,
});

const mapDispatchToProps = {
  increment,
  decrement,
  remove,
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);