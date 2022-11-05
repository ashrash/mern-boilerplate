import { combineReducers } from 'redux';
import { reducers as products } from './products';
import { reducers as imageGaller } from './imageGallery';

const rootReducer = combineReducers({
  products,
  imageGaller,
});

export default rootReducer;
