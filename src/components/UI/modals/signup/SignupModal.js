import useAuth from "hooks/useAuth";
import Modal from "../modal/Modal";
import Input from "components/UI/input/Input";
import Button from "components/UI/button/Button";
import {Toaster} from "react-hot-toast";
import {useFormik} from "formik";
import {displayErrorMsg} from "utilities/helpers";
import {sadness} from "utilities/images";
import {createUserWithEmailAndPassword} from "firebase/auth";

export default function SignupModal({isShown, toggle, handleTransition}) {
  const {handleUser, error} = useAuth(createUserWithEmailAndPassword);

  function handleSubmit(e) {
    e.preventDefault();
    handleUser(
      formik.values.email,
      formik.values.password,
      "Account has been created successfully"
    );
    toggle();
  }

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validate,
  });

  return (
    <>
      <Modal isShown={isShown} toggle={toggle} heading={"Creating a new account"}>
        <div className="create-account">
          <span>Have an account? </span>
          <button onClick={handleTransition} className="no-styles underline">
            Login
          </button>
        </div>
        <hr className="login-divider" />
        {error && (
          <Modal heading="Ups :(" isShown={isShown} toggle={toggle}>
            <img style={{width: "100px"}} src={sadness} alt="" />
            <h3>Something went wrong. Try again</h3>
          </Modal>
        )}
        <form
          className="login-form"
          onSubmit={formik.errors.isValidated ? e => handleSubmit(e) : undefined}>
          <Input
            size={60}
            type="text"
            labelFor="userName"
            id="userName"
            placeholder="User name"
            name="userName"
            {...formik.getFieldProps("userName")}>
            <div>User name:</div>
            {displayErrorMsg(formik.touched.userName, formik.errors.userName)}
          </Input>
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
            // autocomplete="off"
            {...formik.getFieldProps("password")}>
            <div>Password:</div>
            {displayErrorMsg(formik.touched.password, formik.errors.password)}
          </Input>
          <Input
            size={60}
            type="password"
            labelFor="passwordConfirmation"
            id="passwordConfirmation"
            placeholder="Confirm password"
            name="passwordConfirmation"
            {...formik.getFieldProps("passwordConfirmation")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.passwordConfirmation}>
            <div>Confirm password:</div>
            {displayErrorMsg(
              formik.touched.passwordConfirmation,
              formik.errors.passwordConfirmation
            )}
          </Input>
          <Button
            type={formik.errors.isValidated ? "submit" : "button"}
            content="Create account"
            id={formik.errors.isValidated ? "dark-background" : "disabled"}
          />
        </form>
      </Modal>
      <Toaster position="top-center" />
    </>
  );
}

function validate(values) {
  const errors = {};

  if (values.userName.length < 3) {
    errors.userName = "Required at least 3 characters";
  }
  if (values.userName.trim().length === 0) {
    errors.userName = "At least 1 character";
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/i.test(values.password)) {
    errors.password =
      "8 to 24 characters, must include uppercase and lowercase letters, a number and a special character. Allowed special characters !@#$%";
  }

  if (values.passwordConfirmation != values.password) {
    errors.passwordConfirmation = "Password does not match";
  }

  // Validate entire form if there are no errors
  if (Object.keys(errors).length == 0) {
    errors.isValidated = true;
  } else {
    errors.isValidated = false;
  }

  return errors;
}
