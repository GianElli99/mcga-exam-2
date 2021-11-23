import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainContent.module.css';

export const MainContent = ({ children }) => {
  return <main className={styles.mainContent}>{children}</main>;
};

MainContent.propTypes = {
  children: PropTypes.object.isRequired,
};
