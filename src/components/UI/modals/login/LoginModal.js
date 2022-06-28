import {useState} from "react";
import Modal from "../modal/Modal";
import {Link} from "react-router-dom";
import Input from "components/UI/input/Input";
import Button from "components/UI/button/Button";
import toast, {Toaster} from "react-hot-toast";
import {useFormik} from "formik";
import {displayErrorMsg} from "utilities/functions";

import "./LoginModal.scss";

export default function LoginModal({isShown, toggle, handleTransition}) {
  const [isValidated, setIsValidated] = useState(false);

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

    if (Object.keys(errors).length === 0) {
      setIsValidated(true);
    } else {
      setIsValidated(false);
    }

    return errors;
  }

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
          <button onClick={handleTransition} className="no-styles underline">
            Create on
          </button>
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
            {...formik.getFieldProps("email")}>
            <div>E-mail:</div>
            {displayErrorMsg(formik.touched.email, formik.errors.email)}
          </Input>
          <Input
            size={60}
            type="password"
            labelFor="password"
            id="password"
            placeholder="Enter password"
            name="password"
            {...formik.getFieldProps("password")}>
            <div>Password:</div>
            {displayErrorMsg(formik.touched.password, formik.errors.password)}
          </Input>
          <Button type="submit" content="Login" id={isValidated ? "dark-background" : "disabled"} />
        </form>
        <Link onClick={toggle} className="underline" to="/">
          Forgot your password ?
        </Link>
      </Modal>
      <Toaster position="top-center" />
    </>
  );
}

function notifyUser() {
  toast.success("Welcome back USER NAME", {duration: 4000});
}
