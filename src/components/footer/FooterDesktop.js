import {facebook, twitter, instagram} from "utilities/images";

import "./FooterDesktop.scss";

export default function FooterDesktop() {
  return (
    <footer>
      <div className="footer-nav">
        <ul className="footer-nav_items">
          <li className="footer-nav_item">Delivery and collcetion</li>
          <li className="footer-nav_item">Returns and Refunds</li>
          <li className="footer-nav_item">Contact us</li>
        </ul>
      </div>
      <div className="footer-social-media">
        <span>follow us</span>
        <div className="social-media__icons">
          <img src={facebook} alt="Facebook icon" />
          <img src={twitter} alt="Twitter icon" />
          <img src={instagram} alt="Instagram icon" />
        </div>
      </div>
      <hr />
      <time className="footer-copyright">&copy; Outletity {new Date().getFullYear()}</time>
    </footer>
  );
}
