/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ActionTypes, IToDoItem } from './types';

export function addToDoItem(list: IToDoItem) {
  return {
    type: ActionTypes.addToDoItem,
    payload: {
      list,
    },
  };
}

export function deleteItem(id: string) {
  return {
    type: ActionTypes.deleteItem,
    payload: {
      id,
    },
  };
}
