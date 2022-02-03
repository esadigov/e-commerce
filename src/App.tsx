import React from 'react';

import { Header } from './components/Header';
import { HTTP } from './http-client';
import { getApi } from './core/config/config';

import './App.scss';
import { AppRoutes } from './routes';

HTTP.createClient(getApi().api);

const App = () => (
  <div className="App">
    <Header />
    <AppRoutes />
  </div>
);

export default App;
