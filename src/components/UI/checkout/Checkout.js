import {useState} from "react";
import {db} from "../../../firebase/config";
import {doc, setDoc} from "firebase/firestore";
import {Link} from "react-router-dom";
import {visa, mastercard, paypal} from "utilities/images";
import {voucherCode} from "utilities/helpers";
import toast, {Toaster} from "react-hot-toast";
import Button from "../button/Button";
import {deliveryOptions} from "utilities/helpers";
import {CartContext} from "context/CartContext";
import "./Checkout.scss";

export default function Checkout() {
  const [deliveryCharge, setDeliveryCharge] = useState(false);
  const {products, total, isMatch, setIsMatch, newTotal} = CartContext();
  // set new total to 0
  async function handleNewTotalChange(obj) {
    await setDoc(doc(db, "voucher", "code"), obj);
  }

  async function handleVoucherCode(e) {
    e.preventDefault();
    // if user input matches voucher code, calculate new total and  send it to firebase
    if (isMatch === voucherCode && total > 0) {
      await setDoc(doc(db, "voucher", "code"), {newTotal: total * 0.9, applied: true});
      notifyUser(toast.success, "Code has been applied");
    } else if (total <= 0) {
      notifyUser(toast.error, "Basket is empty");
    } else {
      notifyUser(toast.error, "Code is not valid");
    }
  }

  return (
    <div className="discount-container">
      <h2>Discount Code</h2>
      <p>Have a discount code?</p>
      <form className="apply-discount" onSubmit={handleVoucherCode}>
        <input
          onChange={e => setIsMatch(e.target.value)}
          value={isMatch}
          type="text"
          placeholder="Enter a discount code here"
        />
        <button disabled={!isMatch}>Apply</button>
      </form>
      <div className="total">
        <span>Total:</span>
        <span>£{newTotal ? newTotal : total}</span>
      </div>
      {(total || newTotal) && deliveryCharge ? (
        <Link
          onClick={() =>
            handleNewTotalChange({
              newTotal: (newTotal ? newTotal : total) + Number(deliveryCharge),
            })
          }
          to="/Payment"
          state={{total, products}}
          className="btn"
          id="dark-background">
          Secure Checkout
        </Link>
      ) : (
        <Button
          content="Secure Checkout"
          id="dark-background"
          onClick={
            (total || newTotal) && !deliveryCharge
              ? () => notifyUser(toast.error, "Choose delivery method")
              : () => notifyUser(toast.error, "Basket is empty")
          }
        />
      )}
      <div className="delivery-info">(excluding delivery)</div>

      <label htmlFor="delivery-details">
        <div className="delivery-details__options">Delivery options</div>
      </label>

      <select
        className="select select-delivery"
        name="delivery-details"
        id="delivery-details"
        onChange={e => {
          setDeliveryCharge(e.target.value);
        }}
        >
        {deliveryOptions.map((option, i) => (
          <option key={i} value={option.value}>
            {option.desc}
          </option>
        ))}
      </select>
      <div className="payment-icons">
        <img src={mastercard} alt="MasterCard" />
        <img src={visa} alt="Visa" />
        <img src={paypal} alt="PayPal" />
      </div>
      <Toaster position="top-center" />
    </div>
  );
}

function notifyUser(func, msg) {
  func(msg);
}
