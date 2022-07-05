import {db} from "../../../firebase/config";
import {doc, setDoc} from "firebase/firestore";
import Details from "components/footer/footer-mobile/Details";
import Delivery from "components/other/delivery/Delivery";
import {Link} from "react-router-dom";
import {visa, mastercard, paypal} from "utilities/images";
import {voucherCode} from "utilities/helpers";
import toast, {Toaster} from "react-hot-toast";
import useVoucher from "hooks/useVoucher";
import "./Checkout.scss";
import Button from "../button/Button";

export default function Checkout({total, products}) {
  const {isMatch, setIsMatch, newTotal, discountedTotal} = useVoucher(total);

  // id user input matches voucher code, calculate new total and  send it to firebase
  async function handleVoucherCode(e) {
    e.preventDefault();
    if (isMatch === voucherCode) {
      await setDoc(doc(db, "voucher", "code"), {newTotal: total * 0.9, applied: true});
      voucherSuccess();
    } else {
      await setDoc(doc(db, "voucher", "code"), {newTotal: total, applied: false});
      voucherError();
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
        <span>£{newTotal ? newTotal.toFixed(2) : total}</span>
      </div>
      {total || newTotal ? (
        <Link
          to="/Payment"
          state={{total, products, discountedTotal}}
          className="btn"
          id="dark-background">
          Secure Checkout
        </Link>
      ) : (
        <Button content="Secure Checkout" id="dark-background" onClick={emptyBasket}/>
      )}
      <div className="delivery-info">(excluding delivery)</div>
      <Details title="Delivery Information">
        <Delivery />
      </Details>
      <div className="payment-icons">
        <img src={mastercard} alt="MasterCard" />
        <img src={visa} alt="Visa" />
        <img src={paypal} alt="PayPal" />
      </div>
      <Toaster position="top-center" />
    </div>
  );
}

function voucherError() {
  toast.error("Code is not valid");
}

function emptyBasket() {
  toast.error("Basket is empty");
}

function voucherSuccess() {
  toast.success("Code has been applied");
}
