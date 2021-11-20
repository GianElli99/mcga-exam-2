import React from 'react';
import { ProductList } from './ProductList';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import LinearProgress from '@mui/material/LinearProgress';
import styles from './ProductsScreen.module.css';
import { ConfirmDelete } from './ConfirmDelete';
import { DELETE } from '../../constants/modalTypes';

export const ProductsScreen = () => {
  const { isLoading, actionInProgress, selectedProduct, list } = useSelector(
    (state) => state.products
  );
  console.log(`actionInProgress`, list);
  console.log(`actionInProgress`, selectedProduct);
  return (
    <div>
      {actionInProgress === DELETE && (
        <ConfirmDelete product={selectedProduct} />
      )}
      <h2>Products</h2>
      <Button>New Product</Button>
      {isLoading && <LinearProgress className={styles.progressBar} />}
      <ProductList products={list} />
    </div>
  );
};
