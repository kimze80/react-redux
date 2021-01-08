import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ShoppingCart from '../pages/ShoppingCart';
import Counter from '../pages/Counter';
import ToDo from '../pages/ToDo';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={ShoppingCart} />
    <Route path="/counter" component={Counter} />
    <Route path="/todo" component={ToDo} />
  </Switch>
);

export default Routes;
