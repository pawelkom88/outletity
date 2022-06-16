import "./FooterMobile.scss";

export default function FooterMobile() {
  return (
    <div className="footer-mobile-container">
      <details className="footer-mobile-details">
        <summary className="footer-mobile-summary">Delivery and Collection</summary>

        <details className="footer-mobile-details">
          <summary className="footer-mobile-summary">Delivery</summary>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem deserunt dolorem
            perferendis ducimus magni ipsa asperiores esse voluptates veniam quaerat?
          </p>
        </details>

        <details className="footer-mobile-details">
          <summary className="footer-mobile-summary">Collection</summary>
          <p>
            Epcot is a theme park at Walt Disney World Resort featuring exciting attractions,
            international pavilions, award-winning fireworks and seasonal special events.
          </p>
        </details>
      </details>
      <details className="footer-mobile-details">
        <summary className="footer-mobile-summary">Returns and Refunds</summary>

        <details className="footer-mobile-details">
          <summary className="footer-mobile-summary">Returns</summary>
          <p>
            Epcot is a theme park at Walt Disney World Resort featuring exciting attractions,
            international pavilions, award-winning fireworks and seasonal special events.
          </p>
        </details>

        <details className="footer-mobile-details">
          <summary className="footer-mobile-summary">Refunds</summary>
          <p>
            Epcot is a theme park at Walt Disney World Resort featuring exciting attractions,
            international pavilions, award-winning fireworks and seasonal special events.
          </p>
        </details>
      </details>
      <details className="footer-mobile-details">
        <summary className="footer-mobile-summary">Contact us</summary>
        <p>Contact</p>
      </details>
    </div>
  );
}
