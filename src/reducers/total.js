import * as types from '../actions/types';

export default function total (initialState = {}, action) {
  const newState = Object.assign([0], initialState);

  switch (action.type) {
    case types.SET_TOTAL: return setTotal(newState, action.total);
    default: return newState;
  }
}

function setTotal (newState, itemPrice) {
  newState.push(itemPrice);
  console.log(newState);
  return newState;
}
