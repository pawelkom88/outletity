import CloseBtn from "../close-button/CloseBtn";
import Linkk from "../link/Linkk";
import ShoppingCartItem from "../shopping-cart-item/ShoppingCartItem";
import "./ShoppingCart.scss";

export default function ShoppingCart({products, total, handleShoppingCart, numberOfItems}) {
  return (
    <div className="shopping-cart">
      <div className="shopping-cart-items-total">
        <span>
          {numberOfItems === 0
            ? "Basket is empty"
            : `${numberOfItems} ${numberOfItems === 1 ? "item" : "items"}`}
        </span>
        <CloseBtn onClick={handleShoppingCart} />
      </div>
      <ul className="shopping-cart-items">
        {products &&
          products.map(product => <ShoppingCartItem key={product.id} product={product} />)}
      </ul>
      <div className="shopping-cart-total">
        <div className="amount">
          <span>Total:</span>
          <span>£ {total ? total.toFixed(2) : ""}</span>
        </div>
        <Linkk
          onClick={handleShoppingCart}
          path="/BasketSummary"
          content="Go to basket"
          id="dark-background"
        />
      </div>
    </div>
  );
}
