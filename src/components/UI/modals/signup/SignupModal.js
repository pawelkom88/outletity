import Modal from "../modal/Modal";
import Input from "components/UI/input/Input";
import Button from "components/UI/button/Button";
import toast, {Toaster} from "react-hot-toast";
import {useFormik} from "formik";

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
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.userName}>
            {formik.touched.userName && formik.errors.userName ? (
              <span className="contact-form-error-msg">{formik.errors.userName}</span>
            ) : (
              "User name:"
            )}
          </Input>
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
            autocomplete="off"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}>
            {formik.touched.password && formik.errors.password ? (
              <span className="contact-form-error-msg">{formik.errors.password}</span>
            ) : (
              "Password:"
            )}
          </Input>
          <Input
            size={60}
            type="password"
            labelFor="password confirmation"
            id="password confirmation"
            placeholder="Confirm password"
            name="password confirmation"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.passwordConfirmation}>
            {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (
              <span className="contact-form-error-msg">{formik.errors.passwordConfirmation}</span>
            ) : (
              "Confirm Password:"
            )}
          </Input>
          <Button type="submit" id="dark-background" content="Create account" />
        </form>
      </Modal>
      <Toaster position="top-center" />
    </>
  );
}

function validate(values) {
  const errors = {};

  if (!values.userName) {
    errors.userName = "Required";
  } else if (values.userName.trim().length === 0) {
    errors.userName = "At least 1 character";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 5) {
    errors.password = "Your password ...";
  }

  if (!values.passwordConfirmation) {
    errors.password = "Required";
  } else if (values.passwordConfirmation) {
    errors.password = "Doesn't match";
  }

  return errors;
}

function notifyUser() {
  toast.success("The account has been created successfully", {duration: 4000});
}
