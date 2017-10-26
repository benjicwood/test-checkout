import * as types from './types';
import aProducts from '../config/products';

export const setProducts = () => {
  return {
    type: types.SET_PRODUCTS,
    products: aProducts
  };
};
