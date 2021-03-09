import React, { useContext, useMemo } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
import { createStructuredSelector } from 'reselect';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import './basket.css';
import styles from './basket.module.css';
import itemStyles from './basket-item/basket-item.module.css';
import BasketItem from './basket-item';
import Button from '../button';
import {
  orderProductsListSelector,
  orderSendingSelector,
  orderSendedSelector,
  orderProductsInfoSelector,
  totalSelector,
  locationSelector,
} from '../../redux/selectors';
import { UserConsumer } from '../../contexts/user-context';
import { currencyContext } from '../../contexts/currency/currency-context';
import { CountPrice } from '../../contexts/currency/currency-utils';
import { sendOrder, clearBasket } from '../../redux/actions';
import Loader from '../loader';

function Basket({
  title = 'Basket',
  total,
  orderProductsList,
  orderSending,
  orderSended,
  orderProductsInfo,
  location,
  goToSuccessPage,
  sendOrder,
  clearBasket,
}) {
  const currency = useContext(currencyContext);
  const totalPriceWithCurrency = useMemo(() => CountPrice(total, currency), [
    total,
    currency,
  ]);
  const isOrderPage = () => location.pathname?.indexOf('/checkout') > -1;

  const onClickHandler = (event) => {
    //event.stopPropagation();
    if (isOrderPage()) {
      event.preventDefault();
      sendOrder(orderProductsList);
    }
  };

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  if (orderSending) {
    return <Loader />;
  }

  if (orderSended) {
    clearBasket();
    goToSuccessPage();
  }

  return (
    <div className={styles.basket}>
      {/* <h4 className={styles.title}>{`${name}'s ${title}`}</h4> */}
      <h4 className={styles.title}>
        <UserConsumer>{({ name }) => `${name}'s ${title}`}</UserConsumer>
      </h4>
      <TransitionGroup>
        {orderProductsInfo.map(
          ({ product, amount, subtotal, restaurantId }) => (
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
          )
        )}
      </TransitionGroup>
      <hr className={styles.hr} />
      <div className={itemStyles.basketItem}>
        <div className={itemStyles.name}>
          <p>Total</p>
        </div>
        <div className={itemStyles.info}>
          <p>{`${totalPriceWithCurrency}`}</p>
        </div>
      </div>
      <Link to="/checkout">
        <Button primary block onClick={onClickHandler}>
          {isOrderPage() ? 'Order' : 'Go to order page'}
        </Button>
      </Link>
    </div>
  );
}

Basket.propTypes = {
  total: PropTypes.number.isRequired,
  orderProducts: PropTypes.object,
  orderProductsInfo: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.object,
      amount: PropTypes.number,
      subtotal: PropTypes.number,
      restaurantId: PropTypes.string,
    }).isRequired
  ),
  sendOrder: PropTypes.func.isRequired,
  clearBasket: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  total: totalSelector,
  orderProductsList: orderProductsListSelector,
  orderSending: orderSendingSelector,
  orderSended: orderSendedSelector,
  orderProductsInfo: orderProductsInfoSelector,
  location: locationSelector,
});

const mapDispatchToProps = (dispatch) => ({
  sendOrder: (orderProducts) => dispatch(sendOrder(orderProducts)),
  clearBasket: () => dispatch(clearBasket()),
  goToSuccessPage: () => dispatch(push('/success')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
