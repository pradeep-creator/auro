import React, {Component} from 'react'
import Head from 'next/head'
import Link from 'next/link'


class Index extends Component{
  render(){
    return(
      <>
        <Head>          
            <title>Auro</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            {/* <!-- Favicon -->    */}

            {/* <!-- Google Fonts --> */}
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800&display=swap" rel="stylesheet" />

            {/* <!-- Stylesheets --> */}
            <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css" />
            <link rel="stylesheet" href="css/animate.css" />
            
            <link rel="stylesheet" href="css/owl.carousel.min.css" />
            <link rel="stylesheet" href="css/owl.theme.default.min.css" />
            <link rel="stylesheet" href="css/magnific-popup.css" />

            <link rel="stylesheet" href="css/aos.css" />

            <link rel="stylesheet" href="css/ionicons.min.css" />
            
            <link rel="stylesheet" href="css/flaticon.css" />
            <link rel="stylesheet" href="css/icomoon.css" />
            <link rel="stylesheet" href="css/style.css" />
	
        </Head>
        
        <div className="bg-top navbar-light">
            <div className="container">
                <div className="row no-gutters d-flex align-items-center align-items-stretch">
                    <div className="col-md-4 d-flex align-items-center py-4">
                        <a className="navbar-brand" href="">
                            <img src="/images/AuroUniversity-logo.png" width="200" />
                        </a>
                    </div>
                    <div className="col-lg-8 d-block">
                        <div className="row d-flex">
                            <div className="col-md d-flex topper align-items-center align-items-stretch py-md-4">
                                <div className="icon d-flex justify-content-center align-items-center"><span className="icon-paper-plane"></span></div>
                                <div className="text">
                                    <span>Email</span>
                                    <span>info@aurouniversity.edu.in</span>
                                </div>
                            </div>
                            <div className="col-md d-flex topper align-items-center align-items-stretch py-md-4">
                                <div className="icon d-flex justify-content-center align-items-center"><span className="icon-phone2"></span></div>
                                <div className="text">
                                    <span>Call</span>
                                    <span>+91 261 40 88100</span>
                                </div>
                            </div>
                            <div className="col-md topper d-flex align-items-center justify-content-end">
                                <p className="mb-0">
                                    <a href="#" className="btn py-2 px-3 btn-primary d-flex align-items-center justify-content-center">
                                        <span>Apply now</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container d-flex align-items-center px-4" style={{'width':'100%', 'max-width':'100%'}}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>
                <form action="#" className="searchform order-lg-last">
                    <div className="form-group d-flex">
                        <input type="text" className="form-control pl-3" placeholder="Search" />
                        <button type="submit" placeholder="" className="form-control search"><span className="ion-ios-search"></span></button>
                    </div>
                </form>
                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active"><a href="" className="nav-link pl-0">Home</a></li>
                        <li className="nav-item"><a href="" className="nav-link">About Us</a></li>
                        <li className="nav-item"><a href="" className="nav-link">Schools & Programs</a></li>
                        <li className="nav-item"><a href="" className="nav-link">Admissions</a></li>
                        <li className="nav-item"><a href="" className="nav-link">AURO Advantage</a></li>
                        <li className="nav-item"><a href="" className="nav-link">Collaborations</a></li>
                        <li className="nav-item"><a href="" className="nav-link">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* <!-- END nav --> */}
      </>
    )
  }
}

export default Index