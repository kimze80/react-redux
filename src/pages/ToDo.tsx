import React from 'react';
import { Provider } from 'react-redux';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import store from '../store';

const ToDo: React.FC = () => {
  return (
    <Provider store={store}>
      <h1>Todo list</h1>
      <ToDoForm />
      <ToDoList />
    </Provider>
  );
};

export default ToDo;
