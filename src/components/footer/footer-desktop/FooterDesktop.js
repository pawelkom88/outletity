import {Link} from "react-router-dom";
import ContactFormModal from "components/UI/modals/contact-form/ContactFormModal";
import "./FooterDesktop.scss";

export default function FooterDesktop({isShown, toggle}) {
  return (
    <footer className="footer-nav">
      <ul className="footer-nav_items">
        <li className="footer-nav_item">
          <Link to="/Delivery-Collections">Delivery and collection</Link>
        </li>
        <li className="footer-nav_item">
          <Link to="/Returns-Refunds">Returns and Refunds</Link>
        </li>
        <li style={{cursor: "pointer"}} className="footer-nav_item" onClick={toggle}>
          Contact us
        </li>
        {isShown && <ContactFormModal isShown={isShown} toggle={toggle} />}
      </ul>
    </footer>
  );
}
