import Checkout from "components/UI/checkout/Checkout";
import ShoppingCartItem from "components/UI/shopping-cart-item/ShoppingCartItem";
import "./BasketSummary.scss";

export default function BasketSummary({products, total, setDiscountedTotal, discountedTotal}) {
  let basketQuantity;

  if (products && products.length === 0) {
    basketQuantity = "Basket is empty";
  } else if (products && products.length === 1) {
    basketQuantity = `${products.length} item`;
  } else if (products) {
    basketQuantity = `${products.length} items`;
  }

  return (
    <section className="basket-summary-container">
      <div className="basket-products">
        <h2>Basket : {basketQuantity}</h2>
        {products &&
          products.map(product => <ShoppingCartItem key={product.id} product={product} />)}
      </div>
      <Checkout
        total={total}
        setDiscountedTotal={setDiscountedTotal}
        discountedTotal={discountedTotal}
      />
    </section>
  );
}
