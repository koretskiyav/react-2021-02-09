import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadProducts } from '../../redux/actions';
import {
  productsLoadedSelector,
  productsLoadingSelector,
  productsLoadedByRestaurant,
} from '../../redux/selectors';

import Product from '../product';
import Basket from '../basket';
import Loader from '../loader';

import styles from './menu.module.css';

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    restaurantId: PropTypes.string.isRequired,
  };

  state = {
    error: null,
  };

  componentDidMount() {
    if (!this.props.loadedByRestaurant) {
      this.props.loadProducts(this.props.restaurantId);
    }
  }

  componentDidUpdate(oldProps) {
    if (
      oldProps.restaurantId !== this.props.restaurantId &&
      !this.props.loadedByRestaurant
    ) {
      this.props.loadProducts(this.props.restaurantId);
    }
  }

  componentDidCatch(error) {
    this.setState({
      error,
    });
  }

  render() {
    const { menu, loading, loaded, loadedByRestaurant } = this.props;

    if (this.state.error) {
      return <p> Сейчас меню этого ресторана недоступно: ( </p>;
    }

    if (loading) return <Loader />;
    if (!loaded || !loadedByRestaurant) return 'No data :(';

    return (
      <div className={styles.menu}>
        <div>
          {' '}
          {menu.map((id) => (
            <Product key={id} id={id} />
          ))}{' '}
        </div>{' '}
        <div>
          <Basket />
        </div>{' '}
      </div>
    );
  }
}

export default connect(
  (state, props) => ({
    loaded: productsLoadedSelector(state, props),
    loading: productsLoadingSelector(state, props),
    loadedByRestaurant: productsLoadedByRestaurant(state, props),
  }),
  {
    loadProducts,
  }
)(Menu);
