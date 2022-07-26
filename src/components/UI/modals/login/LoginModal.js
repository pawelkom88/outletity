import useAuth from "hooks/useAuth";
import {signInWithEmailAndPassword} from "firebase/auth";
import {Link} from "react-router-dom";
import Input from "components/UI/input/Input";
import Button from "components/UI/button/Button";
import {useFormik} from "formik";
import {displayErrorMsg} from "utilities/helpers";
import {actionObj} from "store/actions";
import "./LoginModal.scss";

export default function LoginModal({handleTransition}) {
  const {handleUser, error} = useAuth(signInWithEmailAndPassword, actionObj.login);

  function handleSubmit(e) {
    e.preventDefault();
    handleUser(formik.values.email, formik.values.password, "Login successfull");
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
      <div className="create-account">
        <span>Need an account? </span>
        <button onClick={handleTransition} className="no-styles underline">
          Create on
        </button>
      </div>
        <small className="error-msg">{error}</small>
      <hr className="login-divider" />
      <form className="login-form" onSubmit={e => handleSubmit(e)}>
        <Input
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
          type={formik.errors.isValidated && "submit"}
          content="Login"
          id={formik.errors.isValidated ? "dark-background" : "disabled"}
          disabled={formik.errors.isValidated}
        />
      </form>
      <Link className="underline" to="/">
        Forgot your password ?
      </Link>
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
  }

  // Validate entire form if there are no errors
  if (Object.keys(errors).length === 0) {
    errors.isValidated = true;
  } else {
    errors.isValidated = false;
  }

  return errors;
}
