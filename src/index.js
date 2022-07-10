import React from "react";
import AuthContextProvider from "context/AuthContext";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import Outletity from "./Outletity";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Outletity />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
