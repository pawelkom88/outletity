import useCollection from "hooks/useCollection";
import Checkout from "components/UI/checkout/Checkout";
import ShoppingCartItem from "components/UI/shopping-cart-item/ShoppingCartItem";
import {calcTotal} from "utilities/helpers";
import "./BasketSummary.scss";

export default function BasketSummary() {
  const {products} = useCollection("products");

  let total;
  if (products) {
    total = calcTotal(products);
  }

  return (
    <section className="basket-summary-container">
      <div className="basket-products">
        <h2>Basket : 5 items</h2>
        {products &&
          products.map(product => <ShoppingCartItem key={product.id} product={product} />)}
      </div>
      <Checkout total={total} />
    </section>
  );
}
