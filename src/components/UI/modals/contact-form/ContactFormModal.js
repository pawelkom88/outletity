import Input from "components/UI/input/Input";
import Modal from "../modal/Modal";
import Button from "components/UI/button/Button";
import toast, {Toaster} from "react-hot-toast";
import {useFormik} from "formik";

import "./ContactFormModal.scss";

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

export default function ContactFormModal({toggle}) {
  // TO BE DONE
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
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
              onChange={formik.handleChange}
              labelFor="name"
              id="name"
              for="name"
              name="name"
              type="text"
              placeholder="Enter name">
              Name:
            </Input>
            <Input
              size="100"
              onChange={formik.handleChange}
              labelFor="email"
              id="email"
              for="email"
              name="email"
              type="email"
              placeholder="Enter e-mail">
              E-mail:
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
            <Button onClick={notifyUser} content="Send" className="background" />
          </form>
        </div>
      </Modal>
      <Toaster position="top-center" />
      {/* <Button onClick={toggle} content={"Sign up"} className="newsletter-btn" /> */}
    </>
  );
}
