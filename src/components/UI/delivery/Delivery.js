import "./Delivery.scss";

export default function Delivery() {
  return (
    <div className="delivery-options">
      <div className="delivery-options__standard">
        <div className="delivery-options__standard__price">
          <h5>Standard Delivery</h5>
          <span>£3.95</span>
        </div>
        <div>
          <p>3-5 working days </p>
          <p>FREE on orders over £55 </p>
        </div>
      </div>

      <div className="delivery-options__next">
        <div className="delivery-options__next__price">
          <h5>Next Day Delivery</h5>
          <span>£6.95</span>
        </div>
        <p>Order by 18:00 hours for next day delivery - Monday - Friday only.</p>
      </div>
    </div>
  );
}
