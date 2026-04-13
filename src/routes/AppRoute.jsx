import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Cart from "../cart/Cart";
import Reservations from "../reservations/Reservations";
import OrderOnline from "../order-online/OrderOnline";
import Login from "../login/Login";

function AppRoute() {
  return (
    <>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/reservations" element={<Reservations />}></Route>
        <Route path="/order" element={<OrderOnline />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default AppRoute;
