import {Link} from "react-router-dom";
import useCountdown from "hooks/useCountdown";
import "./Sale.scss";

export default function Sale() {
  const {hours, minutes, seconds} = useCountdown();

  return (
    <Link to="/Products">
      <p className="sale">
        SALE - UP TO 50% OFF - LAST CHANCE ENDS
        <span className={hours < 2 ? "red" : "light-yellow"}>
          {" "}
          {hours}:{minutes}:{seconds}
        </span>
      </p>
    </Link>
  );
}
