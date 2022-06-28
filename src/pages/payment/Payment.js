import {useState} from "react";
import {useFormik} from "formik";
import Button from "components/UI/button/Button";
import Select from "components/UI/select/Select";
import {displayErrorMsg} from "utilities/functions";
import "./Payment.scss";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const years = [
  new Date().getFullYear(),
  new Date().getFullYear() + 1,
  new Date().getFullYear() + 2,
  new Date().getFullYear() + 3,
  new Date().getFullYear() + 4,
];

const deliveryOptions = ["Standard : £3.95", "Next day : £6.95", "Collection : Free"];

export default function Payment() {
  const [isValidated, setIsValidated] = useState(false);

  function validate(values) {
    const errors = {};

    switch (true) {
      case !values.card: {
        errors.card = "Required";
        break;
      }
      case values.card.length !== 19: {
        errors.card = "Invalid card number. Length must be 19 characters including dashes";
        break;
      }

      case !values.name: {
        errors.name = "Required";
        break;
      }

      case !values.ccv: {
        errors.ccv = "Required";
        break;
      }
      //add proper validation
      case values.ccv.length !== 3: {
        errors.ccv = "Invalid. CVV field requires 3 numbers";
        break;
      }
      case values.delivery === "options": {
        errors.delivery = "Choose delivery method";
        break;
      }
      case values.month === "Month": {
        errors.month = "Choose month";
        break;
      }
      case values.year === "Year": {
        errors.year = "Choose year";
        break;
      }
      default:
    }

    if (Object.keys(errors).length === 0) {
      setIsValidated(true);
    } else {
      setIsValidated(false);
    }

    return errors;
  }

  const formik = useFormik({
    initialValues: {
      card: "",
      name: "",
      ccv: "",
      delivery: "options",
      month: "Month",
      year: "Year",
    },
    validate,
  });

  return (
    <section className="payment-container">
      <h1>Checkout form</h1>
      <div className="error-msg-container">
        {displayErrorMsg(formik.touched.ccv, formik.errors.ccv)}
        {displayErrorMsg(formik.touched.month, formik.errors.month)}
        {displayErrorMsg(formik.touched.year, formik.errors.year)}
      </div>

      <form className="payment-form">
        <label htmlFor="card-num">
          <div>Card Number</div>
          {displayErrorMsg(formik.touched.card, formik.errors.card)}
        </label>
        <input
          className="full-width"
          id="card-num"
          type="text"
          placeholder="XXXX-XXXX-XXXX-XXXX"
          {...formik.getFieldProps("card")}
        />
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
          {displayErrorMsg(formik.touched.delivery, formik.errors.delivery)}
        </label>
        <Select
          className="select"
          name="delivery-details"
          id="delivery-details"
          options={deliveryOptions}
          {...formik.getFieldProps("delivery")}
        />
        <h3>Amount due : £200</h3>
        <Button
          path={isValidated && "/Success"}
          content="Pay"
          id={isValidated ? "dark-background" : "disabled"}
        />
      </form>
    </section>
  );
}
