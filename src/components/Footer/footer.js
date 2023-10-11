import React from 'react'

const footer = () => {
    return (
        <div>
            <section id="newsletter"  className="newsletter">
			<div className="container">
				<div className="hm-footer-details">
					<div className="row">
						<div className=" col-md-3 col-sm-6 col-xs-12">
							<div className="hm-footer-widget">
								<div className="hm-foot-title">
									<h4>information</h4>
								</div>
								
								{/* <!--/.hm-foot-title--> */}
								<div className="hm-foot-menu">
									<ul>
										<li><a href="#">about us</a></li> 
										<li><a href="#">contact us</a></li> 
										<li><a href="#">news</a></li> 
										<li><a href="#">store</a></li> 
									</ul> 
								</div> 
							</div> 
						</div> 
						<div className=" col-md-3 col-sm-6 col-xs-12">
							<div className="hm-footer-widget">
								<div className="hm-foot-title">
									<h4>collections</h4>
								</div> 
								<div className="hm-foot-menu">
									<ul>
										<li><a href="#">wooden chair</a></li> 
										<li><a href="#">royal cloth sofa</a></li> 
										<li><a href="#">accent chair</a></li> 
										<li><a href="#">bed</a></li> 
										<li><a href="#">hanging lamp</a></li> 
									</ul> 
								</div> 
							</div> 
						</div> 
						<div className=" col-md-3 col-sm-6 col-xs-12">
							<div className="hm-footer-widget">
								<div className="hm-foot-title">
									<h4>my accounts</h4>
								</div> 
								<div className="hm-foot-menu">
									<ul>
										<li><a href="#">my account</a></li> 
										<li><a href="#">wishlist</a></li> 
										<li><a href="#">Community</a></li> 
										<li><a href="#">order history</a></li> 
										<li><a href="#">my cart</a></li> 
									</ul> 
								</div> 
							</div> 
						</div> 
						<div className=" col-md-3 col-sm-6  col-xs-12">
							<div className="hm-footer-widget">
								<div className="hm-foot-title">
									<h4>newsletter</h4>
								</div> 
								<div className="hm-foot-para">
									<p>
										Subscribe  to get latest news,update and information.
									</p>
								</div> 
								<div className="hm-foot-email">
									<div className="foot-email-box">
										<input type="text" className="form-control" placeholder="Enter Email Here...."/>
									</div> 
									<div className="foot-email-subscribe">
										<span><i className="fa fa-location-arrow"></i></span>
									</div>
								</div>	 
							</div> 
						</div> 
					</div> 
				</div> 


			</div> 
		</section>


		<footer id="footer"  class="footer">
			<div className="container">
				<div className="hm-footer-copyright text-center">
					<div className="footer-social">
						<a href="#"><i className="fa fa-facebook"></i></a>	
						<a href="#"><i className="fa fa-instagram"></i></a>
						<a href="#"><i className="fa fa-linkedin"></i></a>
						<a href="#"><i className="fa fa-pinterest"></i></a>
						<a href="#"><i className="fa fa-behance"></i></a>	
					</div>
					<p>
						&copy;copyright. designed and developed by <a href="https://www.themesine.com/">themesine</a>
					</p> 
				</div> 
			</div> 

			<div id="scroll-Top">
				<div className="return-to-top">
					<i className="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
				</div>
				
			</div> 
			
        </footer>      
        </div>
    )
}

export default footer;