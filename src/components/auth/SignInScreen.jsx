import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LogInAsync } from '../../redux/actions/authActions';
import { ErrorContainer } from '../shared/ErrorContainer';
import { required } from '../utils/FormValidations';
import { TextInput } from '../shared/TextInput';
import { Field, Form } from 'react-final-form';
import Button from '@mui/lab/LoadingButton';
import styles from './SignInScreen.module.css';

export const SignInScreen = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const handleLogIn = (values) => {
    dispatch(LogInAsync(values));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <h2>Sign In to Easy Buy</h2>
        <p className={styles.greyColor}>
          {"Enter your details below. (We suggest entering 'Gian')"}
        </p>
        {error && <ErrorContainer message={error} />}
        <Form onSubmit={handleLogIn}>
          {({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div>
                <Field name="username" validate={required}>
                  {({ input, meta }) => (
                    <TextInput input={input} meta={meta} name={'Username'} />
                  )}
                </Field>
              </div>
              <div>
                <Field name="password" validate={required}>
                  {({ input, meta }) => (
                    <TextInput
                      input={input}
                      meta={meta}
                      name={'Password'}
                      type="password"
                    />
                  )}
                </Field>
              </div>
              <div className={styles.button}>
                <Button
                  type="submit"
                  disabled={submitting}
                  variant="contained"
                  fullWidth
                >
                  Sign In
                </Button>
              </div>
            </form>
          )}
        </Form>
      </div>
    </div>
  );
};
