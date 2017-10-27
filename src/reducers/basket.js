import * as types from '../actions/types';

export default function basket (initialState = {}, action) {
  const newState = Object.assign([], initialState);

  switch (action.type) {
    case types.SET_ITEM_IN_BASKET: return selectItem(newState, action.selectedProduct);
    case types.BOGOF_OFFER: return bogofOffer(newState, action.selectedProduct);
    default: return newState;
  }
}

function selectItem (newState, product) {
  if (newState.indexOf(product) === -1) {
    Object.assign(product, {qty: 1});
    return newState.concat(product);
  }
  product.qty += 1;
  return newState;
}

function bogofOffer (newState, product) {
  if (product.qty % 2 === 0) {
    Object.assign(product, {bogof: 'BOGOF!'});
  } else {
    Object.assign(product, {bogof: ''});
  }
  return newState;
}
