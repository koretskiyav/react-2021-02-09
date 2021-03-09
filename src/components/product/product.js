import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styles from './product.module.css';
import { increment, decrement } from '../../redux/actions';
import { CountPrice } from '../../contexts/currency/currency-utils';
import { currencyContext } from '../../contexts/currency/currency-context';
import Button from '../button';
import { amountSelector, productSelector } from '../../redux/selectors';

const Product = ({ product, amount, increment, decrement }) => {
  const currency = useContext(currencyContext);
  const priceWithCurrency = useMemo(() => CountPrice(product.price, currency), [
    product.price,
    currency,
  ]);

  if (!product) return null;

  return (
    <div className={styles.product} data-id="product">
      <div className={styles.content}>
        <div>
          <h4 className={styles.title}>{product.name}</h4>
          <p className={styles.description}>
            {product?.ingredients?.join(', ')}
          </p>
          <div className={styles.price}>{priceWithCurrency}</div>
        </div>
        <div>
          <div className={styles.counter}>
            <div className={styles.count} data-id="product-amount">
              {amount}
            </div>
            <div className={styles.buttons}>
              <Button onClick={decrement} icon="minus" />
              <Button onClick={increment} icon="plus" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    ingredients: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
  // from connect
  amount: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  amount: amountSelector,
  product: productSelector,
});

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.id)),
  decrement: () => dispatch(decrement(props.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
