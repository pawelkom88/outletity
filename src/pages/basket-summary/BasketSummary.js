import Checkout from "components/UI/checkout/Checkout";
import ShoppingCartItem from "components/UI/shopping-cart-item/ShoppingCartItem";
import "./BasketSummary.scss";

export default function BasketSummary() {
  const total = 200;

  return (
    <section className="basket-summary-container">
      <div className="basket-products">
        <h2>Basket : 5 items</h2>
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
      </div>
      <Checkout total={total} />
    </section>
  );
}
