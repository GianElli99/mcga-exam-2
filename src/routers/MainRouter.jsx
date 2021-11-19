import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Layouts
import { MainLayout } from '../components/layouts/MainLayout';
// Screens
import { HomeScreen } from '../components/home/HomeScreen';
import { NotFoundScreen } from '../components/notfound/NotFoundScreen';
import { ProductsScreen } from '../components/products/ProductsScreen';

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="products" element={<ProductsScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
          <Route index element={<HomeScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
