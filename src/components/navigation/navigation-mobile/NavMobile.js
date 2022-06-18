import Nav from "../navigation-desktop/Nav";
import SearchBar from "../../UI/search-bar/SearchBar";
import SocialMedia from "../../UI/social-media/SocialMedia";
import "./NavMobile.scss";

export default function NavMobile({menuOpen}) {
  return (
    <>
      {menuOpen && (
        <div className={` ${menuOpen ? "menu-mobile fadeIn" : "menu-mobile"}`}>
          <SearchBar />
          <Nav />
          <SocialMedia />
        </div>
      )}
    </>
  );
}
