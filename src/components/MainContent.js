import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card } from '@mui/material';

const styles = {

  mainContent: {
    marginTop: '10%',
    marginBottom: '10%',
    width: '90%',
    height: '70vh',
    backgroundColor: 'rgba(200, 200, 200, 1)',
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

const MainContent = () => {
  return (
    <Card sx={styles.mainContent}>Main Content</Card>
  );
};

export default MainContent;
