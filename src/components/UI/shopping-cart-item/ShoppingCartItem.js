import {db} from "../../../firebase/config";
import {doc, deleteDoc} from "firebase/firestore";
import {add, remove} from "utilities/images";
import toast, {Toaster} from "react-hot-toast";

import "./ShoppingCartItem.scss";

export default function ShoppingCartItem({product}) {
  function addItem(id) {
    console.log("add");
  }

  function removeItem(id) {
    console.log("remove");
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
            <span className="item-size">{product.size ? `size: ${product.size}` : ""}</span>
          </div>
          <div className="item-price">
            <span className="price">£{product.productPrice}</span>
            <span className="discounted-price">£{product.discountedPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div className="shopping-cart-item-options">
        <button className="remove-item no-styles" onClick={() => handleRemove(product.id)}>
          Remove
        </button>
        <div className="item-number">
          <button className="remove no-styles" onClick={() => addItem(product.id)}>
            <img width="16px" src={add} alt="add" />
          </button>
          <input type="text" value="1" />
          <button className="add no-styles" onClick={() => removeItem(product.id)}>
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
