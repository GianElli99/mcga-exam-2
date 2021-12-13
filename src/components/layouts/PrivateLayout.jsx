import React from 'react';
import { Outlet } from 'react-router-dom';
import { PrivateHeader } from '../ui/PrivateHeader';
import { MainContent } from '../ui/MainContent';
import { NavBar } from '../ui/NavBar';
import styles from './PrivateLayout.module.css';

export const PrivateLayout = () => {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      <div className={styles.headerAndContentWrapper}>
        <PrivateHeader />
        <MainContent>
          <Outlet />
        </MainContent>
      </div>
    </div>
  );
};
