import {useEffect, useState, useRef} from "react";
import Details from "components/footer/footer-mobile/Details";
import Delivery from "components/other/delivery/Delivery";
import React from "react";
import Button from "../button/Button";
import {visa, mastercard, paypal} from "utilities/images";
import {voucherCode} from "utilities/helpers";
import "./Checkout.scss";

export default function Checkout({total, setDiscountedTotal, discountedTotal}) {
  const [isMatch, setIsMatch] = useState(false);

  const discountRef = useRef();

  // set ref to user input
  function handleSubmit(e) {
    e.preventDefault();
    setIsMatch(discountRef.current.value);
  }

  useEffect(() => {
    // update state to new value after entering voucher code (if it matches)
    if (total && isMatch === voucherCode) {
      setDiscountedTotal(total * 0.9);
      // storing discountedTotal in local storage
      localStorage.setItem("newTotal", JSON.stringify(discountedTotal));
      // update state to total before applying voucher only if local storage is empty
    } else if (!("newTotal" in localStorage)) {
      setDiscountedTotal(total);
    }
  }, [total, isMatch, setDiscountedTotal, discountedTotal]);

  return (
    <div className="discount-container">
      <h2>Discount Code</h2>
      <p>Have a discount code?</p>
      <form className="apply-discount" onSubmit={handleSubmit}>
        <input ref={discountRef} type="text" placeholder="Enter a discount code here" />
        <button disabled={isMatch === voucherCode}>Apply</button>
      </form>
      <div className="total">
        <span>Total:</span>
        <span>£{discountedTotal}</span>
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
    </div>
  );
}
