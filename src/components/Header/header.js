import { useCart } from "react-use-cart";

import "./assets/logo/favicon.png";
import "./assets/css/font-awesome.min.css";
import "./assets/css/linearicons.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/bootsnav.css";
import "./assets/css/responsive.css";

import React, { useState } from "react";
import { logout } from "../Admin/Auth/auth";
// import Modal from "../Modal/Modal"; // Import the Modal component

// import "./assets/css/style.css";
// import "./assets/css/owl.carousel.min.css";
// import "./assets/css/owl.theme.default.min.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const [isSignedIn, setIssignedIn] = useState(() => {
    const userLogged = localStorage.getItem("access_token");
    return userLogged || false;
  });
  const signout = () => {
    setIssignedIn(false);
    logout();
    navigate("./");
  };
  const { totalUniqueItems } = useCart();

  const { cartTotal, items } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // // Function to open the modal
  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // // Function to close the modal
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  return (
    <div>
      <header id="home" className="welcome-hero">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#header-carousel"
              data-slide-to="0"
              className="active"
            >
              <span className="small-circle"></span>
            </li>
            <li data-target="#header-carousel" data-slide-to="1">
              <span className="small-circle"></span>
            </li>
            <li data-target="#header-carousel" data-slide-to="2">
              <span className="small-circle"></span>
            </li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <div className="single-slide-item slide1">
                <div className="container">
                  <div className="welcome-hero-content">
                    <div className="row">
                      <div className="col-sm-7">
                        <div className="single-welcome-hero">
                          <div className="welcome-hero-txt">
                            <h4>great design collection</h4>
                            <h2>cloth covered accent chair</h2>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiuiana smod tempor ut
                              labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip.
                            </p>
                            <div className="packages-price">
                              <p>
                                $ 399.00
                                <del>$ 499.00</del>
                              </p>
                            </div>
                            <button
                              className="btn-cart welcome-add-cart"
                              onclick="window.location.href='#'"
                            >
                              <span className="lnr lnr-plus-circle"></span>
                              add <span>to</span> cart
                            </button>
                            <button
                              className="btn-cart welcome-add-cart welcome-more-info"
                              onclick="window.location.href='#'"
                            >
                              more info
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-5">
                        <div className="single-welcome-hero">
                          <div className="welcome-hero-img">
                            <img
                              src="assets/images/slider/slider1.png"
                              alt="slider image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="single-slide-item slide2">
                <div className="container">
                  <div className="welcome-hero-content">
                    <div className="row">
                      <div className="col-sm-7">
                        <div className="single-welcome-hero">
                          <div className="welcome-hero-txt">
                            <h4>great design collection</h4>
                            <h2>mapple wood accent chair</h2>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiuiana smod tempor ut
                              labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip.
                            </p>
                            <div className="packages-price">
                              <p>
                                $ 199.00
                                <del>$ 299.00</del>
                              </p>
                            </div>
                            <button
                              className="btn-cart welcome-add-cart"
                              onclick="window.location.href='#'"
                            >
                              <span className="lnr lnr-plus-circle"></span>
                              add <span>to</span> cart
                            </button>
                            <button
                              className="btn-cart welcome-add-cart welcome-more-info"
                              onclick="window.location.href='#'"
                            >
                              more info
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-5">
                        <div className="single-welcome-hero">
                          <div className="welcome-hero-img">
                            <img
                              src="assets/images/slider/slider2.png"
                              alt="slider image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="single-slide-item slide3">
                <div className="container">
                  <div className="welcome-hero-content">
                    <div className="row">
                      <div className="col-sm-7">
                        <div className="single-welcome-hero">
                          <div className="welcome-hero-txt">
                            <h4>great design collection</h4>
                            <h2>valvet accent arm chair</h2>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiuiana smod tempor ut
                              labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip.
                            </p>
                            <div className="packages-price">
                              <p>
                                $ 299.00
                                <del>$ 399.00</del>
                              </p>
                            </div>
                            <button
                              className="btn-cart welcome-add-cart"
                              onclick="window.location.href='#'"
                            >
                              <span className="lnr lnr-plus-circle"></span>
                              add <span>to</span> cart
                            </button>
                            <button
                              className="btn-cart welcome-add-cart welcome-more-info"
                              onclick="window.location.href='#'"
                            >
                              more info
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-5">
                        <div className="single-welcome-hero">
                          <div className="welcome-hero-img">
                            <img
                              src="assets/images/slider/slider3.png"
                              alt="slider image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="top-area">
          <div className="header-area">
            <nav
              style={{ backgroundColor: "white" }}
              className="white-bg-navbar navbar navbar-default bootsnav navbar-fixed-top"
              data-minus-value-desktop="70"
              data-minus-value-mobile="55"
              data-speed="1000"
            >
              <div className="top-search">
                <div className="container">
                  <div className="input-group">
                    <span className="input-group-addon close-search">
                      <i className="fa fa-times"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="attr-nav">
                  <ul>
                    <li
                      style={{
                        border: "3px solid yellow",
                        backgroundColor: "#eedc82",
                        padding: "2px",
                        height: "40px",
                      }}
                    >
                      {isSignedIn ? (
                        <div className="header__right__auth">
                          <a
                            className="btn btn-link signbtn"
                            href="javascript:void(0)"
                            onClick={signout}
                          >
                            Sign out/
                          </a>
                          <a href="./dashboard">Dashboard</a>
                        </div>
                      ) : (
                        <div className="header__right__auth">
                          <li>
                            <a href="./signin">Sign in</a>/
                            <a href="./register">Register</a>
                          </li>
                        </div>
                      )}
                    </li>
                    <li>
                      {/* <a href="./signin">New Arrival🔐</a> */}
                      {/* <a href="#" onClick={openModal}>
                        Login🔐
                      </a> */}
                    </li>
                    <li>{/* <a href="./register">Register</a> */}</li>
                    <li className="dropdown  ">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <span className="lnr lnr-cart">Your Cart🛒</span>
                        <span className="badge badge-bg-1">
                          {totalUniqueItems}
                        </span>
                      </a>
                      <ul className="dropdown-menu cart-list s-cate bg-danger">
                        {/* Your cart items here */}
                        <b className="text-primary text-center">
                          Your Cart list <button>back to shop</button>
                        </b>
                        {items.map((item) => (
                          <li class="single-cart-list">
                            <a href="#" className="photo">
                              <img
                                src={item.image}
                                className="cart-thumb"
                                alt="image"
                              />
                            </a>
                            <div className="cart-list-txt">
                              <h6>
                                <a href="#">{item.nname}</a>
                              </h6>
                              <p>
                                <b>Price</b> -{" "}
                                <span className="price">${item.price}</span>
                              </p>
                            </div>
                            <div className="cart-close">
                              <span className="lnr lnr-cross"></span>
                            </div>
                          </li>
                        ))}

                        <li className="total">
                          <span>Total: ${cartTotal.toFixed(2)}</span>
                          <button
                            className="btn-cart pull-right"
                            onClick={() => (window.location.href = "./cart")}
                          >
                            View Cart
                          </button>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  {/* <Modal show={isModalOpen} onClose={closeModal} /> */}
                </div>

                <div className="navbar-header fixed-top">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#navbar-menu"
                  >
                    <i className="fa fa-bars"></i>
                  </button>
                  <a className="navbar-brand" href="./home">
                    furn.
                  </a>
                </div>

                <div
                  className="collapse navbar-collapse menu-ui-design navbar-center ms-auto"
                  id="navbar-menu"
                >
                  <ul
                    className="nav navbar-nav"
                    data-in="fadeInDown"
                    data-out="fadeOutUp"
                    style={{ marginLeft: "228px" }}
                  >
                    <li className="scroll">
                      <a href="./home">Home</a>
                    </li>
                    <li className="scroll">
                      <a href="./newarrival">Shop</a>
                    </li>
                    <li className="scroll">
                      <a href="./features">Features</a>
                    </li>
                    <li className="scroll">
                      <a href="./blog">Blog</a>
                    </li>
                    <li className="scroll">
                      <a href="./contact">Contact</a>
                    </li>
                    <li className="scroll">
                      <a href="./cart">Cart</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="clearfix"></div>
        </div>
      </header>
    </div>
  );
};

export default Header;
