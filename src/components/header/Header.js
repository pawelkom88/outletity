import {Link} from "react-router-dom";

import SearchBar from "../search-bar/SearchBar";
import Basket from "../basket/Basket";
import UserPanel from "../user-panel/UserPanel";
import Navigation from "../navigation/Navigation";

import {logo} from "../../utilities/images";
import "./Header.scss";

export default function Header() {
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
      <Navigation />
    </header>
  );
}
