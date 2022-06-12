// import {Routes, Route} from "react-router-dom";

import Header from "components/header/Header";
import Main from "components/main/Main";
import Carousel from "components/carousel/Carousel";
import PromoBar from "components/promo-bar/PromoBar";
import Sale from "components/sale/Sale";
import Voucher from "components/voucher/Voucher";
import Newsletter from "components/newsletter/Newsletter";
import "./index.scss";

// import Home from "./pages/Home";

function Outletity() {
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
        <Carousel />
        {/* <Routes>
      </Routes> */}
      </Main>
      <PromoBar>
        <Newsletter />
      </PromoBar>
      {/* <Footer></Footer>   */}
    </>
  );
}

export default Outletity;
