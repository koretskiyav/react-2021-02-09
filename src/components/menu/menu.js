import React from 'react';
import PropTypes from 'prop-types';

import Product from '../product';
import Basket from '../basket';

import styles from './menu.module.css';

import {loadProducts} from '../../redux/actions';
import {connect} from "react-redux";
import {productsListSelector, productsLoadedSelector, productsLoadingSelector} from "../../redux/selectors";
import Loader from "../loader";


class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  state = { error: null };
  constructor(props) {
    super(props);
    if (!(props.loading || props.loaded)) props.loadProducts(props.restaurantId);
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

   componentDidUpdate(prevProps) {
      if (prevProps.restaurantId !== this.props.restaurantId)
        this.props.loadProducts(this.props.restaurantId);
  }

  render() {
    const { menu, loading, loaded } = this.props;
    if (this.state.error) {
      return <p>Сейчас меню этого ресторана недоступно :(</p>;
    }
    if (loading) return <Loader />;
    if (!loaded) return 'No data :(';

    return (
      <div className={styles.menu}>
        <div>
          {menu.map(({id}) => (
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
    menu: productsListSelector(state),
    loading: productsLoadingSelector(state),
    loaded: productsLoadedSelector(state),
  }),
  { loadProducts }
)(Menu);
