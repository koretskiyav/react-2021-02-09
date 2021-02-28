import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadProducts } from '../../redux/actions';
import {
  productsLoadingSelector,
  productsLoadedSelector,
  productsErrorSelector,
} from '../../redux/selectors';

import Product from '../product';
import Basket from '../basket';
import Loader from '../loader';

import styles from './menu.module.css';

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    restaurantId: PropTypes.string.isRequired,
    // from connect
    loading: PropTypes.bool.isRequired,
    loaded: PropTypes.bool,
    error: PropTypes.object,
    loadProducts: PropTypes.func.isRequired,
  };

  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  componentDidMount() {
    this.getProducts();
  }

  componentDidUpdate() {
    this.getProducts();
  }

  getProducts() {
    const { restaurantId, loading, loaded, error, loadProducts } = this.props;

    if (!loading && !(loaded || error)) loadProducts(restaurantId);
  }

  render() {
    const { menu, loading, loaded, error } = this.props;

    if (loading) return <Loader />;
    if (!loaded) {
      error && console.log(error);
      return 'No data :(';
    }

    if (this.state.error) {
      return <p>Сейчас меню этого ресторана недоступно :(</p>;
    }

    return (
      <div className={styles.menu}>
        <div>
          {menu.map((id) => (
            <Product key={id} id={id} />
          ))}
        </div>
        <div>
          <Basket />
        </div>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({
    loading: productsLoadingSelector(state),
    loaded: productsLoadedSelector(state, props),
    error: productsErrorSelector(state),
  }),
  { loadProducts }
)(Menu);
