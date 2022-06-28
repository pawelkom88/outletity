import {success} from "utilities/images";
import "./Success.scss";

export default function Success() {
  return (
    <section className="success-container">
      <div>
        <img src={success} alt="icon" />
        <h2>You payment has been successfull</h2>
      </div>
    </section>
  );
}
