import React from 'react';
import Hero from '../components/Hero';
import MainContent from '../components/MainContent';
import Nav from '../components/Nav';
import hero1 from '../assets/images/AndiHero_1.JPG';
import hero2 from '../assets/images/AndiHero_2.jpg';
import hero3 from '../assets/images/AndiHero_3.jpg';
import hero4 from '../assets/images/AndiHero_4.jpg';

const images = [hero1, hero2, hero3, hero4];

const styles = {
  root: {
    width: '100%',
    display: 'flex',
  },
};

const Home = () => {
  return (
    <div style={styles.root}>
      <Hero images={images}/>
    </div>  
  );
};

export default Home;
