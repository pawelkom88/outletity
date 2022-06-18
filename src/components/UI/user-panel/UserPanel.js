import {user} from "utilities/images";
import "./UserPanel.scss";

export default function UserPanel({menuIsOpen, setMenuIsOpen}) {
  return (
    <img
      className="user"
      src={user}
      alt="User icon"
      onClick={menuIsOpen ? () => setMenuIsOpen(prevState => !prevState) : undefined}
    />
  );
}
