import axios from 'axios';
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

export const createProduct = (product) => {
  return {
    type: PROD_CREATE_PRODUCT,
    payload: product,
  };
};
export const updateProduct = (product) => {
  return {
    type: PROD_UPDATE_PRODUCT,
    payload: product,
  };
};
export const deleteProduct = (productId) => {
  return {
    type: PROD_DELETE_PRODUCT,
    payload: productId,
  };
};
export const setProducts = (products) => {
  return {
    type: PROD_SET_ALL_PRODUCTS,
    payload: products,
  };
};
export const setError = (error) => {
  console.log(error);
  let formatted = error.join('. ');
  console.log(formatted);
  return {
    type: PROD_SET_ERROR,
    payload: formatted,
  };
};
export const setLoadingTrue = () => {
  return {
    type: PROD_SET_LOADING_TRUE,
  };
};
export const setCreateAction = () => {
  return {
    type: PROD_SET_CREATE_ACTION,
  };
};
export const setDeleteAction = (product) => {
  return {
    type: PROD_SET_DELETE_ACTION,
    payload: product,
  };
};
export const setUpdateAction = (product) => {
  return {
    type: PROD_SET_UPDATE_ACTION,
    payload: product,
  };
};
export const unsetAction = () => {
  return {
    type: PROD_UNSET_ACTION,
  };
};
export const getProductsAsync = () => async (dispatch) => {
  dispatch(setLoadingTrue());
  try {
    const res = await axios.get(
      // eslint-disable-next-line no-undef
      `${process.env.REACT_APP_BACKEND_URL_PORT}/products`
    );
    if (res.status === 200) {
      return dispatch(setProducts(res.data));
    }
  } catch (error) {
    return dispatch(setError(error?.response?.data?.errors));
  }
};
export const deleteProductsAsync = (productId) => async (dispatch) => {
  dispatch(setLoadingTrue());
  try {
    const res = await axios.delete(
      // eslint-disable-next-line no-undef
      `${process.env.REACT_APP_BACKEND_URL_PORT}/products/${productId}`
    );
    if (res.status === 200) {
      return dispatch(deleteProduct(productId));
    }
  } catch (error) {
    return dispatch(setError(error?.response?.data?.errors));
  }
};
export const createProductAsync = (product) => async (dispatch) => {
  dispatch(setLoadingTrue());
  try {
    const res = await axios.post(
      // eslint-disable-next-line no-undef
      `${process.env.REACT_APP_BACKEND_URL_PORT}/products`,
      product
    );
    if (res.status === 201) {
      return dispatch(createProduct(res.data));
    }
  } catch (error) {
    return dispatch(setError(error?.response?.data?.errors));
  }
};
export const updateProductAsync = (product) => async (dispatch) => {
  dispatch(setLoadingTrue());
  try {
    const res = await axios.put(
      // eslint-disable-next-line no-undef
      `${process.env.REACT_APP_BACKEND_URL_PORT}/products/${product._id}`,
      product
    );
    if (res.status === 200) {
      return dispatch(updateProduct(res.data));
    }
  } catch (error) {
    return dispatch(setError(error?.response?.data?.errors));
  }
};
