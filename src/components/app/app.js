import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';

import RestaurantsPage from '../../pages/restaurants-page';
import { CurrencyProvider } from '../../contexts/currency-context';
import Error from '../../pages/error';

const App = () => {
  const [currency, setCurrency] = useState('usd');
  return (
    <div>
      <CurrencyProvider value={{ currency, setCurrency }}>
        <Header />
        <Switch>
          <Route path="/success" component={() => <h1> Спасибо за заказ! </h1>} />
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route path="/error" component={Error} />
          <Redirect to={"/restaurants"} />
        </Switch>
      </CurrencyProvider>
    </div>
  );
};

export default App;
