import Carousel from "react-multi-carousel";
import {Link} from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import "./ProductCarousel.scss";

const responsive = {
  desktop: {
    breakpoint: {max: 3000, min: 861},
    items: 3,
  },
  tablet: {
    breakpoint: {max: 860, min: 481},
    items: 2,
  },
  mobile: {
    breakpoint: {max: 480, min: 0},
    items: 1,
  },
};

export default function ProductCarousel({data}) {
  return (
    <>
      <p className="carousel-intro">You may also like: </p>
      <Carousel centerMode={true} keyBoardControl={true} responsive={responsive}>
        {data &&
          data.map(product => {
            return (
              <Link key={product.id} to={`/ProductInfo/${product.id}`}>
                <img className="product-carousel-img" src={product.image} alt="Product" />
              </Link>
            );
          })}
      </Carousel>
    </>
  );
}
