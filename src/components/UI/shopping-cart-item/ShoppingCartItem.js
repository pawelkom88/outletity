import "./ShoppingCartItem.scss";
import {cart, add, remove} from "utilities/images";

export default function ShoppingCartItem() {
  return (
    <li className="shopping-cart-item-li">
      <div className="shopping-cart-item">
        <div className="shopping-cart-item__img">
          <img src={cart} alt="" />
        </div>
        <div className="shopping-cart-item-summary">
          <div className="item-details">
            <span className="item-name">Pants</span>
            <span className="item-size">Size: 34</span>
          </div>
          <div className="item-price">
            <span className="price">£150</span>
            <span className="discounted-price">£120</span>
          </div>
        </div>
      </div>
      <div className="shopping-cart-item-options">
        <button className="remove-item no-styles">Remove</button>
        <div class="item-number">
          <button class="remove no-styles">
            <img width="16px" src={add} alt="" />
          </button>
          <input type="text" value="1" />
          <button class="add no-styles">
            <img width="16px" src={remove} alt="" />
          </button>
        </div>
      </div>
    </li>
  );
}
