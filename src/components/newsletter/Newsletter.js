import Button from "components/button/Button";
import "./Newsletter.scss";

export default function Newsletter() {
  return (
    <div className="newsletter">
      <p className="newsletter-title">STAY UP TO DATE | SIGN UP FOR OUR NEWSLETTER</p>
      <Button content={"Sign up"} className="newsletter-btn" />
    </div>
  );
}
