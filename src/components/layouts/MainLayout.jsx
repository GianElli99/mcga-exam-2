import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../ui/Footer';
import { Header } from '../ui/Header';
import { MainContent } from '../ui/MainContent';
import { NavBar } from '../ui/NavBar';
import styles from './MainLayout.module.css';

export const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.navAndContentWrapper}>
        <NavBar />
        <MainContent layoutStyles={styles.mainContent}>
          <Outlet />
        </MainContent>
      </div>
      <Footer />
    </div>
  );
};
