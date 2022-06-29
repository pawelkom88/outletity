import {db} from "../../../firebase/config";
import {doc, deleteDoc} from "firebase/firestore";
import "./ShoppingCartItem.scss";
import {add, remove} from "utilities/images";

export default function ShoppingCartItem({product}) {
  async function handleRemove(id) {
    const docRef = doc(db, "products", id);

    await deleteDoc(docRef);
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
            <span className=".item-size">{product.size}</span>
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
          <button className="remove no-styles">
            <img width="16px" src={add} alt="add" />
          </button>
          <input type="text" value="1" />
          <button className="add no-styles">
            <img width="16px" src={remove} alt="remove" />
          </button>
        </div>
      </div>
    </li>
  );
}
