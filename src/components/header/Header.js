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
        <img src={logo} alt="Outletity logo" className="logo" />
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
