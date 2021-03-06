import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';
import Error from '../error';

import RestaurantsPage from '../../pages/restaurants-page';
import { UserProvider } from '../../contexts/user-context';

const App = () => {
  const [name, setName] = useState('Igor');

  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <Header />
        <Switch>
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route path="/error" component={Error} />
          <Route path="/" exact>
            <Redirect to="/restaurants/" />
          </Route>
        </Switch>
      </UserProvider>
    </div>
  );
};

export default App;
