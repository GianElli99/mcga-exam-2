import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Layouts
import { MainLayout } from '../components/layouts/MainLayout';
// Screens
import { HomeScreen } from '../components/home/HomeScreen';
import { ProductsScreen } from '../components/products/ProductsScreen';

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeScreen />} />
          <Route path="products" element={<ProductsScreen />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
