import useCountdown from "../../hooks/useCountdown";
import "./Sale.scss";

export default function Sale() {
  const {hours, minutes, seconds} = useCountdown();

  return (
    <p className="sale">
      SALE - UP TO 50% OFF - LAST CHANCE ENDS
      <span className={hours < 2 ? "red" : "green"}>
        {" "}
        {hours}:{minutes}:{seconds}
      </span>
    </p>
  );
}
