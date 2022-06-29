import React, {useLayoutEffect, useState} from "react";
import {CartContext} from "context/CartContext";
import {Routes, Route, useLocation} from "react-router-dom";
import useFetch from "hooks/useFetch";
import Home from "../pages/home/Home";
import DeliveryCollection from "../pages/delivery&collection/DeliveryCollection";
import ReturnsRefunds from "../pages/returns&refunds/ReturnsRefunds";
import Products from "../pages/products/Products";
import ProductInfo from "../pages/product/ProductInfo";
import Payment from "../pages/payment/Payment";
import BasketSummary from "../pages/basket-summary/BasketSummary";
import Page404 from "../pages/Page404";
import Success from "pages/success/Success";

export default function RouterRoutes() {
  const {data, error, loading} = useFetch("https://fakestoreapi.com/products");
  const {products, total} = CartContext();
  const [discountedTotal, setDiscountedTotal] = useState(
    JSON.parse(localStorage.getItem("newTotal")) || null
  );

  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Delivery-Collections" element={<DeliveryCollection />} />
      <Route path="/Returns-Refunds" element={<ReturnsRefunds />} />
      <Route path="/Products" element={<Products data={data} error={error} loading={loading} />}>
        <Route
          path=":category"
          element={<Products data={data} error={error} loading={loading} />}
        />
      </Route>
      <Route
        path="/ProductInfo/:id"
        element={<ProductInfo data={data} error={error} loading={loading} />}
      />
      <Route path="*" element={<Page404 />} />
      <Route
        path="/BasketSummary"
        element={
          <BasketSummary
            products={products}
            total={total}
            setDiscountedTotal={setDiscountedTotal}
            discountedTotal={discountedTotal}
          />
        }
      />
      <Route path="/Payment" element={<Payment discountedTotal={discountedTotal} />} />
      <Route path="/Success" element={<Success />} />
    </Routes>
  );
}
