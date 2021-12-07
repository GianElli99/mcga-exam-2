import { AUTH_LOG_IN, AUTH_LOG_OUT } from '../../constants/authTypes';

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
