import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Product from '../product';
import Basket from '../basket';
import Loader from '../loader';

import { loadProducts } from '../../redux/actions';
import {
  productsListSelector,
  productsLoadedSelector,
  productsLoadingSelector,
} from '../../redux/selectors';

import styles from './menu.module.css';

class Menu extends React.Component {
  static propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };

  state = { error: null };

  componentDidMount() {
    const { restaurantId, loadProducts } = this.props;
    loadProducts(restaurantId);
  }
  componentDidUpdate(prevProps) {
    const { restaurantId, loadProducts } = this.props;
    if (prevProps.restaurantId !== restaurantId) loadProducts(restaurantId);
  }
  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { loading, loaded, products } = this.props;

    if (this.state.error) {
      return <p>Сейчас меню этого ресторана недоступно :(</p>;
    }

    let productList;
    if (loading) productList = <Loader />;
    if (loaded)
      productList = (
        <div>
          {products.map((product) => (
            <Product key={product.id} id={product.id} />
          ))}
        </div>
      );
    return (
      <div className={styles.menu}>
        {productList}
        <div>
          <Basket />
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    products: productsListSelector(state),
    loading: productsLoadingSelector(state),
    loaded: productsLoadedSelector(state),
  }),
  { loadProducts }
)(Menu);
