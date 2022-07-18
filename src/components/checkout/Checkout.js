import {useState} from "react";
import {db} from "../../firebase/config";
import {doc, updateDoc} from "firebase/firestore";
import {Link} from "react-router-dom";
import {visa, mastercard, paypal} from "utilities/images";
import {voucherCode, notifyUser} from "utilities/helpers";
import toast, {Toaster} from "react-hot-toast";
import Button from "../UI/button/Button";
import "./Checkout.scss";

export default function Checkout({products, total}) {
  const [isMatch, setIsMatch] = useState("");
  const {voucherApplied} = products[0] || {};

  async function handleVoucherCode(e) {
    e.preventDefault();
    // if user input matches voucher code, calculate new total and store it in firebase
    if (isMatch === voucherCode && total > 0 && !voucherApplied) {
      await products.forEach(product => {
        const docRef = doc(db, "PRODUCTS", product.title);
        updateDoc(docRef, {
          productPrice: product.productPrice * 0.9,
          discountedPrice: product.discountedPrice * 0.9,
          voucherApplied: true,
        });
      });
      notifyUser(toast.success, "Code has been applied");
    } else if (total <= 0) {
      notifyUser(toast.error, "Basket is empty");
    } else if (voucherApplied) {
      notifyUser(toast.error, "Code has already been used");
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
      {total ? (
        <Link to="/Payment" state={{products}} className="btn" id="dark-background">
          Secure Checkout
        </Link>
      ) : (
        <Button
          content="Secure Checkout"
          id="dark-background"
          onClick={
            total
              ? () => notifyUser(toast.error, "Choose delivery method")
              : () => notifyUser(toast.error, "Basket is empty")
          }
        />
      )}
      <div className="delivery-info">(excluding delivery)</div>
      <div className="payment-icons">
        <img src={mastercard} alt="MasterCard" />
        <img src={visa} alt="Visa" />
        <img src={paypal} alt="PayPal" />
      </div>
      <Toaster position="top-center" />
    </div>
  );
}
