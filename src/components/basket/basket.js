import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Item from './item';

import style from './basket.module.css';

const getBasketData = (menu, order) => {
  const idsInBasket = Object.keys(order).filter((id) => order[id] > 0);
  return idsInBasket.reduce((acc, id) => {
    const product = menu[id];
    acc.total += order[id] * product.price;
    acc.items.push(<Item product={product} key={id} />);
    return acc;
  }, {
    total: 0,
    items: [],
  })
}

const Basket = ({ menu, order }) => {
  const basketData = useMemo(
    () => getBasketData(menu, order),
    [menu, order],
  );

  if (!basketData.items.length) {
    return null;
  }

  return (
    <table className={style.basket}>
      <thead>
      <tr>
        <th>Product</th>
        <th>Amount</th>
        <th>Sum</th>
        <th />
      </tr>
      </thead>
      <tbody>
        {basketData.items}
      </tbody>
      <tfoot>
      <tr>
        <th colSpan={2}>Total</th>
        <th>{basketData.total}$</th>
        <th />
      </tr>
      </tfoot>
    </table>
  );
};

Basket.propTypes = {
  menu: PropTypes.objectOf(
    PropTypes.shape({
      price: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  // from connect
  order: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  order: state.order,
});

export default connect(mapStateToProps)(Basket);
