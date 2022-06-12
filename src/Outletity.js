import "./index.scss";
import PromoBar from "./components/promo-bar/PromoBar";
import Sale from "./components/sale/Sale";
import Header from "./components/header/Header";

function Outletity() {
  return (
    <>
      <PromoBar>
        <Sale />
      </PromoBar>
      <Header />
      <PromoBar>xyz</PromoBar>
      {/* React router */}
      {/*
      <Main></Main>
      <PromoBar>
        <Newsletter/>
      </PromoBar>
      <Footer></Footer> */}
    </>
  );
}

export default Outletity;
