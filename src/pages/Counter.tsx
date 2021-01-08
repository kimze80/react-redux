import React from 'react';
import { Provider } from 'react-redux';
import CounterComponent from '../components/CounterComponent';
import store from '../store';

const Counter: React.FC = () => {
  return (
    <Provider store={store}>
      <h1>Counter</h1>
      <CounterComponent />
    </Provider>
  );
};

export default Counter;
