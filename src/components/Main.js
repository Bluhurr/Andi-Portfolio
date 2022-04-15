import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import ArtistStatement from '../pages/ArtistStatement';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';
import AboutMe from '../pages/AboutMe';

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/portfolio' element={<Portfolio/>}></Route>
      <Route path='/about' element={<AboutMe/>}></Route>
      <Route path='/artist-statement' element={<ArtistStatement/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
  );
};

export default Main;
