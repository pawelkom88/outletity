import {useState} from "react";
import {db} from "../../../firebase/config";
import {setDoc, doc, updateDoc, getDoc} from "firebase/firestore";
import SizeGuide from "components/UI/size-guide/SizeGuide";
import Button from "components/UI/button/Button";
import {calcDiscount} from "utilities/helpers";
import toast, {Toaster} from "react-hot-toast";
import "./Product.scss";

export default function Product({product}) {

  const [selectedSize, setSelectedSize] = useState(false);
  const {discount, productPrice, discountedPrice} = calcDiscount(product);

  // check if product is a certain type of clothes
  const productType = ["T-Shirts", "T Shirt", "Jacket", "Sleeve", "Slim Fit"];
  const selectSize = productType.some(item => product.title.includes(item));

  function handleOnAddtoCart(product) {
    // if product is not an item from productType array just add it to the cart
    if (!selectSize) {
      addToCart(product);
      // if product is an item from productType array and a size is choosen, add it to the cart
    } else if (selectSize && selectedSize) {
      addToCart(product);
      // otherwise notify user that a size needs to be choosen
    } else {
      sizeError();
    }
  }
  async function addToCart(product) {
    const addedProduct = {
      quantity: 1,
      title: product.title,
      image: product.image,
      size: selectedSize,
      productPrice: productPrice,
      discountedPrice: discountedPrice,
    };
    const docRef = doc(db, "PRODUCTS", product.title);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const updatedPrice = Number(docSnap.data().productPrice) + Number(productPrice);
      const updatedDiscountedPrice = updatedPrice * Number((100 - discount) / 100);

      await updateDoc(docRef, {
        quantity: docSnap.data().quantity + 1,
        productPrice: updatedPrice,
        discountedPrice: updatedDiscountedPrice,
      });
    } else {
      await setDoc(doc(db, "PRODUCTS", product.title), addedProduct);
      addedToBasket();
    }
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
        {selectSize && (
          <SizeGuide
            product={product}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
        )}
        <Button
          content="Add to basket"
          id="dark-background"
          onClick={() => handleOnAddtoCart(product)}
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
