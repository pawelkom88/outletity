import {Link} from "react-router-dom";
import {cart} from "utilities/images";
import "./Basket.scss";

export default function Basket({closeMobileMenu}) {
  return (
    <Link onClick={closeMobileMenu} to="/">
      <div role="button" aria-label="show cart" className="basket-container">
        <img className="basket" src={cart} alt="Cart icon" />
        <span data-count="10" className="basket-quantity"></span>
      </div>
    </Link>
  );
}
