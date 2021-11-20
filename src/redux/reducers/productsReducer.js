import { NONE, CREATE, DELETE, UPDATE } from '../../constants/modalTypes';
import {
  PROD_CREATE_PRODUCT,
  PROD_UPDATE_PRODUCT,
  PROD_DELETE_PRODUCT,
  PROD_SET_ALL_PRODUCTS,
  PROD_SET_ERROR,
  PROD_SET_LOADING_TRUE,
  PROD_SET_CREATE_ACTION,
  PROD_SET_UPDATE_ACTION,
  PROD_SET_DELETE_ACTION,
  PROD_UNSET_ACTION,
} from '../../constants/productsTypes';

const initialState = {
  list: [],
  error: '',
  isLoading: false,
  actionInProgress: NONE,
  selectedProduct: null,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROD_CREATE_PRODUCT:
      return {
        ...state,
        error: '',
        list: [...state.list, action.payload],
        isLoading: false,
        actionInProgress: NONE,
        selectedProduct: null,
      };
    case PROD_UPDATE_PRODUCT:
      return {
        ...state,
        error: '',
        list: state.list.map((prod) =>
          prod.id === action.payload.id ? action.payload : prod
        ),
        isLoading: false,
        actionInProgress: NONE,
        selectedProduct: null,
      };
    case PROD_DELETE_PRODUCT:
      return {
        ...state,
        error: '',
        list: state.list.filter((prod) => prod.id !== action.payload),
        isLoading: false,
        actionInProgress: NONE,
        selectedProduct: null,
      };
    case PROD_SET_ALL_PRODUCTS:
      return {
        ...state,
        list: action.payload,
        error: '',
        isLoading: false,
        actionInProgress: NONE,
        selectedProduct: null,
      };
    case PROD_SET_ERROR:
      return {
        ...state,
        error: action.payload || 'An error ocurred.',
        isLoading: false,
      };
    case PROD_SET_LOADING_TRUE:
      return { ...state, isLoading: true };
    case PROD_SET_CREATE_ACTION:
      return {
        ...state,
        actionInProgress: CREATE,
        error: '',
        selectedProduct: null,
      };
    case PROD_SET_UPDATE_ACTION:
      return {
        ...state,
        actionInProgress: UPDATE,
        selectedTechnician: { ...action.payload },
      };
    case PROD_SET_DELETE_ACTION:
      return {
        ...state,
        actionInProgress: DELETE,
        selectedTechnician: { ...action.payload },
      };
    case PROD_UNSET_ACTION:
      return {
        ...state,
        actionInProgress: NONE,
        selectedTechnician: null,
        error: '',
      };
    default:
      return state;
  }
};
