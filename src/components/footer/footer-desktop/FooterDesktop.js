import {Link} from "react-router-dom";
import ContactFormModal from "components/UI/modals/contact-form/ContactFormModal";
import "./FooterDesktop.scss";

export default function FooterDesktop({isShown, toggle}) {
  return (
    <footer className="footer-nav">
      <ul className="footer-nav_items">
        <Link to="/Delivery-Collections">
          <li className="footer-nav_item">Delivery and collection</li>
        </Link>
        <Link to="/Returns-Refunds">
          <li className="footer-nav_item">Returns and Refunds</li>
        </Link>
        <li style={{cursor: "pointer"}} className="footer-nav_item" onClick={toggle}>
          Contact us
        </li>
        {isShown && <ContactFormModal isShown={isShown} toggle={toggle} />}
      </ul>
    </footer>
  );
}
