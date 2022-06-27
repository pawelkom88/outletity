import ShoppingCartItem from "components/UI/shopping-cart-item/ShoppingCartItem";
import "./BasketSummary.scss";

export default function BasketSummary() {
  return (
    <section className="basket-summary-container">
      <div className="basket-products">
        <h2>Basket</h2>
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
      </div>
      <div className="discount-container">
        <h2>Apply discount</h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, pariatur.
      </div>
    </section>
  );
}
