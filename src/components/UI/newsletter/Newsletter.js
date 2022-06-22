import Button from "components/UI/button/Button";
import useModal from "hooks/useModal";
import useOverflow from "hooks/useOverflow";
import NewsletterModal from "../modals/newsletter-modal/NewsletterModal";
import "./Newsletter.scss";

export default function Newsletter() {
  const {isShown, toggle} = useModal();
  useOverflow(isShown);

  return (
    <>
      {isShown && <NewsletterModal isShown={isShown} toggle={toggle} />}
      <div className="newsletter">
        <p className="newsletter-title">STAY UP TO DATE | SIGN UP FOR OUR NEWSLETTER</p>
        <Button onClick={toggle} content={"Sign up"} className="newsletter-btn" />
      </div>
    </>
  );
}
