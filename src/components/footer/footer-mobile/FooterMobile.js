import "./FooterMobile.scss";

import Details from "./Details";
import Delivery from "../../other/delivery/Delivery";
import Collection from "../../other/collection/Collection";
import Contact from "pages/contact/Contact";
import ReturnsRefunds from "pages/returns&refunds/ReturnsRefunds";

export default function FooterMobile() {
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
      <Details title="Contact us">
        <Contact />
      </Details>
    </footer>
  );
}
