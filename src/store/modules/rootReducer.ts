import { combineReducers } from 'redux';
import cart from './cart/reducer';
import count from './counter/reducer';
import todo from './todo/reducer';

export default combineReducers({
  cart,
  count,
  todo,
});
