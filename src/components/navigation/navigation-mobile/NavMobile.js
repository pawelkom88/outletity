import Nav from "../navigation-desktop/Nav";
import SearchBar from "../../UI/search-bar/SearchBar";
import SocialMedia from "../../UI/social-media/SocialMedia";
import "./NavMobile.scss";

export default function NavMobile({menuIsOpen, setMenuOpen}) {
  return (
    <>
      {menuIsOpen && (
        <div className="menu-mobile">
          <SearchBar />
          <Nav menuIsOpen={menuIsOpen} setMenuOpen={setMenuOpen} />
          <SocialMedia />
        </div>
      )}
    </>
  );
}
