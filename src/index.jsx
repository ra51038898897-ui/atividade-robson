import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './pages/app/App';
import Contador from './pages/contador'
import Titulo from './pages/titulo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/contador' element={<Contador/>}/>
      <Route path='/titulo' element={<Titulo/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
