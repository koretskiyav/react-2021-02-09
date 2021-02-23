import React, { PureComponent } from 'react';
import Restaurants from '../restaurants';
import Header from '../header';
import { connect } from 'react-redux';

import { closeCart } from '../../redux/actions';

class App extends PureComponent {
  render() {
    return (
      <div
        onClick={(e) => {
          if (!e.target.closest('.cart-wrapper')) {
            this.props.closeCart();
          }
        }}
      >
        <Header />
        <Restaurants />
      </div>
    );
  }
}

const mapDispatchToProps = {
  closeCart,
};

export default connect(null, mapDispatchToProps)(App);
