import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import ShopSection from "./ShopSection/ShopSection";
import Footer from "./Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <Header />
    <HeroSection />
    <ShopSection />
    <Footer />
  </Fragment>
);
