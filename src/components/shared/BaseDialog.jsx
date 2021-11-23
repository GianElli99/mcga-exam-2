import React from 'react';
import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';
import styles from './BaseDialog.module.css';
import { useDispatch } from 'react-redux';
import { unsetAction } from '../../redux/actions/productsActions';

export const BaseDialog = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <Dialog open={true} onClose={() => dispatch(unsetAction())}>
      <div className={styles.wrapper}>{children}</div>
    </Dialog>
  );
};

BaseDialog.propTypes = {
  children: PropTypes.object,
};
