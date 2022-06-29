import useCollection from "hooks/useCollection";
import useMatchMedia from "hooks/useMatchMedia";
import {useState} from "react";
import {Link} from "react-router-dom";
import {cart} from "utilities/images";
import ShoppingCart from "components/UI/shopping-cart/ShoppingCart";
import {calcTotal} from "utilities/helpers";
import "./Basket.scss";

export default function Basket({isShown, closeMobileMenu}) {
  const {products} = useCollection("products");
  const [showCart, setShowCart] = useState(false);
  const {matches} = useMatchMedia("(max-width: 860px)");

  let total;
  if (products) {
    total = calcTotal(products);
  }

  function handleShoppingCart() {
    if (showCart) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  }

  return (
    <>
      {matches ? (
        <Link
          to="/BasketSummary"
          onClick={closeMobileMenu}
          aria-label="show cart"
          className="basket-container">
          <img className="basket" src={cart} alt="Cart icon" />
          <span data-count="10" className="basket-quantity"></span>
        </Link>
      ) : (
        <button
          onClick={handleShoppingCart}
          aria-label="show cart"
          className="basket-container no-styles">
          <img className="basket" src={cart} alt="Cart icon" />
          <span data-count="0" className="basket-quantity"></span>
        </button>
      )}

      {showCart && !isShown && (
        <ShoppingCart handleShoppingCart={handleShoppingCart} products={products} total={total} />
      )}
    </>
  );
}
