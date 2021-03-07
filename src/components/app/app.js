import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';

import RestaurantsPage from '../../pages/restaurants-page';
import { UserProvider } from '../../contexts/user-context';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { errorMessageSelector, firstIdMenuSelector } from '../../redux/selectors';

const App = ({firstIdMenu, errorMessage}) => {
  const [name, setName] = useState('Igor');

  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <Header />
        <Switch>
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route path="/error" component={() => <h1>Error Page!</h1>} />
          <Route path="/success" component={() => <h2>Спасибо за заказ!</h2>} />
          <Route path="/unsuccess" component={ () => <p>{errorMessage}</p> } />
          <Redirect to={`/restaurants${firstIdMenu}/menu`} />
        </Switch>
      </UserProvider>
    </div>
  );
};

export default connect(
  createStructuredSelector({
    firstIdMenu: firstIdMenuSelector,
    errorMessage: errorMessageSelector,
  })
)(App);
