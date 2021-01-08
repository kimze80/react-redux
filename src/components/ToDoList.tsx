/* eslint-disable array-callback-return */
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../store';
import { IToDoItem } from '../store/modules/todo/types';
import { deleteItem } from '../store/modules/todo/actions';

const ToDoList: React.FC = () => {
  const items = useSelector((state: AppState) => state.todo.list);
  const dispatch = useDispatch();

  const deleteToDoItem = useCallback(
    (id) => {
      dispatch(deleteItem(id));
    },
    [dispatch],
  );

  return (
    <div>
      <ul>
        {items &&
          items.map((i: IToDoItem) => (
            <li id={i.id} key={i.id}>
              {i?.item}{' '}
              <button type="button" onClick={() => deleteToDoItem(i.id)}>
                X
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ToDoList;
