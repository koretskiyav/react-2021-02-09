import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './basket.css';
import styles from './basket.module.css';
import itemStyles from './basket-item/basket-item.module.css';
import BasketItem from './basket-item';
import Button from '../button';
import { orderProductsSelector, totalSelector, isProceedPageSelector, postOrderIsInProgressSelector } from '../../redux/selectors';
import { UserConsumer } from '../../contexts/user-context';
import { postOrder } from '../../redux/actions';
import Loader from '../loader';

function Basket({ title = 'Basket', total, orderProducts, isProceedPage, postOrder, isUploading }) {
  // const { name } = useContext(userContext);

  const didTapCheckout = (event) => {
    if (isProceedPage) {
      event.preventDefault();
      postOrder();
    }
  };

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  if (isUploading) {
    return (
      <Loader/>
    );
  }
  else {
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
      <Link to="/checkout" onClick={didTapCheckout}>
        <Button primary block>
          checkout
        </Button>
      </Link>
    </div>
  );
  }
}

const mapStateToProps = createStructuredSelector({
  total: totalSelector,
  orderProducts: orderProductsSelector,
  isProceedPage: isProceedPageSelector,
  isUploading: postOrderIsInProgressSelector
});

export default connect(mapStateToProps, { postOrder })(Basket);
