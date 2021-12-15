import axios from 'axios';

import {
  AUTH_LOG_IN,
  AUTH_LOG_OUT,
  AUTH_SET_ERROR,
  AUTH_SET_LOADING_TRUE,
} from '../../constants/authTypes';

export const LogIn = (username) => {
  return {
    type: AUTH_LOG_IN,
    payload: username,
  };
};
export const LogOut = () => {
  return {
    type: AUTH_LOG_OUT,
  };
};
export const SetLoading = () => {
  return {
    type: AUTH_SET_LOADING_TRUE,
  };
};
export const SetError = (error) => {
  return {
    type: AUTH_SET_ERROR,
    payload: error,
  };
};

export const LogInAsync = (values) => async (dispatch) => {
  try {
    const res = await axios.post(
      // eslint-disable-next-line no-undef
      `${process.env.REACT_APP_BACKEND_URL_PORT}/api/auth/signin`,
      values
    );
    if (res.status === 200) {
      return dispatch(LogIn(values.username));
    }
  } catch (error) {
    return dispatch(SetError(error?.response?.data?.errors));
  }
};
export const SignUpAsync = (values) => async (dispatch) => {
  try {
    const res = await axios.post(
      // eslint-disable-next-line no-undef
      `${process.env.REACT_APP_BACKEND_URL_PORT}/api/auth/signup`,
      values
    );
    if (res.status === 201) {
      return dispatch(LogIn(values.username));
    }
  } catch (error) {
    return dispatch(SetError(error?.response?.data?.errors));
  }
};
