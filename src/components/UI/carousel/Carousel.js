import Button from "components/UI/button/Button";
import useCarousel from "hooks/useCarousel";
import {carouselImages} from "utilities/images";
import "./Carousel.scss";

export default function Carousel() {
  const {currentImage} = useCarousel(carouselImages);
  return (
    <div className="container-slider">
      <h1 className="slider-msg">
        Favorite brands <br />
        and hottest trends.
      </h1>
      <div className="slide">
        <div className="overlay"></div>
        <img src={currentImage.src} alt="Carousel images" />
        <Button content={"Shop now"} />
      </div>
    </div>
  );
}
