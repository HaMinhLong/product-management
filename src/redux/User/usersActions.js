import * as actions from "./usersTypes";

export const createUser = (user) => async (dispatch) => {
  try {
    dispatch({
      type: actions.CREATE_USER,
      payload: user,
    });
  } catch (error) {
    console.log("Error Create User: " + error.message);
  }
};
