import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SignUpAsync } from '../../redux/actions/authActions';
import { ErrorContainer } from '../shared/ErrorContainer';
import { required } from '../utils/FormValidations';
import { TextInput } from '../shared/TextInput';
import { Field, Form } from 'react-final-form';
import Button from '@mui/lab/LoadingButton';
import styles from './SignUpScreen.module.css';

export const SignUpScreen = () => {
  const dispatch = useDispatch();
  const { error, isLoading } = useSelector((state) => state.auth);

  const handleSignUp = (values) => {
    dispatch(
      SignUpAsync({ username: values.username, password: values.password1 })
    );
  };
  const validateFields = (values) => {
    if (values.password1 !== values.password2) {
      return { password2: 'Passwords must be equal' };
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <h2>Sign Up to Easy Buy</h2>
        <p className={styles.greyColor}>{'Enter your details below.'}</p>
        {error && <ErrorContainer message={error} />}
        <Form onSubmit={handleSignUp} validate={validateFields}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div>
                <Field name="username" validate={required}>
                  {({ input, meta }) => (
                    <TextInput input={input} meta={meta} name={'Username'} />
                  )}
                </Field>
              </div>
              <div>
                <Field name="password1" validate={required}>
                  {({ input, meta }) => (
                    <TextInput
                      input={input}
                      meta={meta}
                      name={'Password'}
                      type="password"
                    />
                  )}
                </Field>
                <Field name="password2" validate={required}>
                  {({ input, meta }) => (
                    <TextInput
                      input={input}
                      meta={meta}
                      name={'Confirm Password'}
                      type="password"
                    />
                  )}
                </Field>
              </div>
              <div className={styles.button}>
                <Button
                  type="submit"
                  disabled={isLoading}
                  variant="contained"
                  fullWidth
                >
                  Sign Up
                </Button>
              </div>
            </form>
          )}
        </Form>
      </div>
    </div>
  );
};
