import { React, useState, useEffect } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Carousel from "../caroseal/caroseal";
import { Latestblog } from "../../API/latestblog";
import { Fproduct } from "../../API/fproduct";
import { Newarrival } from "../../API/narrival";
import Allfurn from "../../API/allproducts";

const Home = () => {
  const [latestblogsData, setLatestBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Latestblog();
        setLatestBlogData(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  const [fproductData, setFproductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Fproduct();
        setFproductData(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

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
      <section id="populer-products" className="populer-products">
        <div className="container">
          <div className="populer-products-content">
            <div className="row">
              <div className="col-md-3">
                <div className="single-populer-products">
                  <div className="single-populer-product-img mt40">
                    <img
                      src="./assets/images/populer-products/p1.png"
                      alt="populer-products images"
                    />
                  </div>
                  <h2>
                    <a href="#">arm chair</a>
                  </h2>
                  <div className="single-populer-products-para">
                    <p>
                      Nemo enim ipsam voluptatem quia volu ptas sit asperna aut
                      odit aut fugit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-populer-products">
                  <div className="single-inner-populer-products">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <div className="single-inner-populer-product-img">
                          <img
                            src="assets/images/populer-products/p2.png"
                            alt="populer-products images"
                          />
                        </div>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <div className="single-inner-populer-product-txt">
                          <h2>
                            <a href="#">
                              latest designed stool <span>and</span> chair
                            </a>
                          </h2>
                          <p>
                            Edi ut perspiciatis unde omnis iste natusina error
                            sit voluptatem accusantium doloret mque laudantium,
                            totam rem aperiam.
                          </p>
                          <div className="populer-products-price">
                            <h4>
                              Sales Start from <span>$99.00</span>
                            </h4>
                          </div>
                          <button
                            className="btn-cart welcome-add-cart populer-products-btn"
                            onclick="window.location.href='#'"
                          >
                            discover more
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="single-populer-products">
                  <div className="single-populer-products">
                    <div className="single-populer-product-img">
                      <img
                        src="assets/images/populer-products/p3.png"
                        alt="populer-products images"
                      />
                    </div>
                    <h2>
                      <a href="#">hanging lamp</a>
                    </h2>
                    <div className="single-populer-products-para">
                      <p>
                        Nemo enim ipsam voluptatem quia volu ptas sit asperna
                        aut odit aut fugit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 		
		<!--/.populer-products--> */}
      {/* <!--populer-products end--> */}

      {/* <!--new-arrivals start --> */}
      <section id="new-arrivals" className="new-arrivals">
        <div className="container">
          <div className="section-header">
            <h2>new arrivals</h2>
          </div>
          {/* <!--/.section-header--> */}
          <div className="new-arrivals-content">
            <Allfurn />
          </div>
        </div>
        {/* <!--/.container-->*/}
      </section>

      {/* <!--new-arrivals end --> */}

      {/* <!--sofa-collection start --> */}

      <section id="sofa-collection">
        <div class="sofa-collection collectionbg1">
          <div class="container">
            <div class="sofa-collection-txt">
              <h2>unlimited sofa collection</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div class="sofa-collection-price">
                <h4>
                  strting from <span>$ 199</span>
                </h4>
              </div>
              <button
                class="btn-cart welcome-add-cart sofa-collection-btn"
                onclick="window.location.href='#'"
              >
                view more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <!--feature start --> */}
      <section id="feature" className="feature">
        <div className="container">
          <div className="section-header">
            <h2>featured products</h2>
          </div>

          <div className="feature-content">
            <div className="row">
              {fproductData.map((fproduct, index) => (
                <div className="col-sm-3" key={index}>
                  <div className="single-feature">
                    <img src={fproduct.fimage} alt="feature image" />
                    <div className="single-feature-txt text-center">
                      <p>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <span className="spacial-feature-icon">
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="feature-review">(45 review)</span>
                      </p>
                      <h3>
                        <a href="#">{fproduct.fname}</a>
                      </h3>
                      <h5>${fproduct.fmoney}</h5>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="col-sm-3">
							<div className="single-feature">
								<img src="assets/images/features/f2.jpg" alt="feature image"/>
								<div className="single-feature-txt text-center">
									<p>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<span className="spacial-feature-icon"><i className="fa fa-star"></i></span>
										<span className="feature-review">(45 review)</span>
									</p>
									<h3><a href="#">dinning table </a></h3>
									<h5>$200.00</h5>
								</div>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="single-feature">
								<img src="assets/images/features/f3.jpg" alt="feature image"/>
								<div className="single-feature-txt text-center">
									<p>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<span className="spacial-feature-icon"><i className="fa fa-star"></i></span>
										<span className="feature-review">(45 review)</span>
									</p>
									<h3><a href="#">chair and table</a></h3>
									<h5>$100.00</h5>
								</div>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="single-feature">
								<img src="assets/images/features/f4.jpg" alt="feature image"/>
								<div className="single-feature-txt text-center">
									<p>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<span className="spacial-feature-icon"><i className="fa fa-star"></i></span>
										<span className="feature-review">(45 review)</span>
									</p>
									<h3><a href="#">modern arm chair</a></h3>
									<h5>$299.00</h5>
								</div>
							</div>
						</div> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!--feature end --> */}

      {/* <!--blog start --> */}
      <section id="blog" className="blog">
        <div className="container">
          <div className="section-header">
            <h2>latest blog</h2>
          </div>

          {/* <!--/.section-header--> */}
          <div className="blog-content">
            <div className="row">
              {latestblogsData.map((blog, index) => (
                <div className="col-sm-4" key={index}>
                  <div className="single-blog">
                    <div className="single-blog-img">
                      <img src={blog.lbimage} alt="blog image" />
                      <div className="single-blog-img-overlay"></div>
                    </div>
                    <div className="single-blog-txt">
                      <h2>
                        <a href="#">{blog.lbheading}</a>
                      </h2>
                      <h3>
                        By <a href="#">{blog.lbname}/</a>
                        {blog.lbdate}{" "}
                      </h3>
                      <p>{blog.lbdescription}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="col-sm-4">
							<div className="single-blog">
								<div className="single-blog-img">
									<img src="assets/images/blog/b2.jpg" alt="blog image"/>
									<div className="single-blog-img-overlay"></div>
								</div>
								<div className="single-blog-txt">
									<h2><a href="#">Why Brands are Looking at Local Language</a></h2>
									<h3>By <a href="#">Robert Norby</a> / 18th March 2018</h3>
									<p>
										Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.... 
									</p>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="single-blog">
								<div className="single-blog-img">
									<img src="assets/images/blog/b3.jpg" alt="blog image"/>
									<div className="single-blog-img-overlay"></div>
								</div>
								<div className="single-blog-txt">
									<h2><a href="#">Why Brands are Looking at Local Language</a></h2>
									<h3>By <a href="#">Robert Norby</a> / 18th March 2018</h3>
									<p>
										Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.... 
									</p>
								</div>
							</div>
						</div> */}
            </div>
          </div>
        </div>

        {/* <!--/.container--> */}
      </section>
      {/* <!--/.blog-->
		<!--blog end --> */}

      {/* <!-- clients strat --> */}

      <Carousel />

      <Footer />
    </div>
  );
};

export default Home;
