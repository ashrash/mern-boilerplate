import { combineReducers } from 'redux';
import { reducers as products } from './products';

const rootReducer = combineReducers({
  products,
});

export default rootReducer;
