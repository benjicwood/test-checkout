import * as types from './types';
import aProducts from '../config/products';

export const setProducts = () => {
  return {
    type: types.SET_PRODUCTS,
    products: aProducts
  };
};

export const selectItem = (productCode) => {
  console.log(productCode);
  return {
    type: types.SET_ITEM_IN_BASKET

  };
};
