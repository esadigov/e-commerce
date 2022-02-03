import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthPage } from '../pages/auth-page';
import { HomePage } from '../pages/home-page';
import { NotFound } from '../pages/not-found';
import { ShopPage } from '../pages/shop-page';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/shop" element={<ShopPage />} />
    <Route path="/auth" element={<AuthPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
