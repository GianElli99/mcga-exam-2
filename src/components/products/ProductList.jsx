import React from 'react';
import PropTypes from 'prop-types';

export const ProductList = ({ products }) => {
  return <div>{products}</div>;
};

ProductList.propTypes = {
  products: PropTypes.array,
};
