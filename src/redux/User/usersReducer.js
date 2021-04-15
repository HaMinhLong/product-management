import * as actions from "./usersTypes";

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case actions.CREATE_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default usersReducer;
