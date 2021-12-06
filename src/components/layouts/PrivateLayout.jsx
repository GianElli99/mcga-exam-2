import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../ui/Footer';
import { Header } from '../ui/Header';
import { MainContent } from '../ui/MainContent';
import { NavBar } from '../ui/NavBar';
import styles from './PrivateLayout.module.css';

export const PrivateLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.navAndContentWrapper}>
        <NavBar />
        <MainContent>
          <Outlet />
        </MainContent>
      </div>
      <Footer />
    </div>
  );
};
