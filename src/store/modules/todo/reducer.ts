/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
import { Reducer } from 'redux';
import produce from 'immer';
import { ActionTypes, IToDoList } from './types';

const INITIAL_STATE: IToDoList = {
  list: [
    { id: 1, item: 'kim' },
    { id: 2, item: 'lee' },
    { id: 3, item: 'park' },
  ],
};

const count: Reducer = (state: IToDoList = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.addToDoItem: {
        const { item, id } = action.payload.list;

        draft.list.push({
          id,
          item,
        });

        break;
      }

      case ActionTypes.deleteItem: {
        const { id } = action.payload;
        draft.list.splice(
          draft.list.findIndex((item) => item.id === id),
          1,
        );
        break;
      }

      default: {
        return draft;
      }
    }
  });

  // return INITIAL_STATE;
};

export default count;
