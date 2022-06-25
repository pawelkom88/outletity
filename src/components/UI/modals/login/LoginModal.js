import Modal from "../modal/Modal";
import {Link} from "react-router-dom";
import Input from "components/UI/input/Input";
import Button from "components/UI/button/Button";
import toast, {Toaster} from "react-hot-toast";

import {useFormik} from "formik";

import "./LoginModal.scss";

export default function LoginModal({isShown, toggle}) {
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validate,
    onSubmit: notifyUser,
  });

  return (
    <>
      <Modal isShown={isShown} toggle={toggle} heading={"Log in to your account"}>
        <div className="create-account">
          <span>Need an account? </span>
          <Link onClick={toggle} className="underline" to="/">
            Create on
          </Link>
        </div>
        <hr className="login-divider" />
        <form className="login-form" onSubmit={formik.handleSubmit}>
          <Input
            size={60}
            type="email"
            labelFor="email"
            id="email"
            placeholder="Enter email"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}>
            {formik.touched.email && formik.errors.email ? (
              <span className="contact-form-error-msg">{formik.errors.email}</span>
            ) : (
              "E-mail:"
            )}
          </Input>
          <Input
            size={60}
            type="password"
            labelFor="password"
            id="password"
            placeholder="Enter password"
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}>
            {formik.touched.password && formik.errors.password ? (
              <span className="contact-form-error-msg">{formik.errors.password}</span>
            ) : (
              "Password:"
            )}
          </Input>
          <Button type="submit" id="dark-background" content="Login" />
        </form>
        <Link onClick={toggle} className="underline" to="/">
          Forgot your password ?
        </Link>
      </Modal>
      <Toaster position="top-center" />
    </>
  );
}

function validate(values) {
  const errors = {};

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 5) {
    errors.password = "Your password ...";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
}

function notifyUser() {
  toast.success("One of our advisor will be in touch shortly !", {duration: 4000});
}
