import * as actions from "./productsTypes";

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case actions.FETCH_PRODUCTS:
      return action.payload;
    case actions.FETCH_PRODUCT:
      return action.payload;
    case actions.CREATE_PRODUCT:
      return [...state, action.payload];
    case actions.DELETE_PRODUCT:
      return action.payload;

    default:
      return state;
  }
};

export default productsReducer;
