import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
// Comend
export const RequireAuth = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  return isLogged === true ? <Outlet /> : <Navigate to="/login" />;
};
