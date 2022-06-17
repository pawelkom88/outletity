import Nav from "../navigation-desktop/Nav";
import SearchBar from "../../UI/search-bar/SearchBar";
// import SocialMedia from "../../UI/social-media/SocialMedia";
import PromoBar from "components/UI/promo-bar/PromoBar";
import Voucher from "components/UI/voucher/Voucher";
import "./NavMobile.scss";

export default function NavMobile({menuOpen}) {
  return (
    <>
      {menuOpen && (
        <div>
          <div className="menu-mobile">
            <SearchBar />
            <Nav />
            <PromoBar>
            <Voucher />
          </PromoBar>
          </div>

        </div>
      )}
    </>
  );
}
