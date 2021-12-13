import React from 'react';
import styles from './DashboardScreen.module.css';

export const DashboardScreen = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box + ' ' + styles.products}>
        <p className={styles.number}>475</p>
        <p className={styles.category}>Products</p>
      </div>
      <div className={styles.box + ' ' + styles.users}>
        <p className={styles.number}>+999</p>
        <p className={styles.category}>Users</p>
      </div>
      <div className={styles.box + ' ' + styles.sales}>
        <p className={styles.number}>4532</p>
        <p className={styles.category}>Sales</p>
      </div>
      <div className={styles.box + ' ' + styles.uptime}>
        <p className={styles.number}>99,8%</p>
        <p className={styles.category}>Uptime</p>
      </div>
    </div>
  );
};
