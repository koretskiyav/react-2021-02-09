import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';

import RestaurantsPage from '../../pages/restaurants-page';
import { UserProvider } from '../../contexts/user-context';
import { CurrencyProvider } from '../../contexts/currency-context';

const App = () => {
  const [name, setName] = useState('Igor');
  const [currentCurrency, setCurrentCurrency] = useState('$');

  return (
    <div>
      <CurrencyProvider value={{ currentCurrency, setCurrentCurrency }}>
        <UserProvider value={{ name, setName }}>
          <Header />
          <Switch>
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Route path="/error" component={() => <h1>Error Page!</h1>} />
            <Route path="/">
              <Redirect to="/restaurants" />
            </Route>
          </Switch>
        </UserProvider>
      </CurrencyProvider>
    </div>
  );
};

export default App;
