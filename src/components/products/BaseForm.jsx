import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { BaseDialog } from '../shared/BaseDialog';
import { ErrorContainer } from '../shared/ErrorContainer';
import { Field, Form } from 'react-final-form';
import Button from '@mui/lab/LoadingButton';
import { TextInput } from '../shared/TextInput';
import Checkbox from '@mui/material/Checkbox';
import styles from './BaseForm.module.css';
import { unsetAction } from '../../redux/actions/productsActions';
import {
  trim,
  minValue,
  required,
  composeValidators,
  mustBeNumber,
} from '../utils/FormValidations';

export const BaseForm = ({ initialState, actionText, onFormSubmit }) => {
  const { isLoading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(unsetAction());
  };

  return (
    <BaseDialog>
      <>
        <h2>{actionText} Technician</h2>
        {error && <ErrorContainer message={error} />}
        <Form onSubmit={onFormSubmit} initialValues={initialState}>
          {({ handleSubmit, submitting, values }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <Field name="name" validate={required}>
                  {({ input, meta }) => (
                    <TextInput input={input} meta={meta} name="Name" />
                  )}
                </Field>
              </div>
              <div>
                <Field name="shortDescription" validate={required}>
                  {({ input, meta }) => (
                    <TextInput
                      input={input}
                      meta={meta}
                      name="Short Description"
                    />
                  )}
                </Field>
              </div>
              <div>
                <Field name="fullDescription" validate={required}>
                  {({ input, meta }) => (
                    <TextInput
                      input={input}
                      meta={meta}
                      name="Full Description"
                    />
                  )}
                </Field>
              </div>
              <div>
                <Field
                  name="price"
                  validate={composeValidators(
                    required,
                    mustBeNumber,
                    minValue(0)
                  )}
                >
                  {({ input, meta }) => (
                    <TextInput input={input} meta={meta} name="Price" />
                  )}
                </Field>
              </div>
              <Field name="isDigital" type="checkbox">
                {({ input }) => (
                  <label>
                    Is Digital?
                    <Checkbox {...input} />
                  </label>
                )}
              </Field>
              <div>
                <Field
                  name="weightInKg"
                  validate={composeValidators(
                    required,
                    mustBeNumber,
                    minValue(0)
                  )}
                  parse={trim}
                >
                  {({ input, meta }) => (
                    <TextInput
                      input={input}
                      value={values.isDigital ? 0 : input.value}
                      meta={meta}
                      name="Weight, in KG"
                      disabled={values.isDigital}
                    />
                  )}
                </Field>
              </div>

              <div className={styles.actionsContainer}>
                <Button
                  disabled={submitting}
                  color="primary"
                  variant="contained"
                  disableRipple
                  type="submit"
                  loading={isLoading}
                  onClick={handleSubmit}
                >
                  {actionText}
                </Button>
                <Button
                  variant="outlined"
                  type="button"
                  color="error"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </Form>
      </>
    </BaseDialog>
  );
};

BaseForm.propTypes = {
  initialState: PropTypes.object.isRequired,
  actionText: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};
