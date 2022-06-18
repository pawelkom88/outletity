import {useState} from "react";
import useMatchMedia from "hooks/useMatchMedia";
import {Link} from "react-router-dom";

import SearchBar from "../UI/search-bar/SearchBar";
import Basket from "../UI/basket/Basket";
import {useEffect} from "react";

import UserPanel from "../UI/user-panel/UserPanel";
import Hamburger from "../navigation/navigation-mobile/Hamburger";
import Nav from "../navigation/navigation-desktop/Nav";
import NavMobile from "../navigation/navigation-mobile/NavMobile";

import {logo} from "../../utilities/images";
import "./Header.scss";

export default function Header() {
  const {matches} = useMatchMedia("(max-width: 860px)");
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    if (menuIsOpen) {
      document.body.classList.add("overflow");
    } else {
      document.body.classList.remove("overflow");
    }
  }, [menuIsOpen]);

  return (
    <>
      <header className="header">
        <div className="header-panel">
          {matches && <Hamburger menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />}
          <Link className="logo" to="/">
            <img src={logo} alt="Outletity logo" />
          </Link>
          <div className="user-panel">
            {!matches && <SearchBar />}
            <UserPanel />
            <Basket />
          </div>
        </div>
        {matches ? <NavMobile menuIsOpen={menuIsOpen} setMenuOpen={setMenuIsOpen} /> : <Nav />}
      </header>
    </>
  );
}
