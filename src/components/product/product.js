import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styles from './product.module.css';

import { increment, decrement, loadProducts } from '../../redux/actions';

import Button from '../button';
import Loader from '../loader';
import {
  amountSelector,
  productSelector,
  productsLoadedSelector,
  productsLoadingSelector,
} from '../../redux/selectors';

const Product = ({
  product,
  amount,
  increment,
  decrement,
  loadProducts,
  loading,
  loaded,
}) => {
  useEffect(() => {
    if (!loading && !loaded) loadProducts();
  }, []); // eslint-disable-line

  if (loading) return <Loader />;
  if (!loaded) return 'No data :(';

  return (
    <div className={styles.product} data-id="product">
      <div className={styles.content}>
        <div>
          <h4 className={styles.title}>{product.name}</h4>
          <p className={styles.description}>{product.ingredients.join(', ')}</p>
          <div className={styles.price}>{product.price} $</div>
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
    ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  // from connect
  amount: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: productsLoadingSelector,
  loaded: productsLoadedSelector,
  amount: amountSelector,
  product: productSelector,
});

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.id)),
  decrement: () => dispatch(decrement(props.id)),
  loadProducts: () => dispatch(loadProducts(props.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
