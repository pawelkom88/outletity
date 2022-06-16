import {useEffect, useState} from "react";

export default function useCarousel(images) {
  const [index, setIndex] = useState(0);

  function nextSlide() {
    if (Array.isArray(images) && index < images.length - 1) {
      setIndex(prevIndex => prevIndex + 1);
    } else {
      setIndex(0);
    }
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  });

  const currentImage = images[index];

  return {currentImage};
}
