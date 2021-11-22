import React from 'react';
import { useDispatch } from 'react-redux';
import { createProductAsync } from '../../redux/actions/productsActions';
import { BaseDialog } from '../shared/BaseDialog';
import { BaseForm } from './BaseForm';

export const AddForm = () => {
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(createProductAsync(product));
  };
  const newProduct = {
    name: '',
    price: '',
    shortDescription: '',
    fullDescription: '',
    isDigital: false,
    weightInKg: '0',
  };
  return (
    <BaseDialog>
      <BaseForm
        initialState={newProduct}
        actionText="Create"
        onFormSubmit={handleAdd}
      />
    </BaseDialog>
  );
};
