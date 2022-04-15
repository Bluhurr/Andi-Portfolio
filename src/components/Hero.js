import React, { useRef, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Navigation, Pagination, Scrollbar, Autoplay, EffectFade, EffectFlip } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-flip';


const styles = {
  sliderHero: {
    width: '80%',
    height: '90vh',
    //boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.3)',
    marginBottom: '100px',
  },
  slide: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center center'
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

const Hero = ({ images }) => {

  useEffect(()=>{
    document.documentElement.style.setProperty("--swiper-theme-color", "#fff");
  }, []);

  return (
    <Swiper
      modules={[Navigation, EffectFlip, Pagination, Autoplay]}
      navigation
      grabCursor={true}
      speed={1600}
      effect
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      style={styles.sliderHero}
      pagination={{clickable: true}}
    >
      <SwiperSlide style={styles.slide}>
        <img style={styles.image} src={images[0]}/>
      </SwiperSlide>
      <SwiperSlide style={styles.slide}>
        <img style={styles.image} src={images[1]}/>
      </SwiperSlide>
      <SwiperSlide style={styles.slide}>
        <img style={styles.image} src={images[2]}/>
      </SwiperSlide>
      <SwiperSlide style={styles.slide}>
        <img style={styles.image} src={images[3]}/>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
