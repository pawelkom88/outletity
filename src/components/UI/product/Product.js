import {db} from "../../../firebase/config";
import {setDoc, doc, getDoc} from "firebase/firestore";
import Button from "components/UI/button/Button";
import {calcDiscount, notifyUser} from "utilities/helpers";
import toast, {Toaster} from "react-hot-toast";
import {v4 as uuidv4} from "uuid";
import "./Product.scss";

export default function Product({product}) {
  const {discount, productPrice, discountedPrice} = calcDiscount(product);

  async function addToCart(product) {
    const addedProduct = {
      id: uuidv4(),
      quantity: 1,
      title: product.title,
      image: product.image,
      productPrice,
      discountedPrice,
      discount,
    };
    const docRef = doc(db, "PRODUCTS", product.title);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      notifyUser(toast.error, "Product has already been added");
    } else {
      await setDoc(doc(db, "PRODUCTS", product.title), addedProduct);
      notifyUser(toast.success, "Product has been added to basket");
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
        <Button content="Add to basket" id="dark-background" onClick={() => addToCart(product)} />
      </article>
      <Toaster position="top-center" />
    </div>
  );
}
