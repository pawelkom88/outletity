import Modal from "../modal/Modal";
import Input from "components/UI/input/Input";
import Button from "components/UI/button/Button";
import toast, {Toaster} from "react-hot-toast";
import {useFormik} from "formik";
import {displayErrorMsg} from "utilities/helpers";

export default function SignupModal({isShown, toggle, handleTransition}) {
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validate,
    onSubmit: notifyUser,
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
        <form className="login-form" onSubmit={formik.handleSubmit}>
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
            autocomplete="off"
            {...formik.getFieldProps("password")}>
            <div>Password:</div>
            {displayErrorMsg(formik.touched.password, formik.errors.password)}
          </Input>
          <Input
            size={60}
            type="password"
            labelFor="password confirmation"
            id="password confirmation"
            placeholder="Confirm password"
            name="password confirmation"
            {...formik.getFieldProps("passwordConfirmation")}>
            <div>Confirm password:</div>
            {displayErrorMsg(
              formik.touched.passwordConfirmation,
              formik.errors.passwordConfirmation
            )}
          </Input>
          <Button
            type="submit"
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
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const errors = {};

  switch (true) {
    case !values.userName: {
      errors.userName = "Required";
      break;
    }
    case values.userName.trim().length === 0: {
      errors.userName = "At least 1 character";
      break;
    }

    case !values.email: {
      errors.email = "Required";
      break;
    }

    case !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email): {
      errors.email = "Invalid email address";
      break;
    }
    //add proper validation
    case !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/i.test(values.password): {
      errors.password =
        "8 to 24 characters Must include uppercase and lowercase letters, a number and a special character. Allowed special characters";
      break;
    }
    case values.passwordConfirmation !== values.password: {
      errors.passwordConfirmation = "Password doesn not match";
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

function notifyUser() {
  toast.success("The account has been created successfully", {duration: 4000});
}
