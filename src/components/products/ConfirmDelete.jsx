import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/lab/LoadingButton';
import { BaseDialog } from '../shared/BaseDialog';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteProductsAsync,
  unsetAction,
} from '../../redux/actions/productsActions';
import styles from './ConfirmDelete.module.css';
import { ErrorContainer } from '../shared/ErrorContainer';

export const ConfirmDelete = ({ product }) => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.products);

  const handleCancel = () => dispatch(unsetAction());
  const handleDelete = () => dispatch(deleteProductsAsync(product._id));

  return (
    <BaseDialog>
      <>
        <h2>You are about to delete a Product</h2>
        {error && <ErrorContainer message={error} />}
        <p>{`This will delete ${product._id} permanently.`}</p>
        <p>Are you sure?</p>
        <div className={styles.actionsContainer}>
          <Button onClick={handleCancel} variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            color="error"
            loading={isLoading}
            variant="contained"
          >
            Delete
          </Button>
        </div>
      </>
    </BaseDialog>
  );
};

ConfirmDelete.propTypes = {
  product: PropTypes.object.isRequired,
};
