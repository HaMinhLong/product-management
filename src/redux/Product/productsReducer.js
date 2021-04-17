import * as actions from "./productsTypes";

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case actions.FETCH_PRODUCTS:
      return {
        items: action.payload,
        filteredItems: action.payload,
      };
    case actions.FETCH_PRODUCT:
      return action.payload;
    case actions.CREATE_PRODUCT:
      return [...state, action.payload];
    case actions.DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.payload);
    case actions.FILTER_PRODUCTS_BY_SIZE:
      return {
        ...state,
        size: action.payload.size,
        filteredItems: action.payload.items,
      };
    case actions.ORDER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        sort: action.payload.sort,
        filteredItems: action.payload.items,
      };
    default:
      return state;
  }
};

export default productsReducer;
