import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import store from '../../redux/store';
import { CARTCLOSE } from '../../redux/constants';

export default class App extends PureComponent {
  render() {
    return (
      <div
        onClick={(e) => {
          if (!e.target.closest('.cart-wrapper')) {
            store.dispatch({ type: CARTCLOSE });
          }
        }}
      >
        <Header />
        <Restaurants />
      </div>
    );
  }
}
