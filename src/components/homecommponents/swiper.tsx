'use client';
import { useEffect } from 'react';
import  Swiper from "swiper"
import{ Navigation ,Grid}  from 'swiper/modules';
import 'swiper/swiper-bundle.css';
const SwiperComponent = () => {
  useEffect(() => {
  
    const swiper = new Swiper('.swiper-container', {
        modules:[Navigation,Grid],
      slidesPerView: 1,
      grid: {
        fill: 'row', 
      },
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          grid: {
            rows: 1, 
          },
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });


    return () => {
      swiper.destroy();
    };
  }, []);

  return null; 
};

export default SwiperComponent;