import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Layouts
import { PrivateLayout } from '../components/layouts/PrivateLayout';
import { PublicLayout } from '../components/layouts/PublicLayout';
// Screens
import { HomeScreen } from '../components/home/HomeScreen';
import { ProductsScreen } from '../components/products/ProductsScreen';
import { RequireAuth } from '../auth/RequireAuth';
import { NotRequireAuth } from '../auth/NotRequireAuth';

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NotRequireAuth />}>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<ProductsScreen />} />
            <Route path="login" element={<HomeScreen />} />
          </Route>
        </Route>

        <Route path="private" element={<RequireAuth />}>
          <Route element={<PrivateLayout />}>
            <Route index element={<HomeScreen />} />
            <Route path="products" element={<ProductsScreen />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
