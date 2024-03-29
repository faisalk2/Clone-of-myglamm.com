import {
  AUTHENTICATION_REQUEST,
  AUTHENTICATION_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from "./type";

export const loginUser = (payload) => (dispatch) => {
  dispatch({ type: AUTHENTICATION_REQUEST });
  dispatch({ type: AUTHENTICATION_SUCCESS, payload: payload });
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: LOGOUT_REQUEST });
  dispatch({ type: LOGOUT_SUCCESS });
};
