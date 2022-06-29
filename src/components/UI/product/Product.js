import SizeGuide from "components/UI/size-guide/SizeGuide";
import Button from "components/UI/button/Button";
import "./Product.scss";
import {calcDiscount} from "utilities/helpers";
import {useState} from "react";

export default function Product({product}) {
  const [selectedSize, setSelectedSize] = useState(null);
  const {discount, productPrice, discountedPrice} = calcDiscount(product);

  function addToCart() {
    const addedProduct = {
      title: product.title,
      image: product.image,
      size: selectedSize,
      productPrice,
      discountedPrice,
    };

    console.log(addedProduct);

    // send to firebase
  }

  return (
    <div className="product-container">
      <div className="product-img">
        <img src={product.image} alt="Product" />
      </div>
      <article className="product-content">
        <header>
          <h2 className="product-title">{product.title}</h2>
          <span className="product-rating">Customers rating: {product.rating.rate}</span>
        </header>
        <p className="product-desc">{product.description}</p>
        <div className="product-price">
          <div className="price">
            <span>£{productPrice}</span>
            <span>Now: £{discountedPrice}</span>
          </div>
          <span className="discount">SAVE {discount} %</span>
        </div>
        <SizeGuide product={product} setSelectedSize={setSelectedSize} />
        <Button content="Add to basket" id="dark-background" onClick={addToCart} />
      </article>
    </div>
  );
}
