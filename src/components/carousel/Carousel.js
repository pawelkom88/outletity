import Button from "components/button/Button";
import useCarousel from "hooks/useCarousel";
import {imagesArray} from "utilities/images";
import "./Carousel.scss";

export default function Carousel() {
  const {currentImage} = useCarousel(imagesArray);
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
