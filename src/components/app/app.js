import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';
import Error from '../error';

import RestaurantsPage from '../../pages/restaurants-page';
import { UserProvider } from '../../contexts/user-context';
import { USD } from '../../contexts/currency/constants';
import { currencies } from '../../contexts/currency/currency-utils';
import { CurrencyProvider } from '../../contexts/currency/currency-context';

const App = () => {
  const [name, setName] = useState('Igor');
  const [activeCurrency, setActiveCurrency] = useState(USD);

  const onChangeHandler = (event) => {
    const currencyValue = event.target.value;
    setActiveCurrency(currencyValue);
  };

  const currency = (
    <select onChange={onChangeHandler}>
      {Object.keys(currencies).map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );

  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <CurrencyProvider value={activeCurrency}>
          <Header currency={currency} />
          <Switch>
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Route path="/error" component={Error} />
            <Route
              path="/success"
              component={() => <p>The order has been successfully sended.</p>}
            />
            <Route path="/" exact>
              <Redirect to="/restaurants/" />
            </Route>
          </Switch>
        </CurrencyProvider>
      </UserProvider>
    </div>
  );
};

export default App;
