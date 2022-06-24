import Button from "components/UI/button/Button";
import Modal from "../modal/Modal";
import toast, {Toaster} from "react-hot-toast";
import Input from "components/UI/input/Input";
import {useFormik} from "formik";
import "./NewsletterModal.scss";

export default function NewsletterModal({toggle}) {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: notifyUser,
  });

  // // future use
  // toast.promise(
  //   Promise,
  //    {
  //      loading: 'Saving...',
  //      success: <b>Thank you for subscribing !</b>,
  //      error: <b>Something went wrong...Try again</b>,
  //    }
  //  );
  // setTimeout(toggle, 3000);

  return (
    <>
      <Modal heading={"Don’t miss out !"} toggle={toggle}>
        <p style={{fontSize: "clamp(2vmin,1.2rem,3vmin)"}}>
          Sign up for our newsletter to stay in the loop.
        </p>
        <form className="newsletter-modal-form" onSubmit={formik.handleSubmit}>
          <Input
            labelFor="email"
            id="email"
            name="email"
            type="email"
            placeholder="Enter e-mail"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}>
            {" "}
            {formik.touched.email && formik.errors.email ? (
              <span className="newsletter-error-message">{formik.errors.email}</span>
            ) : null}
          </Input>
          <Button type="submit" content="Send" id="dark-background" />
        </form>
      </Modal>
      <Toaster position="top-center" />
    </>
  );
}

function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
}

function notifyUser() {
  toast.success("One of our advisor will be in touch shortly !");
}
