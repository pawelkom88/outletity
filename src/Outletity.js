import useMatchMedia from "hooks/useMatchMedia";

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
import Routes from "routes/Routes";

import "./index.scss";

export default function Outletity() {
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
        <Routes />
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
