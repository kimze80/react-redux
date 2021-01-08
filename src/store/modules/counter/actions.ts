/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ActionTypes } from './types';

export function positive() {
  return {
    type: ActionTypes.positive,
  };
}

export function negative() {
  return {
    type: ActionTypes.negative,
  };
}
