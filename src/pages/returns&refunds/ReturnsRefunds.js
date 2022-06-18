import {creditcard} from "utilities/images";
import "./ReturnsRefunds.scss";
import Box from "components/UI/box/Box";

export default function ReturnsRefunds() {
  return (
    <Box content={"Returns and Refunds"}>
      <img className="credit-card" src={creditcard} alt="Credit card icon" />
      <div className="returns-refunds-wrapper">
        <p>Making your own return arrangements.</p>
        <p>If you’d prefer to use another provider to return your items:</p>
        <ul className="returns-refunds-items">
          <li>
            Fill out the returns section on the front of your delivery note. If you no longer have
            your delivery note, please include a covering letter containing your name, order
            reference and details of return. Package your parcel securely with the delivery note
            inside. Ensure that you’ve removed the original address label from your parcel.
          </li>
          <li>Post your return to:</li>
          <li>Outletity</li>
          <li>New Cresent Long Port</li>
          <li>NP19 7TY</li>
        </ul>
        <p>
          Please note: we cannot refund any postage costs and we’d recommend obtaining a proof of
          posting certificate.
        </p>
      </div>
    </Box>
  );
}
