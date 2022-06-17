import {cart} from "utilities/images";
import "./Basket.scss";

export default function Basket() {
  return (
    <div className="basket-container">
      <img className="basket" src={cart} alt="Cart icon" />
      <span className="basket-quantity">0</span>
    </div>
  );
}
