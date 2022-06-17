import useMatchMedia from "hooks/useMatchMedia";
import {Link} from "react-router-dom";

import SearchBar from "../UI/search-bar/SearchBar";
import Basket from "../UI/basket/Basket";
import UserPanel from "../UI/user-panel/UserPanel";
import Hamburger from "../navigation/navigation-mobile/Hamburger";
import Nav from "../navigation/navigation-desktop/Nav";

import {logo} from "../../utilities/images";
import "./Header.scss";

export default function Header({menuOpen, setMenuOpen}) {
  const {matches} = useMatchMedia("(max-width: 860px)");

  return (
    <>
      <header className="header">
        <div className="header-panel">
          {matches && <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
          <Link className="logo" to="/">
            <img src={logo} alt="Outletity logo" />
          </Link>
          <div className="user-panel">
            {!matches && <SearchBar />}
            <UserPanel />
            <Basket />
          </div>
        </div>
        {!matches && <Nav setMenuOpen={setMenuOpen} />}
      </header>
    </>
  );
}
