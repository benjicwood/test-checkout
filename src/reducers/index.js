import { combineReducers } from 'redux';
import basket from './basket';
import products from './products';
import total from './total';

const allReducers = combineReducers({
  basket: basket,
  products: products,
  total: total
});

export default allReducers;
