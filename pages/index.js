import React, {Component} from 'react'
import Layout from '../layout/default'

class Index extends Component{
  render(){
    return(
      <Layout>          
          <section className="home-slider owl-carousel">
            <div className="slider-item" style={{'backgroundImage':'url(images/slide1.jpg)'}}>
              <div className="overlay"></div>
              <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-start" data-scrollax-parent="true">
                <div className="col-md-6 ftco-animate">
                  <h1 className="mb-4">Auro University</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  <p><a href="#" className="btn btn-primary px-4 py-3 mt-3">Contact Us</a></p>
                </div>
              </div>
              </div>
            </div>

            <div className="slider-item" style={{'backgroundImage':'url(images/slide2.jpg)'}}>
              <div className="overlay"></div>
              <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-start" data-scrollax-parent="true">
                <div className="col-md-6 ftco-animate">
                  <h1 className="mb-4">University, College School Education</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  <p><a href="#" className="btn btn-primary px-4 py-3 mt-3">Contact Us</a></p>
                </div>
              </div>
              </div>
            </div>
          </section>

          <section className="ftco-services ftco-no-pb">
            <div className="container-wrap">
              <div className="row no-gutters">
                <div className="col-md-3 d-flex services align-self-stretch py-5 px-4 ftco-animate bg-primary">
                  <div className="media block-6 d-block text-center">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-teacher"></span>
                    </div>
                    <div className="media-body p-2 mt-3">
                      <h3 className="heading">Library</h3>
                      <p>The LRC has a vast collection of books, magazines, offline and online journals, as well as a comprehensive audio & video collection.</p>
                    </div>
                  </div>      
                </div>
                <div className="col-md-3 d-flex services align-self-stretch py-5 px-4 ftco-animate bg-darken">
                  <div className="media block-6 d-block text-center">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-reading"></span>
                    </div>
                    <div className="media-body p-2 mt-3">
                      <h3 className="heading">Research Programme</h3>
                      <p>One of the principles of academic transactions of AURO University for contributing to the process of creation of knowledge.</p>
                    </div>
                  </div>    
                </div>
                <div className="col-md-3 d-flex services align-self-stretch py-5 px-4 ftco-animate bg-primary">
                  <div className="media block-6 d-block text-center">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-books"></span>
                    </div>
                    <div className="media-body p-2 mt-3">
                      <h3 className="heading">AURO in News</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                  </div>      
                </div>
                <div className="col-md-3 d-flex services align-self-stretch py-5 px-4 ftco-animate bg-darken">
                  <div className="media block-6 d-block text-center">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-diploma"></span>
                    </div>
                    <div className="media-body p-2 mt-3">
                      <h3 className="heading">Sport Clubs</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                  </div>      
                </div>
              </div>
            </div>
          </section>
          
          <section className="ftco-section ftco-no-pt ftc-no-pb">
            <div className="container">
              <div className="row d-flex">
                <div className="col-md-5 order-md-last wrap-about wrap-about d-flex align-items-stretch">
                  <div className="img" style={{'backgroundImage': 'url(images/about.jpg)'}}></div>
                </div>
                <div className="col-md-7 wrap-about py-5 pr-md-4 ftco-animate">
                  <h2 className="mb-4">Life @ Auro</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="services-2 d-flex">
                        <div className="icon mt-2 d-flex justify-content-center align-items-center"><span className="flaticon-security"></span></div>
                        <div className="text pl-3">
                          <h3>Sports Health & Wellness</h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="services-2 d-flex">
                        <div className="icon mt-2 d-flex justify-content-center align-items-center"><span className="flaticon-reading"></span></div>
                        <div className="text pl-3">
                          <h3>Excellent Hostels</h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="services-2 d-flex">
                        <div className="icon mt-2 d-flex justify-content-center align-items-center"><span className="flaticon-diploma"></span></div>
                        <div className="text pl-3">
                          <h3>Student Development</h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="services-2 d-flex">
                        <div className="icon mt-2 d-flex justify-content-center align-items-center"><span className="flaticon-education"></span></div>
                        <div className="text pl-3">
                          <h3>Happenings @ AURO</h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="services-2 d-flex">
                        <div className="icon mt-2 d-flex justify-content-center align-items-center"><span className="flaticon-jigsaw"></span></div>
                        <div className="text pl-3">
                          <h3>Book Talk</h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="services-2 d-flex">
                        <div className="icon mt-2 d-flex justify-content-center align-items-center"><span className="flaticon-jigsaw"></span></div>
                        <div className="text pl-3">
                          <h3>Book Talk</h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          

          <section className="ftco-section ftco-counter img" id="section-counter" style={{'backgroundImage': 'url(images/bg_3.jpg)'}} data-stellar-background-ratio="0.5">
            <div className="container">
              <div className="row justify-content-center mb-5 pb-2 d-flex">
                <div className="col-md-6 align-items-stretch d-flex">
                  <div className="img img-video d-flex align-items-center" style={{'backgroundImage': 'url(images/slide2.jpg)'}}>
                    <div className="video justify-content-center">
                      <a href="https://vimeo.com/45830194" className="icon-video popup-vimeo d-flex justify-content-center align-items-center">
                        <span className="ion-ios-play"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 heading-section heading-section-white ftco-animate pl-lg-5 pt-md-0 pt-5">
                  <h2 className="mb-4">AURO University</h2>
                  <p>AURO UNIVERSITY is an environment of collaboration and creativity driven by self-discovery of “Inner Being” that ENCOURAGES, ENABLES and EMPOWERS students in their INTELLECTUAL, EMOTIONAL and SPIRITUAL GROWTH.</p>
                  <p>The AURO University campus provides dynamic, energetic and progressive learning for students of tomorrow. Our campus atmosphere inspires students to discover themselves and to realize their highest potential. Students will be enriched through academic excellence, transformative experiences and excellent infrastructure facilities.</p>
                </div>
              </div>	
              <div className="row d-md-flex align-items-center justify-content-center">
                <div className="col-lg-12">
                  <div className="row d-md-flex align-items-center">
                    <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                      <div className="block-18">
                        <div className="icon"><span className="flaticon-doctor"></span></div>
                        <div className="text">
                          <strong className="number" data-number="18">0</strong>
                          <span>Certified Teachers</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                      <div className="block-18">
                        <div className="icon"><span className="flaticon-doctor"></span></div>
                        <div className="text">
                          <strong className="number" data-number="401">0</strong>
                          <span>Students</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                      <div className="block-18">
                        <div className="icon"><span className="flaticon-doctor"></span></div>
                        <div className="text">
                          <strong className="number" data-number="30">0</strong>
                          <span>Courses</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                      <div className="block-18">
                        <div className="icon"><span className="flaticon-doctor"></span></div>
                        <div className="text">
                          <strong className="number" data-number="50">0</strong>
                          <span>Awards Won</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="ftco-section">
            <div className="container-fluid px-4">
              <div className="row justify-content-center mb-5 pb-2">
                <div className="col-md-8 text-center heading-section ftco-animate">
                  <h2 className="mb-4"><span>Academics</span> </h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>	
              <div className="row">
                <div className="col-md-3 course ftco-animate">
                  <div className="img" style={{'backgroundImage': 'url(images/School-Of-Business.jpg)'}}></div>
                  <div className="text pt-4">
                    <h3><a href="#">School of Business</a></h3>
                    <p><a href="#" className="btn btn-primary">Read More</a></p>
                  </div>
                </div>
                <div className="col-md-3 course ftco-animate">
                  <div className="img" style={{'backgroundImage': 'url(images/School-Of-Hospitality-Management.jpg)'}}></div>
                  <div className="text pt-4">
                    <h3><a href="#">School of Hospitality Management</a></h3>
                    <p><a href="#" className="btn btn-primary">Read More</a></p>
                  </div>
                </div>
                <div className="col-md-3 course ftco-animate">
                  <div className="img" style={{'backgroundImage': 'url(images/School-Of-Information-Technology.jpg)'}}></div>
                  <div className="text pt-4">
                    <h3><a href="#">School of Information Technology</a></h3>
                    <p><a href="#" className="btn btn-primary">Read More</a></p>
                  </div>
                </div>
                <div className="col-md-3 course ftco-animate">
                  <div className="img" style={{'backgroundImage': 'url(images/School-Of-Law.jpg)'}}></div>
                  <div className="text pt-4">
                    <h3><a href="#">School of Law</a></h3>
                    <p><a href="#" className="btn btn-primary">Read More</a></p>
                  </div>
                </div>
                <div className="col-md-3 course ftco-animate">
                  <div className="img" style={{'backgroundImage': 'url(images/school-of-design-aurouniversity.jpg)'}}></div>
                  <div className="text pt-4">
                    <h3><a href="#">School of Design</a></h3>
                    <p><a href="#" className="btn btn-primary">Read More</a></p>
                  </div>
                </div>
                <div className="col-md-3 course ftco-animate">
                  <div className="img" style={{'backgroundImage': 'url(images/school-of-journalism-and-mass-communication-aurouniversity.jpg)'}}></div>
                  <div className="text pt-4">
                    <h3><a href="#">School of Journalism & Mass Communications</a></h3>
                    <p><a href="#" className="btn btn-primary">Read More</a></p>
                  </div>
                </div>
                <div className="col-md-3 course ftco-animate">
                  <div className="img" style={{'backgroundImage': 'url(images/School-Of-Liberal-Arts-Human-Sciences.jpg)'}}></div>
                  <div className="text pt-4">
                    <h3><a href="#">School of Liberal Art & Human Sceinces</a></h3>
                    <p><a href="#" className="btn btn-primary">Read More</a></p>
                  </div>
                </div>
                <div className="col-md-3 course ftco-animate">
                  <div className="img" style={{'backgroundImage': 'url(images/PhD-Programme.jpg)'}}></div>
                  <div className="text pt-4">
                    <h3><a href="#">Research & PhD Programs</a></h3>
                    <p><a href="#" className="btn btn-primary">Read More</a></p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="ftco-section bg-light">
            <div className="container-fluid px-4">
              <div className="row justify-content-center mb-5 pb-2">
                <div className="col-md-8 text-center heading-section ftco-animate">
                  <h2 className="mb-4">Meet Our Faculty</h2>
                  <p>AURO University's ongoing Professional Growth and Development program ensures Faculty remain at the forefront of education practice.</p>
                </div>
              </div>	
              <div className="row">
                <div className="col-md-6 col-lg-3 ftco-animate">
                  <div className="staff">
                    <div className="img-wrap d-flex align-items-stretch">
                      <div className="img align-self-stretch" style={{'backgroundImage': 'url(images/prof-rohit-singh.jpg)'}}></div>
                    </div>
                    <div className="text pt-3 text-center">
                      <h3>Dr. Rohit Singh</h3>
                      <span className="position mb-2">Professor in Marketing & Dean Academics</span>
                      <div className="faded">
                        <ul className="ftco-social text-center">
                          <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                          <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                          <li className="ftco-animate"><a href="#"><span className="icon-google-plus"></span></a></li>
                          <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 ftco-animate">
                  <div className="staff">
                    <div className="img-wrap d-flex align-items-stretch">
                      <div className="img align-self-stretch" style={{'backgroundImage': 'url(images/prof-krishna-Shashtri.jpg)'}}></div>
                    </div>
                    <div className="text pt-3 text-center">
                      <h3>Prof. Krishna Shashtri</h3>
                      <span className="position mb-2">Professor and Head - School of Design</span>
                      <div className="faded">
                        <ul className="ftco-social text-center">
                          <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                          <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                          <li className="ftco-animate"><a href="#"><span className="icon-google-plus"></span></a></li>
                          <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 ftco-animate">
                  <div className="staff">
                    <div className="img-wrap d-flex align-items-stretch">
                      <div className="img align-self-stretch" style={{'backgroundImage': 'url(images/prof-rohit-singh.jpg)'}}></div>
                    </div>
                    <div className="text pt-3 text-center">
                      <h3>Dr. Rohit Singh</h3>
                      <span className="position mb-2">Professor in Marketing & Dean Academics</span>
                      <div className="faded">
                        <ul className="ftco-social text-center">
                          <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                          <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                          <li className="ftco-animate"><a href="#"><span className="icon-google-plus"></span></a></li>
                          <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 ftco-animate">
                  <div className="staff">
                    <div className="img-wrap d-flex align-items-stretch">
                      <div className="img align-self-stretch" style={{'backgroundImage': 'url(images/prof-krishna-Shashtri.jpg)'}}></div>
                    </div>
                    <div className="text pt-3 text-center">
                      <h3>Prof. Krishna Shashtri</h3>
                      <span className="position mb-2">Professor and Head - School of Design</span>
                      <div className="faded">
                        <ul className="ftco-social text-center">
                          <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                          <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                          <li className="ftco-animate"><a href="#"><span className="icon-google-plus"></span></a></li>
                          <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="ftco-section ftco-consult ftco-no-pt ftco-no-pb" style={{'backgroundImage': 'url(images/bg_5.jpg)'}} data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container">
              <div className="row justify-content-end">
                <div className="col-md-8 py-5 px-md-5">
                  <div className="py-md-5">
                    <div className="heading-section heading-section-white ftco-animate mb-5">
                      <h2 className="mb-4">Quick Inquiry</h2>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <form action="#" className="appointment-form ftco-animate">
                      <div className="d-md-flex">
                        <div className="form-group md-6">
                          <input type="text" className="form-control" placeholder="Name*" />
                        </div>
                        <div className="form-group md-6">
                          <input type="text" className="form-control" placeholder="Email*" />
                        </div>
                      </div>
                      <div className="d-md-flex">                        
                        <div className="form-group md-6">
                          <input type="text" className="form-control" placeholder="Mobile*" />
                        </div>
                        <div className="form-group md-6">
                          <div className="form-field">
                            <div className="select-wrap">
                              <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                              <select name="" id="" className="form-control">
                                <option value="">Select Your School</option>
                                <option value="">School of Business</option>
                                <option value="">School of Law</option>
                                <option value="">School of Design</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-md-flex">
                        <div className="form-group">
                          <textarea name="" id="" cols="30" rows="2" className="form-control" placeholder="Query"></textarea>
                        </div>                        
                      </div>
                      <div className="d-md-flex">
                        <div className="form-group ml-md-4">
                          <input type="submit" value="Request A Quote" className="btn btn-primary py-3 px-4"/>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="ftco-section bg-light">
            <div className="container">
              <div className="row justify-content-center mb-5 pb-2">
                <div className="col-md-8 text-center heading-section ftco-animate">
                  <h2 className="mb-4">News & Events</h2>
                  <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4 ftco-animate">
                  <div className="blog-entry">
                    <a href="blog-single.html" className="block-20 d-flex align-items-end" style={{'backgroundImage': 'url(images/4th-May.jpg)'}}>
                      <div className="meta-date text-center p-2">
                        <span className="day">26</span>
                        <span className="mos">May</span>
                        <span className="yr">2020</span>
                      </div>
                    </a>
                    <div className="text bg-white p-4">
                      <h3 className="heading"><a href="#">Introduction to DRAWING CARTOONS - Abhijit Pariyal, Assistant</a></h3>
                      <div className="d-flex align-items-center mt-4">
                        <p className="mb-0"><a href="#" className="btn btn-primary">Read More <span className="ion-ios-arrow-round-forward"></span></a></p>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 ftco-animate">
                  <div className="blog-entry">
                    <a href="blog-single.html" className="block-20 d-flex align-items-end" style={{'backgroundImage': 'url(images/4th-May-Single-chip.jpg)'}}>
                      <div className="meta-date text-center p-2">
                        <span className="day">26</span>
                        <span className="mos">May</span>
                        <span className="yr">2020</span>
                      </div>
                    </a>
                    <div className="text bg-white p-4">
                      <h3 className="heading"><a href="#">Unsure about where the start-up industry is heading? Devina kothari, co-founder, Zuan Design Labs LLP</a></h3>
                      <div className="d-flex align-items-center mt-4">
                        <p className="mb-0"><a href="#" className="btn btn-primary">Read More <span className="ion-ios-arrow-round-forward"></span></a></p>
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 ftco-animate">
                  <div className="blog-entry">
                    <a href="blog-single.html" className="block-20 d-flex align-items-end" style={{'backgroundImage': 'url(images/5th-May-Law.jpg)'}}>
                      <div className="meta-date text-center p-2">
                        <span className="day">26</span>
                        <span className="mos">May</span>
                        <span className="yr">2020</span>
                      </div>
                    </a>
                    <div className="text bg-white p-4">
                      <h3 className="heading"><a href="#">Appplication of single-chip computer for IT innovations,School of IT arrange  the webinar</a></h3>
                      <div className="d-flex align-items-center mt-4">
                        <p className="mb-0"><a href="#" className="btn btn-primary">Read More <span className="ion-ios-arrow-round-forward"></span></a></p>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="ftco-gallery">
            <div className="container-wrap">
              <div className="row no-gutters">
                <div className="col-md-3 ftco-animate">
                  <a href="images/School-Of-Business.jpg" className="gallery image-popup img d-flex align-items-center" style={{'backgroundImage': 'url(images/School-Of-Business.jpg)'}}>
                    <div className="icon mb-4 d-flex align-items-center justify-content-center">
                      <span className="icon-instagram"></span>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 ftco-animate">
                  <a href="images/school-of-design-aurouniversity.jpg" className="gallery image-popup img d-flex align-items-center" style={{'backgroundImage': 'url(images/school-of-design-aurouniversity.jpg)'}}>
                    <div className="icon mb-4 d-flex align-items-center justify-content-center">
                      <span className="icon-instagram"></span>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 ftco-animate">
                  <a href="images/School-Of-Hospitality-Management.jpg" className="gallery image-popup img d-flex align-items-center" style={{'backgroundImage': 'url(images/School-Of-Hospitality-Management.jpg)'}}>
                    <div className="icon mb-4 d-flex align-items-center justify-content-center">
                      <span className="icon-instagram"></span>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 ftco-animate">
                  <a href="images/School-Of-Law.jpg" className="gallery image-popup img d-flex align-items-center" style={{'backgroundImage': 'url(images/School-Of-Law.jpg)'}}>
                    <div className="icon mb-4 d-flex align-items-center justify-content-center">
                      <span className="icon-instagram"></span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
      </Layout>
    )
  }
}

export default Index