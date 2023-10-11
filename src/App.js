import { React } from "react";
import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Blog from "./components/Blog/blog";
import Features from "./components/Features/features";
import Newarrival from "./components/Newarrival/newarrival";

import Contact from "./components/Contact/contact";
import Cart from "./components/cart/cart";
import Signin from "./components/Admin/Signin/signin";
import Register from "./components/Admin/Register/register";
import Dashboard from "./components/Admin/Dashboard/dashboard";
import Protected from "./components/Protected";
import Checkout from "./components/checkout/checkout";
import Product from "./components/Admin/Product/product";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(() => {
    const userLogged = localStorage.getItem("access_token");
    return userLogged || false;
  });

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="features" element={<Features />} />
        <Route path="newarrival" element={<Newarrival />} />
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="signin" element={<Signin />} />
        <Route path="register" element={<Register />} />
        <Route path="checkout" element={<Checkout />} />

        <Route
          path="/dashboard"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Dashboard />
            </Protected>
          }
        />
        <Route
          path="/checkout"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Checkout />
            </Protected>
          }
        />
        <Route
          path="/product"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Product />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
