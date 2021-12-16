import {
  AUTH_LOG_IN,
  AUTH_LOG_OUT,
  AUTH_SET_ERROR,
  AUTH_SET_LOADING_TRUE,
  AUTH_UNSET_ERROR,
} from '../../constants/authTypes';

const initialState = {
  isLoading: false,
  isLogged: false,
  username: undefined,
  error: undefined,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOG_IN:
      return {
        ...state,
        isLoading: false,
        isLogged: true,
        username: action.payload,
        error: undefined,
      };

    case AUTH_LOG_OUT:
      return {
        ...state,
        isLoading: false,
        isLogged: false,
        username: undefined,
        error: undefined,
      };

    case AUTH_SET_ERROR:
      return {
        ...state,
        error: action.payload || ['An error occurred'],
        isLoading: false,
      };
    case AUTH_UNSET_ERROR:
      return {
        ...state,
        error: undefined,
        isLoading: false,
      };

    case AUTH_SET_LOADING_TRUE:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};
