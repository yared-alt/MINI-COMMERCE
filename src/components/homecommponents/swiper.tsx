'use client'; // Mark this component as a Client Component
import React, { useEffect } from 'react';
import  Swiper from "swiper"
import{ Navigation ,Grid}  from 'swiper/modules';
import 'swiper/swiper-bundle.css';
const SwiperComponent = () => {
  useEffect(() => {
    // Initialize Swiper on the existing server-rendered content
    const swiper = new Swiper('.swiper-container', {
        modules:[Navigation,Grid],
      // Default settings
      slidesPerView: 1,
      grid: {
         // Number of rows in the grid
        fill: 'row', // Fill rows first
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
            rows: 1, // Switch to 1 row on larger screens
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

    // Cleanup Swiper when the component unmounts
    return () => {
      swiper.destroy();
    };
  }, []);

  return null; // No need to render anything, as the content is already server-rendered
};

export default SwiperComponent;