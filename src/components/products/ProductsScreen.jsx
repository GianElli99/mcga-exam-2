import React from 'react';
import { ProductList } from './ProductList';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import LinearProgress from '@mui/material/LinearProgress';
import styles from './ProductsScreen.module.css';

export const ProductsScreen = () => {
  const { isLoading, actionInProgress, selectedProduct, list } = useSelector(
    (state) => state.products
  );
  console.log(`actionInProgress`, actionInProgress);
  console.log(`actionInProgress`, list);
  console.log(`actionInProgress`, selectedProduct);
  return (
    <div>
      <h2>Products</h2>
      <Button>New Product</Button>
      {isLoading ? (
        <LinearProgress className={styles.progressBar} />
      ) : (
        <ProductList />
      )}
    </div>
  );
};
