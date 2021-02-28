import React from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadProducts } from '../../redux/actions';
import {
  productsLoadingSelector,
  productsLoadedSelector,
  productsErrorSelector,
} from '../../redux/selectors';
import Product from '../product';
import Basket from '../basket';

import styles from './menu.module.css';
import Loader from '../loader';
import ErrorComponent from '../errorComponent';

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  state = { error: null };

  componentDidMount() {
    const { loadProducts, loading, loaded, error, restaurantId } = this.props;
    if (!loading && !loaded && !error) {
      loadProducts(restaurantId);
    }
  }

  componentDidUpdate(prevProps) {
    const { loadProducts, loading, loaded, error, restaurantId } = this.props;
    if (
      this.props.restaurantId !== prevProps.restaurantId &&
      !loading &&
      !loaded &&
      !error
    ) {
      loadProducts(restaurantId);
    }
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const {
      loadProducts,
      menu,
      restaurantId,
      loading,
      loaded,
      error,
    } = this.props;

    if (error)
      return <ErrorComponent reload={() => loadProducts(restaurantId)} />;

    if (loading) return <Loader />;
    if (!loaded) return 'No data :(';

    if (this.state.error) {
      return <p>Сейчас меню этого ресторана недоступно :(</p>;
    }

    return (
      <div className={styles.menu}>
        <div>
          {menu.map((id) => (
            <Product key={id} id={id} restaurantId={restaurantId} />
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
  createStructuredSelector({
    loading: productsLoadingSelector,
    loaded: productsLoadedSelector,
    error: productsErrorSelector,
  }),
  {
    loadProducts,
  }
)(Menu);
