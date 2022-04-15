import React from 'react';
import ImageListSection from '../components/ImageListSection';
import Nav from '../components/Nav';

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    flex: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'auto',
    height: '10vh',
    padding: '15px',
    flexDirection: 'column',
  },
  imageListSection: {
    overflow: 'auto',
  },
};

const Portfolio = () =>{
  return (
    <div style={styles.root}>
      <ImageListSection style={styles.imageListSection}/>
    </div>
  );
};

export default Portfolio;
