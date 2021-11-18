import React from 'react';
import { ProductList } from './ProductList';
import Button from '@mui/material/Button';

export const ProductsScreen = () => {
  return (
    <div>
      <h2>Products</h2>
      <Button>Picado</Button>
      <ProductList />
    </div>
  );
};
