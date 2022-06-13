import {Routes, Route} from "react-router-dom";

// components
import Header from "components/header/Header";
import Main from "components/main/Main";
import PromoBar from "components/promo-bar/PromoBar";
import Sale from "components/sale/Sale";
import Voucher from "components/voucher/Voucher";
import Newsletter from "components/newsletter/Newsletter";
import "./index.scss";

// pages
import Home from "./pages/home/Home";
import Electronics from "pages/electronics/Electronics";
import Mens from "pages/mens/Mens";
import Womens from "pages/womens/Womens";
import Jewelery from "pages/jewelery/Jewelery";

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Electronics" element={<Electronics />} />
          <Route path="/Mens" element={<Mens />} />
          <Route path="/Womens" element={<Womens />} />
          <Route path="/Jewelery" element={<Jewelery />} />
          {/* <Route path="/Products" element={<Products />} /> */}
        </Routes>
      </Main>
      <PromoBar>
        <Newsletter />
      </PromoBar>
      {/* <Footer></Footer>   */}
    </>
  );
}

export default Outletity;
