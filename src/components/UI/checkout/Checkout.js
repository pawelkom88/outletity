import {useState} from "react";
import {db} from "../../../firebase/config";
import {collection, addDoc} from "firebase/firestore";
import Details from "components/footer/footer-mobile/Details";
import Delivery from "components/other/delivery/Delivery";
import Button from "../button/Button";
import {visa, mastercard, paypal} from "utilities/images";
import {voucherCode} from "utilities/helpers";
import useCollection from "hooks/useCollection";
import toast, {Toaster} from "react-hot-toast";
import "./Checkout.scss";

export default function Checkout({total}) {
  const {products: discountedTotal} = useCollection("voucher");
  const [isMatch, setIsMatch] = useState("");
  const ref = collection(db, "voucher");

  // id user input matches voucher code, calculate new total send it to firebase
  async function handleVoucherCode(e) {
    e.preventDefault();
    if (isMatch === voucherCode) {
      await addDoc(ref, {newTotal: total * 0.9});
      voucherSuccess();
    } else {
      voucherError();
    }
  }

  let newTotal;
  // if there is new total in firebase set it to its value
  if (discountedTotal && discountedTotal.length) {
    newTotal = discountedTotal[0].newTotal.toFixed(2);
    // use total before discount otherwise
  } else {
    newTotal = total;
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
        <span>£{newTotal}</span>
      </div>
      <Button path="/Payment" content="Secure Checkout" id="dark-background" />
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

function voucherSuccess() {
  toast.success("Code has been applied");
}
