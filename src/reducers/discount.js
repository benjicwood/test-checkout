import * as types from '../actions/types';

export default function discount (initialState = {}, action) {
  const newState = Object.assign([0], initialState);

  switch (action.type) {
    case types.SET_DISCOUNT: return setDiscount(newState, action.discount);
    default: return newState;
  }
}

function setDiscount (newState, itemPrice) {
  console.log(newState);
  newState.push(itemPrice);
  var total = newState.reduce((x, y) => x + y);
  newState = [];
  newState.push(total);
  return newState;
}
