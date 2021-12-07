import React from 'react';
import { Outlet } from 'react-router-dom';
import { PublicHeader } from '../ui/PublicHeader';
export const PublicLayout = () => {
  return (
    <div>
      <PublicHeader />
      <Outlet />
    </div>
  );
};
