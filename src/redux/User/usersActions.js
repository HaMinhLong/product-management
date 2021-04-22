import * as actions from "./usersTypes";

import data from "../../users.json";

export const createUser = (loginUser) => async (dispatch) => {
  try {
    const checkUser = data.users.find(
      (user) => user.username === loginUser.username
    );

    const checkPhoneNumber = data.users.find(
      (user) => user.phoneNumber === loginUser.phoneNumber
    );

    if (!checkUser && checkPhoneNumber) {
      data.users.push(loginUser);
    }

    const messages = checkUser
      ? "This username already in use"
      : checkPhoneNumber
      ? "This phone number already in use"
      : "";
    dispatch({
      type: actions.CREATE_USER,
      payload: messages,
    });
  } catch (error) {
    console.log("Error Create User: " + error.message);
  }
};

export const LoginUser = (username, password) => async (dispatch) => {
  try {
    const user = data.users.find((user) => user.username === username);
    const errorMessages = !user
      ? "Username Not Found"
      : password !== user.password
      ? "Wrong password"
      : "";
    dispatch({
      type: actions.LOGIN,
      payload: errorMessages,
    });
  } catch (error) {
    console.log("Error Login: " + error.message);
  }
};

export const changePassword = (phoneNumber, password) => (dispatch) => {
  try {
    const user = data.users.find((user) => user.phoneNumber === phoneNumber);
    if (user) {
      data.users.map((user) =>
        user.phoneNumber === phoneNumber ? (user.password = password) : user
      );
    }
    const message = !user ? "Wrong phone number" : "";
    dispatch({
      type: actions.CHANGE_PASSWORD,
      payload: message,
    });
  } catch (error) {
    console.log("Error Change Password: " + error.message);
  }
};
