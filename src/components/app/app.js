import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';

import RestaurantsPage from '../../pages/restaurants-page';
import { UserProvider } from '../../contexts/user-context';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { errorMessageSelector, firstIdMenuSelector } from '../../redux/selectors';
import { CurrencyProvider } from '../../contexts/currency-context';

const App = ({firstIdMenu, errorMessage}) => {
  const [name, setName] = useState('Igor');
  const currencies = [
    {name: '$', coeff: 1},
    {name: '₴', coeff: 25},
    {name: '₽', coeff: 75}
  ];
  const [activeCurrency, setActiveCurrency] = useState(currencies[0].name);

  return (
    <div>
      <CurrencyProvider value={{currencies, activeCurrency, setActiveCurrency}}>
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
      </CurrencyProvider>
    </div>
  );
};

export default connect(
  createStructuredSelector({
    firstIdMenu: firstIdMenuSelector,
    errorMessage: errorMessageSelector,
  })
)(App);
