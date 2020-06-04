import React, {Component} from 'react'
import Link from 'next/link'

class Index extends Component{
  render(){
    return(
      <>

    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-5">
            	<h2 className="ftco-heading-2">Have a Questions?</h2>
            	<div className="block-23 mb-3">
	              <ul>
	                <li><span className="icon icon-map-marker"></span><span className="text">AURO University Earthspace, Hazira Road, Opp ONGC Surat - 394510, Gujarat, India.</span></li>
	                <li><a href="#"><span className="icon icon-phone"></span><span className="text">+91 261 40 88100</span></a></li>
	                <li><a href="#"><span className="icon icon-envelope"></span><span className="text">info@aurouniversity.edu.in</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-5 ml-md-4">
              <h2 className="ftco-heading-2">Admissions</h2>
              <ul className="list-unstyled">
                <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>School of Design</a></li>
                <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>School of Journalism & Mass Communication</a></li>
                <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>School of IT</a></li>
                <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>Postgraduate</a></li>
                <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>School of Hospitality</a></li>
                <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>School of Business</a></li>
                <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>School of Law</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-5 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>Career</a></li>
                <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>Contact Us</a></li>
                <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>Undergraduate</a></li>
                <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>Postgraduate</a></li>
                <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>PhD Programme</a></li>
                <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>Book Talk</a></li>
                <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>News & Events</a></li>
                <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-5">
            	<h2 className="ftco-heading-2">Subscribe Us!</h2>
              <form action="#" className="subscribe-form">
                <div className="form-group">
                  <input type="text" className="form-control mb-2 text-center" placeholder="Enter email address" />
                  <input type="submit" value="Subscribe" className="form-control submit px-3" />
                </div>
              </form>
            </div>
            <div className="ftco-footer-widget mb-5">
            	<h2 className="ftco-heading-2 mb-0">Connect With Us</h2>
            	<ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">

            <p>
            Copyright &copy; All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  

        {/* <!-- scripts --> */}
        <script src="js/jquery.min.js"></script>
        <script src="js/jquery-migrate-3.0.1.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.easing.1.3.js"></script>
        <script src="js/jquery.waypoints.min.js"></script>
        <script src="js/jquery.stellar.min.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/jquery.magnific-popup.min.js"></script>
        <script src="js/aos.js"></script>
        <script src="js/jquery.animateNumber.min.js"></script>
        <script src="js/scrollax.min.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
        <script src="js/google-map.js"></script>
        <script src="js/main.js"></script>
        
      </>
    )
  }
}

export default Index