import {useState} from "react";
import useOverflow from "hooks/useOverflow.js";
import useMatchMedia from "hooks/useMatchMedia";
import {Link} from "react-router-dom";

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

  useOverflow(menuIsOpen);

  return (
    <>
      <header>
        <div className="header-panel">
          {matches && <Hamburger menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />}
          <Link className="logo" to="/">
            <img src={logo} alt="Outletity logo" />
          </Link>
          <div className="user-panel">
            {!matches && <SearchBar />}
            <UserPanel menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
            <Basket menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
          </div>
        </div>
        {matches ? <NavMobile menuIsOpen={menuIsOpen} setMenuOpen={setMenuIsOpen} /> : <Nav />}
      </header>
    </>
  );
}
