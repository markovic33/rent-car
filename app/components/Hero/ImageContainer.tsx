"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/alfa.png",
    "/audi.png",
    "/car4.png",
    "/mer1.png",
    "/ferari.png",
    "/porche.png",
    "/toyota.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500); // Change the duration (in milliseconds) here

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="relative mx-auto  w-full ">
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl ">
        <Image
          width={1100}
          height={600}
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="h-[500px] w-full object-contain  rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
