import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Main from './components/Main';
import CssBaseline from '@mui/material/CssBaseline';
import Nav from './components/Nav';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';


const App = () => {


  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  const url = window.location.pathname;

  useEffect(() => {
    if (url == '/portfolio'){
      setCurrentPage('/portfolio');
    } else{
      setCurrentPage(window.location.pathname);
    }
    console.log(url);
  }, [url]);

  const styles = {
    root: {
      color: '#fff',
      backgroundImage: 'linear-gradient(black, grey)',
      backgroundSize: 'cover',
      width: '100%',
      minHeight: '100%',
      margin: '0',
      display: 'flex',
      flexDirection: 'column',
    },
  };

  return (
    <div style={styles.root}>
      <CssBaseline/>
      <Router>
        <Nav/>
        <Main/>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
