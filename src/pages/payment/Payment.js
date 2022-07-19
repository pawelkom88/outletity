import {useState, useEffect} from "react";
import {CartContext} from "context/CartContext";
import {useNavigate, useLocation} from "react-router-dom";
import {useFormik} from "formik";
import {db} from "../../firebase/config";
import {doc, getDoc} from "firebase/firestore";
import Button from "components/UI/button/Button";
import Form from "components/payment-form/PaymentForm";
import {
  displayErrorMsg,
  setTotal,
  deliveryOptionTypes,
  deliveryOptions,
  emptyCart,
  calcNewTotal,
} from "utilities/helpers";
import "./Payment.scss";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const {products} = location.state || [];
  const {total} = CartContext();
  const [isProcessed, setIsProcessed] = useState(false);
  const [newTotal, setNewTotal] = useState();

  let deliveryPrice;

  deliveryOptions.find(({name, value}) => {
    if (name === deliveryOptionTypes.standard) {
      deliveryPrice = value;
    }
  });

  const [deliveryCharge, setDeliveryCharge] = useState(deliveryPrice);

  // handle form
  const formik = useFormik({
    initialValues: {
      name: "",
      ccv: "",
      month: "Month",
      year: "Year",
    },
    validate,
  });

  useEffect(() => {
    if (deliveryCharge) {
      calcNewTotal(total, deliveryCharge);
    }
  }, [deliveryCharge, total]);

  // get new total from firebase with delivery charge included and update state
  useEffect(() => {
    async function getNewTotal() {
      const docRef = doc(db, "voucher", "newTotal");
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        throw new Error("document does not exists");
      }
      const {total} = docSnap.data();
      setNewTotal(total);
    }

    getNewTotal();
  }, [deliveryCharge]);

  // imitate transaction proccess
  useEffect(() => {
    if (isProcessed) {
      const timer = setTimeout(() => {
        navigate("/Success");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isProcessed, navigate]);

  // delete all products from collection once transaction is finished
  emptyCart(products);

  return (
    <section className="payment-container">
      <h1>Checkout form</h1>
      <div className="error-msg-container">
        {displayErrorMsg(formik.touched.ccv, formik.errors.ccv)}
        {displayErrorMsg(formik.touched.month, formik.errors.month)}
        {displayErrorMsg(formik.touched.year, formik.errors.year)}
      </div>
      <Form setDeliveryCharge={setDeliveryCharge} formik={formik}>
        <h3>Amount due : £{total === 0 ? 0 : newTotal?.toFixed(2)}</h3>
        <div className="amount-breakdown">
          <span>Delivery : £{deliveryCharge}</span>
          <span>Total: £{total && total.toFixed(2)}</span>
        </div>
        <Button
          content={isProcessed ? "Proccessing" : "Pay"}
          id={formik.errors.isValidated ? "dark-background" : "disabled"}
          onClick={
            formik.errors.isValidated
              ? () => {
                  setIsProcessed(true);
                  setTotal({total: 0});
                  emptyCart();
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
          }}
        />
      </Form>
    </section>
  );
}

function validate(values) {
  const errors = {};

  switch (true) {
    case !values.name: {
      errors.name = "Required";
      break;
    }

    case !values.ccv: {
      errors.ccv = "Required";
      break;
    }
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
