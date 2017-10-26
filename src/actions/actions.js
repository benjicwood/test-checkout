import * as types from './types';
import aProducts from '../config/products';

export const setProducts = () => {
  return {
    type: types.SET_PRODUCTS,
    products: aProducts
  };
};

export const selectItem = (product) => {
  return {
    type: types.SET_ITEM_IN_BASKET,
    selectedProduct: product
  };
};
