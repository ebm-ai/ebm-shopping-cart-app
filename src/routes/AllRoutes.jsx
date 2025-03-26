import React from "react";
import About from "../pages/about/About";
import Cart from "../pages/cart/Cart";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import Layout from "../layouts/Layout";
import Checkout from "../pages/checkout/Checkout";
import Item from "../pages/item/Item";
import Sell from "../pages/sell/Sell";

import { Routes, Route } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
