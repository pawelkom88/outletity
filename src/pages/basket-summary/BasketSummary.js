import {CartContext} from "context/CartContext";
import Checkout from "components/UI/checkout/Checkout";
import ShoppingCartItem from "components/UI/shopping-cart-item/ShoppingCartItem";
import "./BasketSummary.scss";

export default function BasketSummary() {
  const {products, total, numberOfItems} = CartContext();

  return (
    <section className="basket-summary-container">
      <div className="basket-products">
        <h2>
          {numberOfItems === 0
            ? "Basket is empty"
            : `${numberOfItems} ${numberOfItems === 1 ? "item" : "items"}`}
        </h2>
        {products &&
          products.map(product => <ShoppingCartItem key={product.id} product={product} />)}
      </div>
      <Checkout products={products} total={total} />
    </section>
  );
}
