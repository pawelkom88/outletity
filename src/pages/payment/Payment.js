import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import {db} from "../../firebase/config";
import {doc, setDoc, deleteDoc} from "firebase/firestore";
import Button from "components/UI/button/Button";
import Form from "components/UI/form/Form";
import {displayErrorMsg} from "utilities/helpers";
import {CartContext} from "context/CartContext";
import "./Payment.scss";

export default function Payment() {
  const navigate = useNavigate();
  const [isProcessed, setIsProcessed] = useState(false);
  const {products, total, newTotal} = CartContext();

  // handle form
  const formik = useFormik({
    initialValues: {
      card: "",
      name: "",
      ccv: "",
      month: "Month",
      year: "Year",
    },
    validate,
  });

  // fake transaction proccess
  useEffect(() => {
    if (isProcessed) {
      const timer = setTimeout(() => {
        navigate("/Success");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isProcessed, navigate]);

  // set new total to 0
  async function resetTotal(obj) {
    await setDoc(doc(db, "voucher", "code"), obj);
  }

  // delete all products from collection
  async function emptyCart() {
    await products.forEach(product => {
      deleteDoc(doc(db, "PRODUCTS", product.id));
    });
  }

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
        {formik.errors.isValidated && (
          <Button
            content={isProcessed ? "Proccessing" : "Pay"}
            id={formik.errors.isValidated ? "dark-background" : "disabled"}
            onClick={() => {
              setIsProcessed(true);
              resetTotal({total: 0});
              emptyCart();
            }}
          />
        )}
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
