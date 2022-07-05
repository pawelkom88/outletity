import {useEffect} from "react";
import {doc, setDoc} from "firebase/firestore";
import {db} from "../../../firebase/config";
import Button from "../button/Button";
import CloseBtn from "../close-button/CloseBtn";
import ShoppingCartItem from "../shopping-cart-item/ShoppingCartItem";
import useCollection from "hooks/useCollection";
import "./ShoppingCart.scss";

export default function ShoppingCart({handleShoppingCart, products, total, basketQuantity}) {
  // const {products: discountedTotal} = useCollection("voucher");
  // const [obj] = discountedTotal || [];

  // useEffect(() => {
  //   async function handleTotal() {
  //     if (obj.applied) {
  //       await setDoc(doc(db, "voucher", "code"), {newTotal: total * 0.9, applied: true});
  //       return;
  //     } else {
  //       await setDoc(doc(db, "voucher", "code"), {newTotal: total});
  //     }
  //   }

  //   handleTotal();
  // }, [total]);

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
          <span>£ {total >= 0 ? total : 0}</span>
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
