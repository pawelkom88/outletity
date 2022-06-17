import {Link} from "react-router-dom";

import useMatchMedia from "hooks/useMatchMedia";

import SearchBar from "../UI/search-bar/SearchBar";
import Basket from "../UI/basket/Basket";
import UserPanel from "../UI/user-panel/UserPanel";
import NavDesktop from "../navigation/navigation-desktop/NavDesktop";
import NavMobile from "../navigation/navigation-mobile/NavMobile";

import {logo} from "../../utilities/images";
import "./Header.scss";

export default function Header() {
  const {matches} = useMatchMedia("(max-width: 860px)");

  return (
    <header className="header">
      <div className="header-panel">
        <Link className="logo" to="/">
          <img src={logo} alt="Outletity logo" />
        </Link>
        <div className="user-panel">
          <SearchBar />
          <UserPanel />
          <Basket />
        </div>
      </div>
      {matches ? <NavMobile /> : <NavDesktop />}
    </header>
  );
}
