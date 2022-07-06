import {CartContext} from "context/CartContext";
import Button from "../button/Button";
import CloseBtn from "../close-button/CloseBtn";
import ShoppingCartItem from "../shopping-cart-item/ShoppingCartItem";
import "./ShoppingCart.scss";

export default function ShoppingCart({handleShoppingCart, basketQuantity}) {
  const {products, total} = CartContext();

  return (
    <div className="shopping-cart">
      <div className="shopping-cart-items-total">
        <span>{basketQuantity} </span>
        <CloseBtn onClick={handleShoppingCart} />
      </div>
      <ul className="shopping-cart-items">
        {products &&
          products.map(product => <ShoppingCartItem key={product.id} product={product} />)}
      </ul>
      <div className="shopping-cart-total">
        <div className="amount">
          <span>Total:</span>
          <span>£ {total}</span>
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
