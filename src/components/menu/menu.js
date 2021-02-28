import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from '../loader';

import Product from '../product';
import Basket from '../basket';

import styles from './menu.module.css';
import { increment, loadMenu } from '../../redux/actions';

class Menu extends React.Component {


  loadMenuIfNeeded() {
    if (this.props.menu == null) {
      this.props.dispatch(loadMenu(this.props.id));
    }
  }

  componentDidMount() {
    this.loadMenuIfNeeded()
  }

  componentDidUpdate() {
    this.loadMenuIfNeeded()
  }

  static propTypes = {
    //menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  render() {
    if (this.props.menu == null) {
      return (
        <div>
          <Loader />;
        </div>
      );
    }
    else {
      return (
        <div className={styles.menu}>
          <div>
          {Object.values(this.props.restaurant.menu).map((id) => (
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
}

export default connect((state, props) => ({
  menu: state.menus[props.id],
  restaurant: state.restaurants.entities[props.id]
}))(Menu);
