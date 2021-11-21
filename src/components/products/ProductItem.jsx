import React from 'react';
import { FaTimes as DeleteIcon } from 'react-icons/fa';
import { MdEdit as EditIcon } from 'react-icons/md';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './ProductItem.module.css';
import {
  setDeleteAction,
  setUpdateAction,
} from '../../redux/actions/productsActions';

export const ProductItem = ({ product }) => {
  const { name, isDigital, price } = product;
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <span className={styles.title}>Name</span>
        <span className={styles.content}>{name}</span>
      </div>
      <div className={styles.column}>
        <span className={styles.title}>Price</span>
        <span className={styles.content}>{price}</span>
      </div>
      <div className={styles.column}>
        <span className={styles.title}>Is Digital</span>
        <span className={styles.content}>{isDigital ? 'Yes' : 'No'}</span>
      </div>
      <div className={styles.actions}>
        <EditIcon
          className={styles.editIcon}
          onClick={() => dispatch(setUpdateAction(product))}
        />
        <DeleteIcon
          className={styles.deleteIcon}
          onClick={() => dispatch(setDeleteAction(product))}
        />
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};
