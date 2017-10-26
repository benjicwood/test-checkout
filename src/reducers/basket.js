import * as types from '../actions/types';

export default function basket (initialState = {}, action) {
  const newState = {...initialState};

  switch (action.type) {
    case types.SET_ITEM_IN_BASKET: return selectItem(newState, action);
    default: return newState;
  }
}

function selectItem (newState, action) {
  console.log(action);
  delete action.type;
  return Object.assign(newState, action);
}
