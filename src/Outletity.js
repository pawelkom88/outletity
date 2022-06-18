import useMatchMedia from "hooks/useMatchMedia";

// components
import Header from "components/header/Header";
import Main from "components/UI/main/Main";
import PromoBar from "components/UI/promo-bar/PromoBar";
import Sale from "components/UI/sale/Sale";
import Voucher from "components/UI/voucher/Voucher";
import Newsletter from "components/UI/newsletter/Newsletter";
import FooterDesktop from "components/footer/footer-desktop/FooterDesktop";
import FooterMobile from "components/footer/footer-mobile/FooterMobile";
import GoUp from "components/UI/goUp/GoUp";
import SocialMedia from "components/UI/social-media/SocialMedia";
// import NavMobile from "components/navigation/navigation-mobile/NavMobile";
import RouterRoutes from "components/RouterRoutes";

import "./index.scss";

function Outletity() {
  const {matches} = useMatchMedia("(max-width: 450px)");

  return (
    <>
      <PromoBar>
        <Sale />
      </PromoBar>
      <Header />
      <PromoBar>
        <Voucher />
      </PromoBar>
      <Main>
        <RouterRoutes />
      </Main>
      <PromoBar>
        <Newsletter />
      </PromoBar>
      {matches ? <FooterMobile /> : <FooterDesktop />}
      <SocialMedia />
      <GoUp />
    </>
  );
}

export default Outletity;
