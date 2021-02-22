import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';

import styles from './app.module.css';

export default class App extends PureComponent {
  state = {
    basketOpened: false,
  }

  openBasket = () => {
    this.setState({basketOpened: true});  
  }   
  closeBasket = () => {
    this.setState({basketOpened: false});  
  } 

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.main}>
          <Header openBasket={this.openBasket}/>
          <Restaurants restaurants={this.props.restaurants} />
        </div>
        <Basket closeBasket={this.closeBasket} opened={this.state.basketOpened}/>
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
};
