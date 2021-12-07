import React from 'react';
import { Outlet } from 'react-router-dom';
import { LogInHeader } from '../ui/LogInHeader';
export const PublicLayout = () => {
  return (
    <div>
      <LogInHeader />
      <Outlet />
    </div>
  );
};
