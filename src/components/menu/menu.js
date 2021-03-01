import React from 'react';
import PropTypes from 'prop-types';

import Product from '../product';
import Basket from '../basket';
import Loader from '../loader';

import styles from './menu.module.css';
import { connect } from 'react-redux';
import { loadProducts } from '../../redux/actions';
import { productsListSelector, productsLoadingSelector, productsLoadedSelector } from '../../redux/selectors';

class Menu extends React.Component {
  static propTypes = {
    restaurantId: PropTypes.string.isRequired,
  };

  componentDidCatch(error) {
    this.setState({ error });
  }

  componentDidMount() {
    if(!this.props.products) this.props.loadProducts(this.props.restaurantId);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.restaurantId !== this.props.restaurantId && !this.props.products) this.props.loadProducts(this.props.restaurantId);
  }

  render() {
    const { products, restaurantId } = this.props;

    if(!products || this.props.loading) return <Loader />

    if (!this.props.loaded) {
      return <p>Сейчас меню этого ресторана недоступно :(</p>;
    }

    return (
      <div className={styles.menu}>
        <div>
          {products.map((product) => (
            <Product key={product.id} id={product.id} restaurantId={restaurantId} />
          ))}
        </div>
        <div>
          <Basket />
        </div>
      </div>
    );
  }
}

export default connect((state, props) => ({
  products: productsListSelector(state, props),
  loading: productsLoadingSelector(state),
  loaded: productsLoadedSelector(state),
}),
{ loadProducts }
)(Menu);
