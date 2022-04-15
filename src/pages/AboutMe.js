import React from 'react';
import { Card, Typography, Avatar, Fab, Icon } from '@mui/material';
import AndiProfile from '../assets/images/andiProfile.jpg';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import './AboutMe.css';

const styles = {
  root: {
    margin: '0px',
    padding: '5%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  aboutSection: {
    maxWidth: '800px',
    padding: '5%',
    fontSize: '1.25rem',
  },
  aboutRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'center',
  },
  cardSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  resumeSection: {
    marginTop: '12%',
    minHeight: '10%',
    height: '20%',
    padding: '3%',
    display: 'flex',
    alignItems: 'center',
  },
  header: {
    marginBottom: '10px',
    fontFamily: '\'Cormorant Garamond\', serif',
  },
  avatar: {
    height: '20%',
    width: '20%',
    marginTop: '6%',
    maxWidth: '300px',
    maxheight: '300px',
    minHeight: '150px',
    minWidth: '150px',
    marginRight: '2%',
  },
  downloadIcon: {
    height: '100%',
    width: 'auto',
    marginRight: '7%',
    color: 'white',
  },
  downloadButton: {
    padding: '1%',
    height: '4rem',
    width: '15rem',
    borderRadius: '20px',
    backgroundColor: '#566b59',
    color: 'white',
  },
};

const AboutMe = () => {
  return (
    <div style={styles.root}>
      <div>
        <div style={styles.aboutRow}>
          <Avatar style={styles.avatar} alt="Andi About Picture" src={AndiProfile}/> 
          <div style={styles.cardSection}>
            <Typography variant="h4" style={styles.header}>About Me</Typography>
            <Card style={styles.aboutSection}>Blah blah bah Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card>
          </div>    
        </div>
        <Card style={styles.resumeSection}>
          <Fab variant="extended" style={styles.downloadButton}>
            <SimCardDownloadIcon fontSize="large" style={styles.downloadIcon}/>
            Download Resume
          </Fab>
        </Card>
      </div>
    </div>
  );
};

export default AboutMe;
