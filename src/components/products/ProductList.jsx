import React from 'react';
import PropTypes from 'prop-types';
import { ProductItem } from './ProductItem';

export const ProductList = ({ products }) => {
  return products.map((product) => (
    <ProductItem key={product._id} product={product} />
  ));
};

ProductList.propTypes = {
  products: PropTypes.array,
};
