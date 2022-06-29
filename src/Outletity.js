import Header from "components/header/Header";
import Main from "components/UI/main/Main";
import PromoBar from "components/UI/promo-bar/PromoBar";
import Sale from "components/UI/sale/Sale";
import Voucher from "components/UI/voucher/Voucher";
import Newsletter from "components/UI/newsletter/Newsletter";
import Footer from "components/footer/Footer";
import GoUp from "components/UI/goUp/GoUp";
import SocialMedia from "components/UI/social-media/SocialMedia";
import Routes from "routes/Routes";
import "./index.scss";
import {ShoppingCartProvider} from "context/CartContext";

export default function Outletity() {
  return (
    <>
      <PromoBar>
        <Sale />
      </PromoBar>
      <ShoppingCartProvider>
        <Header />
        <PromoBar>
          <Voucher />
        </PromoBar>
        <Main>
          <Routes />
        </Main>
      </ShoppingCartProvider>
      <PromoBar>
        <Newsletter />
      </PromoBar>
      <Footer />
      <SocialMedia />
      <GoUp />
    </>
  );
}
