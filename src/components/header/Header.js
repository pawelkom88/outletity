import {useState} from "react";
import {Link} from "react-router-dom";
import useOverflow from "hooks/useOverflow.js";
import useMatchMedia from "hooks/useMatchMedia";
import useModal from "hooks/useModal";
import SearchBar from "../UI/search-bar/SearchBar";
import Basket from "../UI/basket/Basket";
import UserPanel from "../UI/user-panel/UserPanel";
import Hamburger from "../navigation/navigation-mobile/Hamburger";
import Nav from "../navigation/navigation-desktop/Nav";
import NavMobile from "../navigation/navigation-mobile/NavMobile";
import {logo} from "../../utilities/images";
import "./Header.scss";

export default function Header() {
  const {matches} = useMatchMedia("(max-width: 860px)");
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const {isShown, toggle} = useModal();

  useOverflow(menuIsOpen);

  function closeMobileMenu() {
    setMenuIsOpen(false);
  }

  function openMobileMenu() {
    setMenuIsOpen(true);
  }

  return (
    <>
      <header aria-label="header">
        <div className="header-panel">
          {matches && (
            <Hamburger
              menuIsOpen={menuIsOpen}
              openMobileMenu={openMobileMenu}
              closeMobileMenu={closeMobileMenu}
            />
          )}
          <Link className="logo" to="/" onClick={closeMobileMenu}>
            <img src={logo} alt="Outletity logo" />
          </Link>
          <div className="user-panel">
            {!matches && <SearchBar />}
            <UserPanel toggle={toggle} isShown={isShown} />
            <Basket isShown={isShown} />
          </div>
        </div>
        {matches ? (
          <NavMobile menuIsOpen={menuIsOpen} closeMobileMenu={closeMobileMenu} />
        ) : (
          <Nav />
        )}
      </header>
    </>
  );
}
