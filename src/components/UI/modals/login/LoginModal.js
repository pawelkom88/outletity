import useAuth from "hooks/useAuth";
import {signInWithEmailAndPassword} from "firebase/auth";
import Modal from "../modal/Modal";
import {Link} from "react-router-dom";
import Input from "components/UI/input/Input";
import Button from "components/UI/button/Button";
import toast, {Toaster} from "react-hot-toast";
import {useFormik} from "formik";
import {displayErrorMsg} from "utilities/helpers";

import "./LoginModal.scss";

export default function LoginModal({isShown, toggle, handleTransition}) {
  const {handleUser, error} = useAuth(signInWithEmailAndPassword);

  function handleSubmit(e) {
    e.preventDefault();
    handleUser(formik.values.email, formik.values.password, "Welcome back USER");
  }

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validate,
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

        {error && (
          <Modal heading="Ups :(" isShown={isShown} toggle={toggle}>
            <p className="fetch-msg">{`User with email address ${formik.values.email} not found`}</p>
          </Modal>
        )}

        <form className="login-form" onSubmit={e => handleSubmit(e)}>
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
          <Button
            type="submit"
            content="Login"
            id={formik.errors.isValidated ? "dark-background" : "disabled"}
          />
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
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // Validate entire form if there are no errors
  if (Object.keys(errors).length === 0) {
    errors.isValidated = true;
  } else {
    errors.isValidated = false;
  }

  return errors;
}
