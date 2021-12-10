import React from 'react';
import { Outlet } from 'react-router-dom';
import { PublicHeader } from '../ui/PublicHeader';
import styles from './PublicLayout.module.css';
export const PublicLayout = () => {
  return (
    <div className={styles.wrapper}>
      <PublicHeader />
      <Outlet />
    </div>
  );
};
