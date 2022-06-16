import {Link} from "react-router-dom";

import "./FooterDesktop.scss";

export default function FooterDesktop() {
  return (
    <footer>
      <div className="footer-nav">
        <ul className="footer-nav_items">
          <Link to="/Delivery-Collections">
            <li className="footer-nav_item">Delivery and collection</li>
          </Link>
          <Link to="/Returns-Refunds">
            <li className="footer-nav_item">Returns and Refunds</li>
          </Link>
          <Link to="/Contact">
            <li className="footer-nav_item">Contact us</li>
          </Link>
        </ul>
      </div>
    </footer>
  );
}
