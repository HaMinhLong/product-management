import { combineReducers } from "redux";

import productsReducer from "./Product/productsReducer";
import usersReducer from "./User/usersReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  users: usersReducer,
});

export default rootReducer;
