import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../ui/Footer';
import { Header } from '../ui/Header';
import { MainContent } from '../ui/MainContent';
import { NavBar } from '../ui/NavBar';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <div>
        <NavBar />
        <MainContent>
          <Outlet />
        </MainContent>
      </div>
      <Footer />
    </>
  );
};
