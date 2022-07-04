import useMatchMedia from "hooks/useMatchMedia";
import useCarousel from "hooks/useCarousel";
import {carouselImages} from "utilities/images";

import "./Carousel.scss";

export default function Carousel() {
  const {matches} = useMatchMedia("(max-width: 450px)");

  const {currentImage} = useCarousel(carouselImages);
  return (
    <div className="container-slider">
      <h1 className="slider-msg">
        Favorite brands <br />
        and hottest trends.
      </h1>
      <div className="slide">
        <div className="overlay"></div>
        <img src={matches ? currentImage.srcMobile : currentImage.src} alt="Carousel images" />
      </div>
    </div>
  );
}
