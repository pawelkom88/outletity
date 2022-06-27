import Button from "../button/Button";
import CloseBtn from "../close-button/CloseBtn";
import ShoppingCartItem from "../shopping-cart-item/ShoppingCartItem";
import "./ShoppingCart.scss";

export default function ShoppingCart({handleShoppingCart}) {
  return (
    <div className="shopping-cart">
      <div className="shopping-cart-items-total">
        <span>5 Items</span>
        <CloseBtn onClick={handleShoppingCart} />
      </div>
      <ul className="shopping-cart-items">
        <ShoppingCartItem />
        <ShoppingCartItem />
      </ul>
      <div className="shopping-cart-total">
        <div className="amount">
          <span>Total:</span>
          <span>£214.65</span>
        </div>
        <Button
          onClick={handleShoppingCart}
          path="/BasketSummary"
          content="Go to basket"
          id="dark-background"
        />
      </div>
    </div>
  );
}
