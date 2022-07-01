import {CartContext} from "context/CartContext";
import Checkout from "components/UI/checkout/Checkout";
import ShoppingCartItem from "components/UI/shopping-cart-item/ShoppingCartItem";
import "./BasketSummary.scss";

export default function BasketSummary() {
  const {products, total, basketQuantity} = CartContext();

  return (
    <section className="basket-summary-container">
      <div className="basket-products">
        <h2>Basket : {basketQuantity}</h2>
        {products &&
          products.map(product => <ShoppingCartItem key={product.id} product={product} />)}
      </div>
      <Checkout total={total} />
    </section>
  );
}
