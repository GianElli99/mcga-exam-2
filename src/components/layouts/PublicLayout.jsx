import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../ui/Header';

export const PublicLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
