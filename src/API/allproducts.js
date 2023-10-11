import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

const Allfurn = () => {
  const [narrivalData, setProducts] = useState([]);
  const { addItem, items } = useCart();

  const fetchProductsData = () => {
    fetch("http://localhost/furn/api//newarrival.php")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  };
  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <>
      {narrivalData.length > 0 && (
        <div className="row">
          {narrivalData.map((narrival, index) => (
            <div className="col-md-3 col-sm-4" key={index}>
              <div className="single-new-arrival">
                <div className="single-new-arrival-bg">
                  <img src={narrival.image} alt="new-arrivals images" />
                  <div className="single-new-arrival-bg-overlay"></div>
                  <div className="sale bg-1">
                    <p>sale</p>
                  </div>
                  <div className="new-arrival-cart">
                    <p>
                      <span className="lnr lnr-cart"></span>
                      <a href="#" onClick={() => addItem(narrival)}>
                        add <span>to </span> cart
                      </a>
                    </p>
                    <p className="arrival-review pull-right">
                      <span className="lnr lnr-heart"></span>
                      <span className="lnr lnr-frame-expand"></span>
                    </p>
                  </div>
                </div>
                <h4>
                  <a href="#">{narrival.nname}</a>
                </h4>
                <p className="arrival-product-price">${narrival.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Allfurn;
