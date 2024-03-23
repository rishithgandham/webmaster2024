import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// use create browser router after pull
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Solar from './pages/solar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Wind from './pages/wind';
import Geothermal from './pages/geothermal';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/solar" element={<Solar />} />
        <Route path='/wind' element={<Wind/>}/>
        <Route path='/geothermal' element={<Geothermal/>}/>
      </Routes>
      
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
