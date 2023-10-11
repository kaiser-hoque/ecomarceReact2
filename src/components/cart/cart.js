import React, { useState } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { useCart } from "react-use-cart";

function Cart() {
  const { isEmpty, cartTotal, items, updateItemQuantity, removeItem } =
    useCart();
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const applyCoupon = () => {
    if (couponCode === "offer50") {
      const couponDiscount = cartTotal * 0.15; // 10% discount
      setDiscount(couponDiscount);
    } else {
      setDiscount(0); // Reset discount if the coupon code is invalid
    }
  };

  const discountedTotal = cartTotal - discount;

  if (isEmpty);
  return (
    <div>
      <Header />{" "}
      <div className="container mt-5">
        <div className="border border-3">
          <div className="row">
            <form className="col-md-12" method="post">
              <table className="table">
                <thead>
                  <tr>
                    <th
                      className="text-center text-white bg-warning"
                      style={{ backgroundColor: "#e1ad01", color: "white" }}
                    >
                      Image
                    </th>
                    <th
                      className="text-center text-white bg-warning"
                      style={{ backgroundColor: "#e1ad01", color: "white" }}
                    >
                      Product Name
                    </th>
                    <th
                      className="text-center text-white bg-warning"
                      style={{ backgroundColor: "#e1ad01", color: "white" }}
                    >
                      Price
                    </th>
                    <th
                      className="text-center text-white bg-warning"
                      style={{ backgroundColor: "#e1ad01", color: "white" }}
                    >
                      Quantity
                    </th>
                    <th
                      className="text-center text-white bg-warning"
                      style={{ backgroundColor: "#e1ad01", color: "white" }}
                    >
                      Total
                    </th>
                    <th
                      className="text-center text-white bg-warning"
                      style={{ backgroundColor: "#e1ad01", color: "white" }}
                    >
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.image}
                          alt="Image"
                          className="img-fluid"
                        />
                      </td>
                      <td>
                        <h2 className="h5 text-black">{item.nname}</h2>
                      </td>
                      <td>{"$" + item.price}</td>
                      <td>
                        <div
                          className="input-group"
                          style={{ maxWidth: "120px" }}
                        >
                          <span className="input-group-btn">
                            <button
                              className="btn btn-outline-secondary decrease"
                              type="button"
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity - 1)
                              }
                            >
                              -
                            </button>
                          </span>
                          <input
                            type="text"
                            className="form-control text-center quantity-amount"
                            value={item.quantity}
                            placeholder=""
                            aria-label="Quantity"
                            aria-describedby="button-addon1"
                          />
                          <span className="input-group-btn">
                            <button
                              className="btn btn-outline-secondary increase"
                              type="button"
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity + 1)
                              }
                            >
                              {" "}
                              +{" "}
                            </button>
                          </span>
                        </div>
                      </td>
                      <td>{"$" + item.itemTotal.toFixed(2)}</td>
                      <td className="text-center">
                        <button
                          type="button"
                          className="btn btn-warning text-white remove-product"
                          data-row-index="0"
                          onClick={() => removeItem(item.id)}
                        >
                          <span>Remove</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </form>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-6 mb-3 mb-md-0">
                  <button
                    className="btn btn-warning text-white"
                    style={{ backgroundColor: "#e1ad01", color: "white" }}
                    onClick={() => (window.location.href = "./home")}
                  >
                    Update Cart
                  </button>
                </div>
                <div className="col-md-6">
                  <button
                    className="btn btn-warning text-white"
                    style={{ backgroundColor: "#e1ad01", color: "white" }}
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label className="text-black h4 fs-2   " htmlFor="coupon">
                    Coupon
                  </label>

                  <p className="fs-4">
                    Enter your coupon code if you have one.
                  </p>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    applyCoupon();
                  }}
                >
                  <div className="col-md-8 mb-3 mb-md-0 mt-3">
                    <input
                      type="text"
                      className="form-control py-2"
                      id="coupon"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Coupon Code"
                    />
                  </div>
                  <div className="col-md-4 mt-3">
                    <button
                      className="btn btn-warning text-white"
                      style={{ backgroundColor: "#e1ad01", color: "white" }}
                    >
                      Apply Coupon
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 pl-5">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12 text-right border-bottom mb-5">
                      <h3 className="text-black h4 text-uppercase">
                        Cart Totals
                      </h3>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <span className="text-black">Subtotal</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">
                        {"$" + cartTotal.toFixed(2)}
                      </strong>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black">Discount</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">
                        {"$" + discount.toFixed(2)}
                      </strong>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black">Total</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">
                        {"$" + discountedTotal.toFixed(2)}
                      </strong>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <button
                        className="btn btn-black btn-lg py-3 text-white btn-block bg-warning"
                        onClick={() => (window.location.href = "./checkout")}
                        style={{ backgroundColor: "#e1ad01", color: "white" }}
                      >
                        Proceed To Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
