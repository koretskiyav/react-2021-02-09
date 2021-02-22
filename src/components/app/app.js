import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';
import { connect } from 'react-redux';
import { getRestaurants } from '../../redux/actions';
import { restaurants } from '../../fixtures';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getRestaurants(restaurants);
    console.log(this.props.restaurants);
  }
  render() {
    const restaurantsJsx = this.props.restaurants.length && (
      <Restaurants restaurants={this.props.restaurants} />
    );
    return (
      <div>
        <Header />
        <Basket />
        {restaurantsJsx}
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state, props) => ({
  restaurants: state.restaurants,
});

export default connect(mapStateToProps, { getRestaurants })(App);
