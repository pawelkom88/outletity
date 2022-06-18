import "./FooterMobile.scss";

import Delivery from "../../other/delivery/Delivery";
import Collection from "../../other/collection/Collection";
import ReturnsRefunds from "../../../pages/returns&refunds/ReturnsRefunds";

export default function FooterMobile() {
  return (
    <div className="footer-mobile-container">
      <details className="footer-mobile-details">
        <summary className="footer-mobile-summary ">Delivery and Collection</summary>
        <details className="footer-mobile-details">
          <summary id="flip" className="footer-mobile-summary">
            Delivery
          </summary>
          <Delivery />
        </details>
        <details className="footer-mobile-details">
          <summary id="flip" className="footer-mobile-summary">
            Collection
          </summary>
          <Collection />
        </details>
      </details>
      <details className="footer-mobile-details">
        <summary className="footer-mobile-summary">Returns and Refunds</summary>
        <ReturnsRefunds />
      </details>
      <details className="footer-mobile-details">
        <summary className="footer-mobile-summary">Contact us</summary>
        <p>Contact</p>
      </details>
    </div>
  );
}
