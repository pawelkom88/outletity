import React, {useLayoutEffect} from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import useAuthContext from "hooks/useAuthContext";
import ProtectedRoute from "./ProtectedRoute";
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
  const {user} = useAuthContext();
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
      <Route path="/Products/:category" element={<Products />} />
      <Route path="/ProductInfo/:id" element={<ProductInfo />} />
      <Route path="*" element={<Page404 />} />

      <Route
        path="/BasketSummary"
        element={
          <ProtectedRoute user={user} redirectPath={"/"}>
            <BasketSummary />
          </ProtectedRoute>
        }
      />
      <Route
        path="/Payment"
        element={
          <ProtectedRoute user={user} redirectPath={"/"}>
            <Payment />
          </ProtectedRoute>
        }
      />
      <Route
        path="/Success"
        element={
          <ProtectedRoute user={user} redirectPath={"/"}>
            <Success />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
