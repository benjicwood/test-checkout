import * as types from '../actions/types';

export default function basket (initialState = {}, action) {
  const newState = Object.assign([], initialState);

  switch (action.type) {
    case types.SET_ITEM_IN_BASKET: return selectItem(newState, action.selectedProduct);
    default: return newState;
  }
}

function selectItem (newState, product) {
  // product.quy = 0;
  Object.assign(product, {qty: 0 });
  return newState.concat(product);
}
