import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/about';
import Root from '../root.component';

const RootRoutes = () => {
  return <BrowserRouter basename='react-multiples'>
    <Routes>
      <Route Component={Root} path='/'  />
      <Route Component={Home} path='/home'  />
      <Route Component={About} path='/about'   />
    </Routes>
  </BrowserRouter>
}

export default RootRoutes;