// components/ImageSlider.js
"use client"
import { useState, useEffect } from 'react';
import {Image} from "@nextui-org/react";

const ImageSlider = () => {
  const images = [
   { link:'/slider02.webp'},
    {link:'/slider03.webp'},
    {link:'/slider02.webp'},
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to advance to the next image
  const nextSlide = () => {
    if(currentIndex===3
    ){
      setCurrentIndex(0)
    }else {
      setCurrentIndex(currentIndex+1)
    }
  };

  // Use useEffect to set up a timer to automatically advance the slide
  useEffect(() => {
    const timer = setInterval(()=>{
      nextSlide()
    },3000) 
    return () => clearInterval(timer); // Clean up timer on component unmount
  }, []);

  return (
    <div className="relative">
    <Image
      shadow="md"
      loading="eager"
      isBlurred={true}
      src={images[currentIndex].link}
      alt={`Slide `}
      className="w-full h-auto object-cover "
    />
  </div>
  );
};

export default ImageSlider;
