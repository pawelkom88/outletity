import Details from "./Details";
import Delivery from "../../other/delivery/Delivery";
import Collection from "../../other/collection/Collection";
import ContactFormModal from "components/UI/modals/contact-form/ContactFormModal";
import ReturnsRefunds from "pages/returns&refunds/ReturnsRefunds";

import "./FooterMobile.scss";

export default function FooterMobile({isShown, toggle}) {
  return (
    <footer className="footer-mobile-container">
      <Details title="Delivery and Collection">
        <Details title="Delivery">
          <Delivery />
        </Details>
        <Details title="Collection">
          <Collection />
        </Details>
      </Details>
      <Details title="Returns and Refunds">
        <ReturnsRefunds />
      </Details>
      <span className="footer-mobile-summary" onClick={toggle}>
        Contact us
      </span>
      {isShown && <ContactFormModal isShown={isShown} toggle={toggle} />}
    </footer>
  );
}
