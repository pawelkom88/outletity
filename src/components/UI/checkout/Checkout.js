import {useState} from "react";
import {db} from "../../../firebase/config";
import {doc, setDoc} from "firebase/firestore";
import Details from "components/footer/footer-mobile/Details";
import Delivery from "components/other/delivery/Delivery";
import Button from "../button/Button";
import {visa, mastercard, paypal} from "utilities/images";
import {voucherCode} from "utilities/helpers";
import useCollection from "hooks/useCollection";
import toast, {Toaster} from "react-hot-toast";
import "./Checkout.scss";
import {useEffect} from "react";

export default function Checkout({total}) {
  // const [isApplied, setIsApplied] = useState(false);
  const {products: discountedTotal} = useCollection("voucher");
  const [obj] = discountedTotal || [];
  const {newTotal} = obj || {};

  const [isMatch, setIsMatch] = useState("");
  // if total changes, update it in firebase
  useEffect(() => {
    async function handleTotal() {
      if (obj.applied) {
        await setDoc(doc(db, "voucher", "code"), {newTotal: total * 0.9, applied: true});
        return;
      } else {
        await setDoc(doc(db, "voucher", "code"), {newTotal: total});
      }
    }
    handleTotal();
  }, [total]);

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
