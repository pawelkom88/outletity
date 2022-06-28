import Button from "components/UI/button/Button";
import "./Payment.scss";

export default function Payment() {
  return (
    <section className="payment-container">
      <h1>Checkout form</h1>
      <form className="payment-form">
        <label htmlFor="card-num">Card Number</label>
        <input className="full-width" id="card-num" type="text" placeholder="XXXX-XXXX-XXXX-XXXX" />
        <label htmlFor="name-on-a-card">Name on Card</label>
        <input
          className="full-width"
          id="name-on-a-card"
          type="text"
          placeholder="John Smith"
        />
        <label htmlFor="month">Expiration Date</label>
        <div className="exp-date">
          <select className="select" name="month" id="month-select">
            <option defaultValue="Month" disabled>
              Month
            </option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <select className="select" name="year" id="year-select">
            <option defaultValue="Year" disabled>
              Year
            </option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
          </select>
          <label htmlFor="ccv">
            CCV
            <input id="ccv" type="text" size="3" maxLength="3" placeholder="123" />
          </label>
        </div>
        <label htmlFor="delivery-details">Delivery options</label>
        <select className="select" name="month" id="delivery-details">
          <option value="Standard">Standard : £3.95</option>
          <option value="NextDay">Next day : £6.95</option>
          <option value="Collection">Collection : Free</option>
        </select>
        <h3>Amount due : £200</h3>
        <Button path="/Success" content="Pay" id="dark-background" />
      </form>
    </section>
  );
}
