import Button from "components/UI/button/Button";
import Modal from "../modal/Modal";
import toast, {Toaster} from "react-hot-toast";
import Input from "components/UI/input/Input";
import {useFormik} from "formik";
import "./NewsletterModal.scss";

export default function NewsletterModal({toggle}) {
  // TO BE DONE
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  function notifyUser() {
    toast.success("Thank you for subscribing !");
  }

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
            for="email"
            name="email"
            type="email"
            placeholder="Enter e-mail"
            ariaLabel="Press enter to submit"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <Button onClick={notifyUser} content="Send" className="background" />
        </form>
      </Modal>
      <Toaster position="top-center" />
    </>
  );
}
