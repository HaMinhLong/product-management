import * as actions from "./usersTypes";

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case actions.CREATE_USER:
      return action.payload;
    case actions.LOGIN:
      return action.payload;
    case actions.CHANGE_PASSWORD:
      return action.payload;
    default:
      return state;
  }
};

export default usersReducer;
