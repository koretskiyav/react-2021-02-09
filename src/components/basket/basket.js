import React, { useState } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { createStructuredSelector } from 'reselect';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Loader from '../loader';

import './basket.css';
import styles from './basket.module.css';
import itemStyles from './basket-item/basket-item.module.css';
import BasketItem from './basket-item';
import Button from '../button';
import {
  orderProductsSelector,
  totalSelector,
  isCheckoutRouteSelector,
} from '../../redux/selectors';
import { updateOrderStatus } from '../../redux/actions';
import { UserConsumer } from '../../contexts/user-context';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  isCheckoutRoute,
  goToCheckout,
  goToOrderStatusPage,
  updateOrderStatus,
}) {
  const [loading, setLoading] = useState(false);

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  const checkoutButtonClickHandler = async () => {
    if (isCheckoutRoute) {
      setLoading(true);
      const payload = orderProducts.map(({ product, amount }) => ({
        id: product.id,
        amount,
      }));
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      updateOrderStatus({
        success: res.ok,
        message: res.ok ? 'Спасибо за заказ!' : result,
      });
      goToOrderStatusPage();
    } else {
      goToCheckout();
    }
  };

  if (loading) {
    return <Loader />;
  }

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
          <p>{`${total} $`}</p>
        </div>
      </div>
      <Button primary block onClick={checkoutButtonClickHandler}>
        checkout
      </Button>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  total: totalSelector,
  orderProducts: orderProductsSelector,
  isCheckoutRoute: isCheckoutRouteSelector,
});

const mapDispatchToProps = (dispatch) => ({
  goToCheckout: () => dispatch(push('/checkout')),
  goToOrderStatusPage: () => dispatch(push('/order_status')),
  updateOrderStatus: (data) => dispatch(updateOrderStatus(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
