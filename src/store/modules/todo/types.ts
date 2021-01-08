export enum ActionTypes {
  addToDoItem = 'ADD_TO_DO_ITEM',
  deleteItem = 'DELETE_TO_DO_ITEM',
}

export interface IToDoItem {
  id: any;
  item: string;
}

export interface IToDoList {
  list: IToDoItem[];
}
