import Input from "components/UI/input/Input";
import Modal from "../modal/Modal";
import Button from "components/UI/button/Button";
import toast, {Toaster} from "react-hot-toast";
import {useFormik} from "formik";
import "./ContactFormModal.scss";

export default function ContactFormModal({toggle}) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validate,
    onSubmit: notifyUser,
  });

  return (
    <>
      <Modal heading={"Contact us"} toggle={toggle}>
        <hr />
        <div className="contact-form-modal">
          <ul className="contact-form-description">
            <li>
              If you’d like to get in touch via email please fill out the following form and a
              member of the customer service team will be in touch.
            </li>
            <li>We will aim to respond to your query within 24 hours.</li>
            <li>Opening Hours: </li>
            <li>
              <strong>Mon - Fri: 08:00 - 20:00</strong>
            </li>
            <li>
              <strong>Sat - Sun: 10:00 - 16:00</strong>
            </li>
            <li>Please complete our online form to send an email to our customer service</li>
          </ul>
          <form className="contact-form" onSubmit={formik.handleSubmit}>
            <Input
              size="100"
              labelFor="name"
              id="name"
              name="name"
              type="text"
              placeholder="Enter name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}>
              {formik.touched.name && formik.errors.name ? (
                <span className="contact-form-error-msg">{formik.errors.name}</span>
              ) : (
                "Name:"
              )}
            </Input>
            <Input
              size="100"
              labelFor="email"
              id="email"
              name="email"
              type="email"
              placeholder="Enter e-mail"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}>
              {formik.touched.email && formik.errors.email ? (
                <span className="contact-form-error-msg">{formik.errors.email}</span>
              ) : (
                "E-mail:"
              )}
            </Input>
            <label htmlFor="texarea">Message:</label>
            <textarea
              className="contact-form__textarea"
              name="textarea"
              id="message"
              rows="8"
              placeholder="Enter message"
              required
            />
            <Button type="submit" content="Send" className="background" />
          </form>
        </div>
      </Modal>
      <Toaster position="top-center" />
    </>
  );
}

function validate(values) {
  const errors = {};
  console.log(values);
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.trim().length === 0) {
    errors.name = "At least 1 character";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
}

function notifyUser() {
  toast.success("One of our advisor will be in touch shortly !");
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
}
