import React, { useEffect } from 'react';
import { ProductList } from './ProductList';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import LinearProgress from '@mui/material/LinearProgress';
import styles from './ProductsScreen.module.css';
import { ConfirmDelete } from './ConfirmDelete';
import { CREATE, DELETE, UPDATE } from '../../constants/modalTypes';
import {
  getProductsAsync,
  setCreateAction,
} from '../../redux/actions/productsActions';
import { AddForm } from './AddForm';
import { UpdateForm } from './UpdateForm';

export const ProductsScreen = () => {
  const dispatch = useDispatch();
  const { isLoading, actionInProgress, selectedProduct, list } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProductsAsync());
    return () => {};
  }, []);

  return (
    <div>
      {actionInProgress === DELETE && (
        <ConfirmDelete product={selectedProduct} />
      )}
      {actionInProgress === CREATE && <AddForm />}
      {actionInProgress === UPDATE && <UpdateForm product={selectedProduct} />}
      <h2>Products</h2>
      <Button onClick={() => dispatch(setCreateAction())}>New Product</Button>
      {isLoading && <LinearProgress className={styles.progressBar} />}
      <ProductList products={list} />
    </div>
  );
};
