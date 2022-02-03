import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home-page';
import { NotFound } from './pages/not-found';
import { ShopPage } from './pages/shop-page';

import './App.scss';
import { Header } from './components/Header';
import { HTTP } from './http-client';
import { getApi } from './core/config/config';

HTTP.createClient(getApi().api);

// qruppiruy module/domen

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

export default App;
