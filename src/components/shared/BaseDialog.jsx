import React from 'react';
import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';
import styles from './BaseDialog.module.css';

export const BaseDialog = ({ children }) => {
  return (
    <Dialog open={true}>
      <div className={styles.wrapper}>{children}</div>
    </Dialog>
  );
};

BaseDialog.propTypes = {
  children: PropTypes.object,
};
