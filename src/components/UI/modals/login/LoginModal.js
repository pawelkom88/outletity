import useAuth from "hooks/useAuth";
import {signInWithEmailAndPassword} from "firebase/auth";
import Modal from "../modal/Modal";
import {Link} from "react-router-dom";
import Input from "components/UI/input/Input";
import Button from "components/UI/button/Button";
import {Toaster} from "react-hot-toast";
import {useFormik} from "formik";
import {displayErrorMsg} from "utilities/helpers";
import {sadness} from "utilities/images";
import {actionObj} from "store/actions";
import UserSettings from "../logout/UserSettings";
import "./LoginModal.scss";

export default function LoginModal({
  user,
  setAvatar,
  avatar,

  toggle,
  handleTransition,
  setIsUploaded,
}) {
  const {handleUser, error} = useAuth(signInWithEmailAndPassword, actionObj.login);

  function handleSubmit(e) {
    e.preventDefault();
    handleUser(formik.values.email, formik.values.password, "Login successfull");
    toggle();
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
      {user ? (
        <UserSettings
          setIsUploaded={setIsUploaded}
          avatar={avatar}
          setAvatar={setAvatar}
          user={user}
          toggle={toggle}
        />
      ) : (
        <Modal toggle={toggle} heading={"Log in to your account"}>
          <div className="create-account">
            <span>Need an account? </span>
            <button onClick={handleTransition} className="no-styles underline">
              Create on
            </button>
          </div>
          <hr className="login-divider" />
          {error && (
            <Modal toggle={toggle}>
              <img style={{width: "100px"}} src={sadness} alt="" />
              <h3>{`User with email address ${formik.values.email} not found. Try again or create new account. `}</h3>
            </Modal>
          )}

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
              type="submit"
              content="Login"
              id={formik.errors.isValidated ? "dark-background" : "disabled"}
            />
          </form>
          <Link onClick={toggle} className="underline" to="/">
            Forgot your password ?
          </Link>
        </Modal>
      )}
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
  }

  // Validate entire form if there are no errors
  if (Object.keys(errors).length === 0) {
    errors.isValidated = true;
  } else {
    errors.isValidated = false;
  }

  return errors;
}
