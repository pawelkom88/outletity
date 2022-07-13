import {useState} from "react";
import {displayErrorMsg} from "utilities/helpers";
import {months, years, deliveryOptions} from "utilities/helpers";
import Select from "components/UI/select/Select";
import "./Form.scss";

export default function Form({formik, children, setDeliveryCharge}) {
  const [creditCardNumber, setCreditCardNumber] = useState("");

  function handleCreditCardNumber(e) {
    const input = e.target.value;
    const numberRegex = /^[0-9\-.]+$/;

    if (input.match(numberRegex)) {
      const number = input.replace(/-/gi, "");
      // add dash every 4 character
      const dashedNumber = number.match(/.{1,4}/g);

      setCreditCardNumber(dashedNumber.join("-"));
    }
  }

  return (
    <form className="payment-form">
      <label htmlFor="card-num">
        <div>Card Number</div>
        {displayErrorMsg(formik.touched.card, formik.errors.card)}
      </label>
      <input
        className="full-width"
        id="card-num"
        type="text"
        maxLength="19"
        pattern="[0-9]*"
        inputMode="numeric"
        placeholder="XXXX-XXXX-XXXX-XXXX"
        value={creditCardNumber}
        onChange={handleCreditCardNumber}
      />
      <button
        style={{width: "100px", margin: "1rem auto", backgroundColor: "red"}}
        type="button"
        onClick={() => setCreditCardNumber("")}>
        clear
      </button>
      <label htmlFor="name-on-a-card">
        <div>Name on Card</div>
        {displayErrorMsg(formik.touched.name, formik.errors.name)}
      </label>
      <input
        className="full-width"
        id="name-on-a-card"
        type="text"
        placeholder="John Smith"
        {...formik.getFieldProps("name")}
      />
      <label htmlFor="month">"Expiration Date"</label>
      <div className="exp-date">
        <div>
          <Select
            className="select"
            name="month"
            id="month-select"
            defaultValue="Month"
            options={months}
            {...formik.getFieldProps("month")}
          />
          <Select
            className="select"
            name="year"
            id="year-select"
            defaultValue="Year"
            options={years}
            {...formik.getFieldProps("year")}
          />
        </div>
        <div>
          <label htmlFor="ccv">CVV</label>
          <input
            id="ccv"
            type="text"
            size="3"
            maxLength="3"
            placeholder="123"
            {...formik.getFieldProps("ccv")}
          />
        </div>
      </div>
      <label htmlFor="delivery-details">
        <div>Delivery options</div>
      </label>
      <select
        className="select"
        name="delivery-details"
        id="delivery-details"
        onChange={e => {
          setDeliveryCharge(e.target.value);
        }}>
        {deliveryOptions.map(option => {
          return (
            <option key={option.id} value={option.value}>
              {option.desc}
            </option>
          );
        })}
      </select>
      {children}
    </form>
  );
}
