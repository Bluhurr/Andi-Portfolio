import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const styles = {
  heroImage: {
    width: '100%',
    height: '90vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/andi-ceramics.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
};

const theme = createTheme({
  palette: {
    primary: {
      light: '#7d8d77',
      main: '#51604b',
      dark: '#283623',
      contrastText: '#fff',
    },
    secondary: {
      light: '#bfa888',
      main: '#f2d9b8',
      dark: '#8e795b',
      contrastText: '#000',
    },
  },
});

const Hero = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={styles.heroImage}></div>
    </ThemeProvider>
  );
};

export default Hero;
