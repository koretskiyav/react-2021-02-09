import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './basket.css';
import styles from './basket.module.css';
import itemStyles from './basket-item/basket-item.module.css';
import BasketItem from './basket-item';
import Button from '../button';
import Loader from '../loader'
import {
  orderProductsSelector,
  totalSelector,
  isCheckoutSelector
} from '../../redux/selectors';
import { UserConsumer } from '../../contexts/user-context';
import { removeAll } from '../../redux/actions';

function Basket({ title = 'Basket', total, orderProducts, isCheckout, removeAll }) {
  // const { name } = useContext(userContext);

  const [redirect, setRedirect] = useState(null);
  const [fetching, setLoader] = useState({
    loader: null,
    basketClasses: styles.basket
  });

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  const basketFetch = () => {
    if (isCheckout) {

      setLoader({loader: <Loader/>, basketClasses: styles.basket + ' ' + styles.hide});

      const orderProductJSON = orderProducts.map(product => {
        return ({
          amount: product.amount,
          id: product.product.id
        });
      });

      fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderProductJSON)
      })
        .then(res => {
          setLoader({ loader: null, basketClasses: styles.basket });
          if (res.ok) {
            setRedirect(<Redirect to={'/success'}/>);
            removeAll();
          } else {
            res.text()
              .then((res) => {
                setRedirect(<Redirect to={{
                  pathname: '/unsuccess',
                  state: { errorMessage: res }
                }}/>);
              });
          }
        });
    }

  };

  return (
    <>
      {fetching.loader}
      <div className={fetching.basketClasses}>
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
        <Link to="/checkout">
          <Button primary block onClick={basketFetch}>
            checkout
          </Button>
        </Link>
        {redirect}
      </div>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  total: totalSelector,
  orderProducts: orderProductsSelector,
  isCheckout: isCheckoutSelector
});

const mapDispatchToProps = (dispatch) => ({
  removeAll: () => dispatch(removeAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
