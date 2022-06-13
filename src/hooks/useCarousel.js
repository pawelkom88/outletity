import {useEffect, useRef, useState} from "react";

export default function useCarousel(images) {
  const [index, setIndex] = useState(0);

  const activeSlide = useRef();
  activeSlide.current = nextSlide;

  function nextSlide() {
    if (index < images.length - 1) {
      setIndex(prevIndex => prevIndex + 1);
    } else {
      setIndex(0);
    }
  }

  useEffect(() => {
    const interval = setInterval(activeSlide.current, 10000);
    return () => clearInterval(interval);
  });

  const currentImage = images[index];

  return {currentImage};
}
