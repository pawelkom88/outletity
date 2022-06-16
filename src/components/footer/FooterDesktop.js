import {Link} from "react-router-dom";

import {facebook, twitter, instagram} from "utilities/images";

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
      {/* <div className="footer-social-media">
        <span>follow us</span>
        <div className="social-media__icons">
          <a href="https://en-gb.facebook.com/" target="_blank" rel="noreferrer">
            <img src={facebook} alt="Facebook icon" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img src={twitter} alt="Twitter icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src={instagram} alt="Instagram icon" />
          </a>
        </div>
      </div> */}
      <hr />
      <time className="footer-copyright">&copy; Outletity {new Date().getFullYear()}</time>
    </footer>
  );
}
