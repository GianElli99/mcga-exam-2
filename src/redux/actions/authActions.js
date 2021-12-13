import {
  AUTH_LOG_IN,
  AUTH_LOG_OUT,
  AUTH_SET_ERROR,
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
export const SetError = (error) => {
  return {
    type: AUTH_SET_ERROR,
    payload: error,
  };
};

export const LogInAsync = (values) => async (dispatch) => {
  if (values.username === 'Gian' && values.password === 'Gian') {
    return dispatch(LogIn(values.username));
  } else {
    return dispatch(SetError(["Invalid credentials, Try with 'Gian'"]));
  }
};
