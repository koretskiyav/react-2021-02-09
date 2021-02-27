import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  productsLoadedSelector,
  productsLoadingSelector,
} from '../../redux/selectors';
import { loadRestaurantProducts } from '../../redux/actions';

import Product from '../product';
import Basket from '../basket';
import Loader from '../loader';

import styles from './menu.module.css';

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  state = { error: null };

  isPending() {
    const { restaurantId, loading } = this.props;
    return loading[restaurantId] || false;
  }

  isLoaded() {
    const { restaurantId, loaded } = this.props;
    return loaded[restaurantId] || false;
  }

  componentDidMount() {
    const { loadRestaurantProducts, restaurantId } = this.props;
    if (!this.isPending() && !this.isLoaded()) {
      loadRestaurantProducts(restaurantId);
    }
  }

  componentDidUpdate(prevProps) {
    const { loadRestaurantProducts, restaurantId } = this.props;
    if (
      prevProps.restaurantId !== restaurantId &&
      !this.isPending() &&
      !this.isLoaded()
    ) {
      loadRestaurantProducts(restaurantId);
    }
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { menu, loading, restaurantId } = this.props;

    if (this.state.error) {
      return <p>Сейчас меню этого ресторана недоступно :(</p>;
    }

    if (loading[restaurantId]) return <Loader />;

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
  (state) => ({
    loading: productsLoadingSelector(state),
    loaded: productsLoadedSelector(state),
  }),
  { loadRestaurantProducts }
)(Menu);
