import React from 'react';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <>
      <h1>Layout</h1>
      <Outlet />
    </>
  );
};
