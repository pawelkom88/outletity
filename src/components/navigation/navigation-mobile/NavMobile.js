import Nav from "../navigation-desktop/Nav";
import SocialMedia from "../../UI/social-media/SocialMedia";
// import FocusLock from "react-focus-lock";

import "./NavMobile.scss";

export default function NavMobile({menuIsOpen, closeMobileMenu}) {
  return (
    <>
      {menuIsOpen && (
        <div className="menu-mobile">
          <Nav menuIsOpen={menuIsOpen} closeMobileMenu={closeMobileMenu} />
          <SocialMedia />
        </div>
      )}
    </>
  );
}
