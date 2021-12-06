import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const NotRequireAuth = () => {
  const [auth] = useState(true);
  return auth === false ? <Outlet /> : <Navigate to="/private" />;
};
