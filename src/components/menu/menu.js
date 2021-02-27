import React from 'react';
import PropTypes from 'prop-types';

import Product from '../product';
import Basket from '../basket';

import styles from './menu.module.css';
import Loader from "../loader";

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  state = {
    error: null
  };

  componentDidCatch(error) {
    this.setState({error});
  }

  render() {
    const {menu} = this.props;
    if (this.props.loading) return <Loader />
    if (this.state.error) {
      return <p>Сейчас меню этого ресторана недоступно :(</p>;
    }
    if (!this.props.loaded) return null;
    return (
      <div className={styles.menu}>
        <div>
          {menu.map((id) => (
            <Product key={id} id={id}/>
          ))}
        </div>
        <div>
          <Basket/>
        </div>
      </div>
    );
  }
}

export default Menu;
