import Details from "components/footer/footer-mobile/Details";
import Delivery from "components/other/delivery/Delivery";
import React from "react";
import Button from "../button/Button";
import {visa, mastercard, paypal} from "utilities/images";
import "./Checkout.scss";

export default function Checkout() {
  return (
    <div className="discount-container">
      <h2>Discount Code</h2>
      <p>Have a discount code?</p>
      <form className="apply-discount">
        <input type="text" placeholder="Enter a discount code here" />
        <button>Apply</button>
      </form>
      <div className="total">
        <span>Total:</span>
        <span>£200</span>
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
