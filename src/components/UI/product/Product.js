import {useState} from "react";
import {db} from "../../../firebase/config";
import {collection, addDoc} from "firebase/firestore";
import SizeGuide from "components/UI/size-guide/SizeGuide";
import Button from "components/UI/button/Button";
import {calcDiscount} from "utilities/helpers";
import toast, {Toaster} from "react-hot-toast";
import {v4 as uuidv4} from "uuid";

import "./Product.scss";

export default function Product({product}) {
  const [selectedSize, setSelectedSize] = useState(false);
  const {discount, productPrice, discountedPrice} = calcDiscount(product);

  async function addToCart() {
    const addedProduct = {
      id: uuidv4(),
      title: product.title,
      image: product.image,
      size: selectedSize,
      productPrice,
      discountedPrice,
    };

    const ref = collection(db, "products");

    await addDoc(ref, addedProduct);

    addedToBasket();
    // check if item with same size is in the basket
  }

  return (
    <div className="product-container">
      <div className="product-img">
        <img src={product.image} alt="Product" />
      </div>
      <article className="product-content">
        <header>
          \<h2 className="product-title">{product.title}</h2>
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
        <SizeGuide
          product={product}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
        <Button
          content="Add to basket"
          id="dark-background"
          onClick={selectedSize ? addToCart : sizeError}
        />
      </article>
      <Toaster position="top-center" />
    </div>
  );
}

function sizeError() {
  toast.error("Select size");
}

function addedToBasket() {
  toast.success(" Product has been added to basket");
}
