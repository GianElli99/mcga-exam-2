import React from 'react';
import { BaseDialog } from '../shared/BaseDialog';
import { BaseForm } from './BaseForm';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateProductAsync } from '../../redux/actions/productsActions';

export const UpdateForm = ({ product }) => {
  const dispatch = useDispatch();
  const handleUpdate = (product) => {
    dispatch(updateProductAsync(product));
  };

  return (
    <BaseDialog>
      <BaseForm
        initialState={product}
        actionText="Update"
        onFormSubmit={handleUpdate}
      />
    </BaseDialog>
  );
};

UpdateForm.propTypes = {
  product: PropTypes.object.isRequired,
};
