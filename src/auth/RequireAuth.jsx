import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const RequireAuth = () => {
  const [auth] = useState(true);
  return auth === true ? <Outlet /> : <Navigate to="/login" />;
};
