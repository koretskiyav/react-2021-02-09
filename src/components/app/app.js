import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';

import RestaurantsPage from '../../pages/restaurants-page';
import OrderStatusPage from '../../pages/orderstatus-page';
import { UserProvider } from '../../contexts/user-context';
import { CurrencyProvider, CURRENCIES } from '../../contexts/сurrency-context';

const App = () => {
  const [dollars] = CURRENCIES;
  const [name, setName] = useState('Igor');
  const [current, setCurrent] = useState(dollars);

  return (
    <div>
      <CurrencyProvider value={{ current, setCurrent, сurrencies: CURRENCIES }}>
        <UserProvider value={{ name, setName }}>
          <Header />
          <Switch>
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Route path="/error" component={() => <h1>Error Page!</h1>} />
            <Route path="/order_status" component={OrderStatusPage} />
            <Redirect to="/restaurants" />
          </Switch>
        </UserProvider>
      </CurrencyProvider>
    </div>
  );
};

export default App;
