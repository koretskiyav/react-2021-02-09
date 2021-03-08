import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';

import RestaurantsPage from '../../pages/restaurants-page';
import CheckoutThankYouPage from '../../pages/checkout/thankyou-page';
import CheckoutErrorPage from '../../pages/checkout/error-page';
import { UserProvider } from '../../contexts/user-context';
import { CurrencyProvider } from '../../contexts/currency-context';

const App = () => {
  const [name, setName] = useState('Igor');

  return (
    <div>
      <CurrencyProvider>
        <UserProvider value={{ name, setName }}>
          <Header />
          <Switch>
            <Route path="/checkout" component={Basket} />
            <Route path="/checkout-thankyou" component={CheckoutThankYouPage} />
            <Route path="/checkout-error" component={CheckoutErrorPage} />
            <Redirect exact from="/" to="/restaurants" />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Route path="/error" component={() => <h1>Error Page!</h1>} />
            <Route path="/" component={() => '404 - Not found :('} />
          </Switch>
        </UserProvider>
      </CurrencyProvider>
    </div>
  );
};

export default App;
