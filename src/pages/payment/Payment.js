import {useFormik} from "formik";
import {db} from "../../firebase/config";
import {doc, deleteDoc} from "firebase/firestore";
import Button from "components/UI/button/Button";
import Select from "components/UI/select/Select";
import {displayErrorMsg} from "utilities/helpers";
import {months, years, deliveryOptions} from "utilities/helpers";
import useCollection from "hooks/useCollection";
import "./Payment.scss";

export default function Payment() {
  const {products: discountedTotal} = useCollection("voucher");
  const {products} = useCollection("products");

  // delete new total from collection
  async function handleNewTotalReset(id) {
    const voucherRef = doc(db, "voucher", id);

    await deleteDoc(voucherRef);
  }

  // delete all products from collection
  async function emptyCart() {
    await products.forEach(product => {
      const productsRef = doc(db, "products", product.id);

      deleteDoc(productsRef);
    });
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
        <h3>Amount due : £{discountedTotal && discountedTotal[0].newTotal.toFixed(2)}</h3>
        <Button
          path={formik.errors.isValidated && "/Success"}
          content="Pay"
          id={formik.errors.isValidated ? "dark-background" : "disabled"}
          onClick={() => {
            handleNewTotalReset(discountedTotal[0].id);
            emptyCart();
          }}
        />
      </form>
    </section>
  );
}

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

  // Validate entire form if there are no errors
  if (Object.keys(errors).length === 0) {
    errors.isValidated = true;
  } else {
    errors.isValidated = false;
  }

  return errors;
}
