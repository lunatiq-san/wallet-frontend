// import { set } from "@reduxjs/toolkit/node_modules/immer/dist/internal";
import axios from "axios";
import { authActions } from "./auth-actions";

// axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const signup = (credentials) => async (dispatch) => {
  dispatch(authActions.signupUsersRequest());
  try {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);
    dispatch(authActions.signupUsersSuccess(data));
  } catch (error) {
    dispatch(authActions.signupUsersError(error.message));
  }
};

export const authOperations = {
  signup,
};