import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './basket.css';
import styles from './basket.module.css';
import itemStyles from './basket-item/basket-item.module.css';
import BasketItem from './basket-item';
import Button from '../button';
import Loader from '../loader';
import Price from '../price';
import {
  orderProductsSelector,
  totalSelector,
  orderSubmittingSelector,
  isCheckoutSelector,
} from '../../redux/selectors';
import { submitOrder } from '../../redux/actions';
import { UserConsumer } from '../../contexts/user-context';
import { currencyContext } from '../../contexts/currency-context';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  submitting,
  isCheckout,
  submitOrder,
}) {
  // const { name } = useContext(userContext);
  const { currency } = useContext(currencyContext);

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  const handleSubmit = (event) => {
    if (isCheckout) {
      event.preventDefault();
      submitOrder(currency);
    }
  };

  return (
    <div className={styles.basket}>
      {/* <h4 className={styles.title}>{`${name}'s ${title}`}</h4> */}
      <h4 className={styles.title}>
        <UserConsumer>{({ name }) => `${name}'s ${title}`}</UserConsumer>
      </h4>
      <TransitionGroup>
        {orderProducts.map(({ product, amount, subtotal, restaurantId }) => (
          <CSSTransition
            key={product.id}
            timeout={500}
            classNames="basket-animation"
          >
            <BasketItem
              product={product}
              amount={amount}
              subtotal={subtotal}
              restaurantId={restaurantId}
              disabled={submitting}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <hr className={styles.hr} />
      <div className={itemStyles.basketItem}>
        <div className={itemStyles.name}>
          <p>Total</p>
        </div>
        <div className={itemStyles.info}>
          <p>
            <Price value={total} />
          </p>
        </div>
      </div>
      {submitting ? (
        <Loader />
      ) : (
        <Link to="/checkout" onClick={handleSubmit}>
          <Button primary block>
            checkout
          </Button>
        </Link>
      )}
    </div>
  );
}

Basket.propTypes = {
  title: PropTypes.string,
  // from connect
  total: PropTypes.number.isRequired,
  orderProducts: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
      amount: PropTypes.number,
      subtotal: PropTypes.number,
      restaurantId: PropTypes.string,
    })
  ),
  submitting: PropTypes.bool,
  isCheckout: PropTypes.bool,
  submitOrder: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  total: totalSelector,
  orderProducts: orderProductsSelector,
  submitting: orderSubmittingSelector,
  isCheckout: isCheckoutSelector,
});

export default connect(mapStateToProps, { submitOrder })(Basket);
