import Form from "components/UI/form/Form";
import {useFormik} from "formik";
import {db} from "../../firebase/config";
import {doc, setDoc, deleteDoc} from "firebase/firestore";
import Button from "components/UI/button/Button";
import {displayErrorMsg} from "utilities/helpers";
import {useLocation} from "react-router-dom";
import "./Payment.scss";

export default function Payment() {
  const location = useLocation();
  const {products, total = {}, discountedTotal} = location.state || {};
  const [obj] = discountedTotal || [];
  const {newTotal} = obj || {};

  // set new total to 0
  async function handleNewTotalReset() {
    await setDoc(doc(db, "voucher", "code"), {total: 0});
  }

  // delete all products from collection
  async function emptyCart() {
    await products.forEach(product => {
      deleteDoc(doc(db, "PRODUCTS", product.id));
    });
  }

  // handle form
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
      <Form formik={formik}>
        <h3>Amount due : £{newTotal ? newTotal : total}</h3>
        <Button
          path={formik.errors.isValidated && "/Success"}
          content="Pay"
          id={formik.errors.isValidated ? "dark-background" : "disabled"}
          onClick={() => {
            handleNewTotalReset(obj.id);
            emptyCart();
          }}
        />
      </Form>
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
