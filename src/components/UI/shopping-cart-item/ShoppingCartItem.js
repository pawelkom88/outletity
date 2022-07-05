import {db} from "../../../firebase/config";
import {doc, deleteDoc, getDoc, updateDoc} from "firebase/firestore";
import {add, remove} from "utilities/images";
import toast, {Toaster} from "react-hot-toast";
import {calcDiscount} from "utilities/helpers";
import "./ShoppingCartItem.scss";

export default function ShoppingCartItem({product}) {
  const {discount} = calcDiscount(product);

  async function setQuantity(id, action) {
    const docRef = doc(db, "PRODUCTS", id);
    const docSnap = await getDoc(docRef);
    const product = docSnap.data();

    let productPrice;
    let discountedPrice;
    let quantity;
    const defaultPrice = product.productPrice / product.quantity;
    const currentPrice = product.productPrice;

    if (typeof action === "string" && action === "increase") {
      productPrice = currentPrice + defaultPrice;
      discountedPrice = productPrice * ((100 - discount) / 100);
      quantity = product.quantity + 1;
    } else {
      productPrice = currentPrice - defaultPrice;
      discountedPrice = productPrice * ((100 - discount) / 100);
      quantity = product.quantity - 1;

      if (quantity === 0) {
        handleRemove(id);
        return;
      }
    }

    await updateDoc(docRef, {
      quantity,
      productPrice,
      discountedPrice,
    });
  }

  async function handleRemove(id) {
    const docRef = doc(db, "PRODUCTS", id);
    await deleteDoc(docRef);
    notifyUser();
  }

  return (
    <li className="shopping-cart-item-li">
      <div className="shopping-cart-item">
        <div className="shopping-cart-item__img">
          <img src={product.image} alt="product" />
        </div>
        <div className="shopping-cart-item-summary">
          <div className="item-details">
            <span className="item-name">{product.title}</span>
            <span className="item-quantity">quantity: {product.quantity}</span>
          </div>
          <div className="item-price">
            <span className="price">£{product.productPrice}</span>
            <span className="discounted-price">£{product.discountedPrice}</span>
          </div>
        </div>
      </div>
      <div className="shopping-cart-item-options">
        <button className="remove-item no-styles" onClick={() => handleRemove(product.id)}>
          Remove
        </button>
        <div className="item-number">
          <button className="remove no-styles" onClick={() => setQuantity(product.id, "increase")}>
            <img width="16px" src={add} alt="add" />
          </button>
          <input type="text" value="1" />
          <button className="add no-styles" onClick={() => setQuantity(product.id)}>
            <img width="16px" src={remove} alt="remove" />
          </button>
        </div>
      </div>
      <Toaster position="top-center" />
    </li>
  );
}

function notifyUser() {
  toast.success(" Product has been removed from basket");
}
