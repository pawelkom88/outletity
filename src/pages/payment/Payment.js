import {useState, useEffect} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {useFormik} from "formik";
import {db} from "../../firebase/config";
import {doc, deleteDoc} from "firebase/firestore";
import Button from "components/UI/button/Button";
import Form from "components/UI/form/Form";
import {displayErrorMsg, handleNewTotalChange} from "utilities/helpers";
import "./Payment.scss";

export default function Payment() {
  const location = useLocation();
  const {total, products} = location.state || [];
  const navigate = useNavigate();
  const [isProcessed, setIsProcessed] = useState(false);

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

  // delete all products from collection
  async function emptyCart() {
    await products.forEach(product => {
      deleteDoc(doc(db, "PRODUCTS", product.id));
    });
  }

  // Empty basket and set total to 0
  function reset(obj) {
    handleNewTotalChange(obj);
    emptyCart();
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
        <h3>Amount due : £{total ? total.toFixed(2) : ""}</h3>
        <Button
          content={isProcessed ? "Proccessing" : "Pay"}
          id={formik.errors.isValidated ? "dark-background" : "disabled"}
          onClick={
            formik.errors.isValidated
              ? () => {
                  setIsProcessed(true);
                  reset({total: 0});
                }
              : undefined
          }
        />
        <br />
        <Button
          content="Cancel"
          id="dark-background"
          onClick={() => {
            navigate("/");
            reset({total: 0});
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
