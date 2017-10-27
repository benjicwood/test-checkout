import { combineReducers } from 'redux';
import basket from './basket';
import products from './products';
import total from './total';
import discount from './discount';

const allReducers = combineReducers({
  basket: basket,
  products: products,
  total: total,
  discount: discount
});

export default allReducers;
