import {Routes, Route} from "react-router-dom";
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
import "./index.scss";

// pages
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import DeliveryCollection from "./pages/delivery&collection/DeliveryCollection";
import ReturnsRefunds from "./pages/returns&refunds/ReturnsRefunds";
import Electronics from "pages/electronics/Electronics";
import Mens from "pages/mens/Mens";
import Womens from "pages/womens/Womens";
import Jewelery from "pages/jewelery/Jewelery";

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Electronics" element={<Electronics />} />
          <Route path="/Mens" element={<Mens />} />
          <Route path="/Womens" element={<Womens />} />
          <Route path="/Jewelery" element={<Jewelery />} />
          <Route path="/Delivery-Collections" element={<DeliveryCollection />} />
          <Route path="/Returns-Refunds" element={<ReturnsRefunds />} />
          <Route path="/Contact" element={<Contact />} />
          {/* <Route path="/Products" element={<Products />} /> */}
        </Routes>
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
