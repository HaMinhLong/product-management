import * as actions from "./productsTypes";

const productReducer = (state = [], action) => {
  switch (action.type) {
    case actions.FETCH_PRODUCTS:
      return action.payload;
    case actions.FETCH_PRODUCT:
      return action.payload;
    case actions.CREATE_PRODUCT:
      return [...state, action.payload];
    case actions.DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.payload);
    default:
      return state;
  }
};

export default productReducer;
