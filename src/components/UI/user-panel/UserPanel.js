import {Link} from "react-router-dom";
import {user} from "utilities/images";
import "./UserPanel.scss";

export default function UserPanel({closeMobileMenu}) {
  return (
    <Link onClick={closeMobileMenu} to="/">
      <div role='button' aria-label="show user-profile" className="user">
        {/* onClick={menuIsOpen ? closeMobileMenu : undefined}> */}
        <img src={user} alt="User icon" />
      </div>
    </Link>
  );
}
