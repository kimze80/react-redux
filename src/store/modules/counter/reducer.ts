/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
import { Reducer } from 'redux';
import produce from 'immer';
import { ActionTypes, ICount } from './types';

const INITIAL_STATE: ICount = {
  count: 0,
};

const count: Reducer = (state: ICount = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.positive: {
      return {
        ...state,
        count: state.count + 1,
      };
    }

    case ActionTypes.negative: {
      return {
        ...state,
        count: state.count - 1,
      };
    }

    default: {
      return state;
    }
  }

  // return INITIAL_STATE;
};

export default count;
