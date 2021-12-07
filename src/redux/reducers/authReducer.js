import { AUTH_LOG_IN, AUTH_LOG_OUT } from '../../constants/authTypes';

const initialState = {
  isLogged: false,
  username: undefined,
  error: undefined,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOG_IN:
      return {
        ...state,
        isLogged: true,
        username: action.payload,
        error: undefined,
      };

    case AUTH_LOG_OUT:
      return {
        ...state,
        isLogged: false,
        username: undefined,
        error: undefined,
      };

    default:
      return state;
  }
};
