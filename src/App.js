import React from 'react';
import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Hero from './components/Hero';
import CssBaseline from '@mui/material/CssBaseline';
import Nav from './components/Nav';
import MainContent from './components/MainContent';

function App() {
  return (
    <div>
      <CssBaseline/>
      <Nav/>
      <Hero/>
    </div>
  );
}

export default App;
