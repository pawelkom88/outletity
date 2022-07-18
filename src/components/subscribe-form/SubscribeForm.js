import {useState, useRef} from "react";
import Button from "components/UI/button/Button";
import Input from "components/UI/input/Input";
import ReCAPTCHA from "react-google-recaptcha";
import "./SubscribeForm.scss";

export default function SubscribeForm({status, message, onValidated}) {
  const [email, setEmail] = useState("");
  const captchaRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    onValidated({EMAIL: email});
    captchaRef.current.reset();
  }

  return (
    <>
      <div className={message && status === "error" ? "contact-form-error-msg" : "success"}>
        {message && status === "error" && message.slice(3)}
        {message &&
          status === "success" &&
          `${message}. Your email will be added only if it does not already exists in our database`}
      </div>
      <div className="subscribe-modal">
        <Input
          labelFor="subscribtion"
          id="subscribtion"
          name="subscribtion"
          type="email"
          placeholder="Enter e-mail"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <ReCAPTCHA ref={captchaRef} sitekey={process.env.REACT_APP_CAPTCHA} />
        <Button id="dark-background" content="Subscribe" onClick={handleSubmit} />
      </div>
    </>
  );
}
