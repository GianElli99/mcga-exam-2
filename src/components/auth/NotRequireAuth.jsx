import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const NotRequireAuth = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  return isLogged === false ? <Outlet /> : <Navigate to="/private" />;
};
