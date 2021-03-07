import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';

import RestaurantsPage from '../../pages/restaurants-page';
import { UserProvider } from '../../contexts/user-context';

const App = () => {
  const [name, setName] = useState('Igor');

  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/restaurants" />
          </Route>
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route path="/error" component={() => <h1>Error Page!</h1>} />
          <Route
            path="/checkout-success"
            render={(props) => {
              const { message } = props.location;
              return message ? (
                <h1>Success: we received your order</h1>
              ) : (
                <Redirect to="/" />
              );
            }}
          />
          <Route
            path="/checkout-failure"
            render={(props) => {
              const { message } = props.location;
              return message ? (
                <h1>Failure: {message}</h1>
              ) : (
                <Redirect to="/" />
              );
            }}
          />
          <Route component={() => '404 - Not found :('} />
        </Switch>
      </UserProvider>
    </div>
  );
};

export default App;
