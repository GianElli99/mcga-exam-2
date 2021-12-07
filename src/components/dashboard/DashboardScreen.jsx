import React from 'react';
import styles from './DashboardScreen.module.css';

export const DashboardScreen = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box + ' ' + styles.products}>
        <p>475</p>
        <p>Products</p>
      </div>
      <div className={styles.box + ' ' + styles.users}>Users</div>
      <div className={styles.box + ' ' + styles.sales}>Sales</div>
      <div className={styles.box + ' ' + styles.uptime}>Uptime</div>
    </div>
  );
};
