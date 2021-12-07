import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../ui/Header';
import { MainContent } from '../ui/MainContent';
import { NavBar } from '../ui/NavBar';
import styles from './PrivateLayout.module.css';

export const PrivateLayout = () => {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      <div className={styles.headerAndContentWrapper}>
        <Header />
        <MainContent>
          <Outlet />
        </MainContent>
      </div>
    </div>
  );
};
