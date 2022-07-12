import useAuthContext from "hooks/useAuthContext";
import {CartContext} from "context/CartContext";
import useMatchMedia from "hooks/useMatchMedia";
import {useState} from "react";
import {Link} from "react-router-dom";
import {cart} from "utilities/images";
import ShoppingCart from "components/UI/shopping-cart/ShoppingCart";

import "./Basket.scss";

export default function Basket({isShown, closeMobileMenu}) {
  const {user} = useAuthContext();
  const {products, total, numberOfItems} = CartContext();
  const [showCart, setShowCart] = useState(false);
  const {matches} = useMatchMedia("(max-width: 860px)");

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
          {user && <span data-count={numberOfItems} className="basket-quantity"></span>}
        </Link>
      ) : (
        <button
          onClick={handleShoppingCart}
          aria-label="show cart"
          className="basket-container no-styles">
          <img className="basket" src={cart} alt="Cart icon" />
          {user && <span data-count={numberOfItems} className="basket-quantity"></span>}
        </button>
      )}

      {showCart && !isShown && user && (
        <ShoppingCart
          handleShoppingCart={handleShoppingCart}
          products={products}
          total={total}
          numberOfItems={numberOfItems}
        />
      )}
    </>
  );
}
