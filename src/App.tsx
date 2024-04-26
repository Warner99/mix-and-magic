import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './view/pages/home';
import CakeConfigurator from './view/pages/cake-configurator';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='cake-configurator' element={<CakeConfigurator/>}/>
    </Routes>
  );
}

export default App;
