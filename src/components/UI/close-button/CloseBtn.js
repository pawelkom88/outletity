import {close} from "utilities/images";
import "./CloseBtn.scss";

export default function CloseBtn({size, toggle}) {
  return (
    <img
      style={{width: `${size}px`}}
      src={close}
      aria-label="close"
      alt="close button"
      className="close-btn"
      onClick={toggle}
    />
  );
}
