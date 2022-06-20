import {Routes, Route} from "react-router-dom";
import useFetch from "hooks/useFetch";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import DeliveryCollection from "../pages/delivery&collection/DeliveryCollection";
import ReturnsRefunds from "../pages/returns&refunds/ReturnsRefunds";
import Products from "../pages/products/Products";
import Page404 from "../pages/Page404";

export default function RouterRoutes() {
  const {data} = useFetch("https://fakestoreapi.com/products");

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Delivery-Collections" element={<DeliveryCollection />} />
      <Route path="/Returns-Refunds" element={<ReturnsRefunds />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Products" element={<Products data={data} />} />
      <Route path="/Products/:category" element={<Products data={data} />} />
      {/* <Route path="/Products/:category/:id" element={<Product />} /> */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
