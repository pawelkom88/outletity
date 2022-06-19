import {cart} from "utilities/images";
import "./Basket.scss";

export default function Basket({menuIsOpen, setMenuIsOpen}) {
  return (
    <div className="basket-container">
      <img
        className="basket"
        src={cart}
        alt="Cart icon"
        onClick={menuIsOpen ? () => setMenuIsOpen(prevState => !prevState) : undefined}
      />
      <span data-count="10" className="basket-quantity"></span>
    </div>
  );
}
