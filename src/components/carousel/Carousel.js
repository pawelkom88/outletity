import useCarousel from "hooks/useCarousel";
import {imagesArray} from "utilities/images";
import "./Carousel.scss";

export default function Carousel() {
  const {currentImage} = useCarousel(imagesArray);
  return (
    <div className="container-slider">
      <p className="slider-msg">
        Favorite brands <br />
        and hottest trends.
      </p>
      <div className="slide">
        <div className="overlay"></div>
        <img src={currentImage.src} alt="Carousel images" />
        <button>Shop now</button>
      </div>
    </div>
  );
}
