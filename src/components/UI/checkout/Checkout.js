import {useState} from "react";
import {db} from "../../../firebase/config";
import {doc, setDoc} from "firebase/firestore";
import {Link} from "react-router-dom";
import {visa, mastercard, paypal} from "utilities/images";
import {voucherCode, notifyUser} from "utilities/helpers";
import toast, {Toaster} from "react-hot-toast";
import Button from "../button/Button";
import {deliveryOptions, discount} from "utilities/helpers";
import {handleNewTotalChange} from "utilities/helpers";
import "./Checkout.scss";

export default function Checkout({products, total}) {
  const [isMatch, setIsMatch] = useState("");
  const [deliveryCharge, setDeliveryCharge] = useState(false);

  async function handleVoucherCode(e) {
    e.preventDefault();
    // if user input matches voucher code, calculate new total and  send it to firebase
    if (isMatch === voucherCode && total > 0) {
      await setDoc(doc(db, "voucher", "code"), {total: total * ((100 - discount) / 100)});
      notifyUser(toast.success, "Code has been applied");
    } else if (total <= 0) {
      notifyUser(toast.error, "Basket is empty");
    } else {
      notifyUser(toast.error, "Code is not valid");
    }
    setIsMatch("");
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
        <span>£{total ? total.toFixed(2) : ""}</span>
      </div>
      {total && deliveryCharge ? (
        <Link
          onClick={() =>
            handleNewTotalChange({
              total: total + Number(deliveryCharge),
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
            total && !deliveryCharge
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
        }}>
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
