import useAuthContext from "hooks/useAuthContext";
import {db} from "../../../firebase/config";
import {setDoc, doc, getDoc} from "firebase/firestore";
import Button from "components/UI/button/Button";
import {calcDiscount, notifyUser, discount} from "utilities/helpers";
import toast, {Toaster} from "react-hot-toast";
import Comments from "../comments/Comments";
import "./Product.scss";

export default function Product({product}) {
  const {user} = useAuthContext();
  const {productPrice, discountedPrice} = calcDiscount(product);

  async function addToCart(product) {
    const productObj = {
      uid: user.uid,
      quantity: 1,
      title: product.title,
      image: product.image,
      productPrice,
      discountedPrice,
      discount,
      basePrice: productPrice,
      voucherApplied: false,
    };

    const docRef = doc(db, "PRODUCTS", product.title);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      notifyUser(toast.error, "Product has already been added");
    } else {
      await setDoc(docRef, productObj);
      notifyUser(toast.success, "Product has been added to basket");
    }
  }

  return (
    <>
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
          <Button
            content="Add to basket"
            id="dark-background"
            onClick={
              user
                ? () => addToCart(product)
                : () => notifyUser(toast.error, "Login to continue shopping")
            }
          />
        </article>
        <Toaster position="top-center" />
      </div>
      <Comments title={product.title} />
    </>
  );
}
