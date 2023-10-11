import React,{useState,useEffect} from 'react';
import Header from '../Header/header'
import Footer from '../Footer/footer'
import { Fproduct } from '../../API/fproduct';
const Features = () => {
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



    return (
        <div>
			<Header/>
            <section id="feature" className="feature">
			<div className="container">
				<div className="section-header">
					<h2>featured products</h2>
				</div>
				{/* <!--/.section-header--> */}
				<div className="feature-content">
					<div className="row">
					{fproductData.map((fproduct, index) => (
						
						<div className="col-sm-3" key={index}>
							<div className="single-feature">
								<img src={fproduct.fimage} alt="feature image"/>
								<div className="single-feature-txt text-center">
									<p>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<span className="spacial-feature-icon"><i className="fa fa-star"></i></span>
										<span className="feature-review">(45 review)</span>
									</p>
									<h3><a href="#">{fproduct.fname}</a></h3>
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
						</div> */}
						{/* <div className="col-sm-3">
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
		    <Footer/>
        </div>
    )
}

export default Features