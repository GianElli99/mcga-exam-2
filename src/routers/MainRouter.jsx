import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Layouts
import { PrivateLayout } from '../components/layouts/PrivateLayout';
import { PublicLayout } from '../components/layouts/PublicLayout';
// Screens
import { DashboardScreen } from '../components/dashboard/DashboardScreen';
import { ProductsScreen } from '../components/products/ProductsScreen';
import { SignInScreen } from '../components/auth/SignInScreen';
import { SignUpScreen } from '../components/auth/SignUpScreen';
import { ProductsPublicScreen } from '../components/products/ProductsPublicScreen';
// Auth
import { NotRequireAuth } from '../components/auth/NotRequireAuth';
import { RequireAuth } from '../components/auth/RequireAuth';

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NotRequireAuth />}>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<ProductsPublicScreen />} />
            <Route path="login" element={<SignInScreen />} />
            <Route path="signup" element={<SignUpScreen />} />
          </Route>
        </Route>

        <Route path="private" element={<RequireAuth />}>
          <Route element={<PrivateLayout />}>
            <Route index element={<DashboardScreen />} />
            <Route path="products" element={<ProductsScreen />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
