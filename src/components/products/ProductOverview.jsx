import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductOverview.module.css';

export const ProductOverview = ({ product }) => {
  return (
    <div className={styles.wrapper}>
      {product.isDigital && <p className={styles.freeShiping}>Free shipping</p>}
      <p className={styles.name}>{product.name}</p>
      <p>{product.shortDescription}</p>
      <p>{product.fullDescription}</p>
    </div>
  );
};

ProductOverview.propTypes = {
  product: PropTypes.object.isRequired,
};
