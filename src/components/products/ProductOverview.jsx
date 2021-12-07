import React from 'react';
import PropTypes from 'prop-types';

export const ProductOverview = ({ product }) => {
  return (
    <div>
      {product.isDigital && <p>Free shipping</p>}
      <p>{product.name}</p>
      <p>{product.price}</p>
    </div>
  );
};

ProductOverview.propTypes = {
  product: PropTypes.object.isRequired,
};
