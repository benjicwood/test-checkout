import * as types from '../actions/types';

export default function price (initialState = {}, action) {
  const newState = Object.assign([0], initialState);

  switch (action.type) {
    case types.SET_PRICE: return setPrice(newState, action.price);
    default: return newState;
  }
}

function setPrice (newState, itemPrice) {
  newState.push(itemPrice);
  var total = newState.reduce((x, y) => x + y);
  newState = [];
  newState.push(total);
  return newState;
}
