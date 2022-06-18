import {Routes, Route} from "react-router-dom";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import DeliveryCollection from "../pages/delivery&collection/DeliveryCollection";
import ReturnsRefunds from "../pages/returns&refunds/ReturnsRefunds";
import Electronics from "../pages/electronics/Electronics";
import Mens from "../pages/mens/Mens";
import Womens from "../pages/womens/Womens";
import Jewelery from "../pages/jewelery/Jewelery";
import Page404 from "../pages/Page404";

export default function RouterRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Electronics" element={<Electronics />} />
      <Route path="/Mens" element={<Mens />} />
      <Route path="/Womens" element={<Womens />} />
      <Route path="/Jewelery" element={<Jewelery />} />
      <Route path="/Delivery-Collections" element={<DeliveryCollection />} />
      <Route path="/Returns-Refunds" element={<ReturnsRefunds />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<Page404 />} />
      {/* <Route path="/Products" element={<Products />} /> */}
    </Routes>
  );
}
