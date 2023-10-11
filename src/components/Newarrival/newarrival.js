import React, { useState, useEffect } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { Newarrival } from "../../API/narrival";

const Newarrivals = () => {
  const [narrivalData, setNarrivalData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Newarrival();
        setNarrivalData(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <section id="new-arrivals" className="new-arrivals">
        <div className="container">
          <div className="section-header">
            <h2>new arrivals</h2>
          </div>
          <div className="new-arrivals-content">
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
                          <a href="#">
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
                    <p className="arrival-product-price">${narrival.nmoney}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Newarrivals;
