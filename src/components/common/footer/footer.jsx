import React , { Component }from 'react'

class footer extends Component {
  componentDidMount(){
  

  }
render() {
  return (
    <>
    <footer className="main-footer">
        <div className="top-pattern-layer-dark"></div>
        

        <div className="widgets-section">
            <div className="auto-container">
                <div className="row clearfix">
                    
                   
                    <div className="column col-xl-3 col-lg-12 col-md-12 col-sm-12">
                        <div className="footer-widget about-widget">
                            <div className="logo">
                                <a href="#"><img src={require('../../../images/footer-logo.png')} alt=""/></a>
                            </div>
                            <div className="text">We provide end-to-end Application design and development services globally. From B2C native applications to robust cross-platform cloud computing IAAS, PAAS, SAAS in AWS , Azure GCP, Heroku and others.</div>
                            <div className="info">
                                <ul>
                                    <li>No: 28, near GH, Scuddar Nagar, Tindivanam, Tamil Nadu 604001</li>
                                    <li>Call us <a href="tel:+91 89035 00142"><strong>+91 89035 00142</strong></a></li>
                                    <li><a href="mailto:support@Kloudping.com">support@Kloudping.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                   
                    <div className="column col-xl-9 col-lg-12 col-md-12 col-sm-12">
                        <div className="footer-widget links-widget">
                            <div className="widget-content">
                                <div className="row clearfix">
                                    <div className="col-lg-8 col-md-12 col-sm-12">
                                        <div className="row clearfix">
                                            <div className="column col-lg-4 col-md-4 col-sm-12">
                                                <div className="widget-title">
                                                    <h4>What We Do</h4>
                                                </div>
                                                <ul className="links">
                                                    <li><a href="#">Cloud Integration</a></li>
                                                    <li><a href="#">Business Security</a></li>
                                                    <li><a href="#">Startup Projects</a></li>
                                                    <li><a href="#">Product Engineering</a></li>
                                                    <li><a href="#">Data Infrastructure</a></li>
                                                </ul>
                                            </div>
                                            <div className="column col-lg-4 col-md-4 col-sm-12">
                                                <div className="widget-title">
                                                    <h4>About Us</h4>
                                                </div>
                                                <ul className="links">
                                                    <li><a href="#">Who We Are</a></li>
                                                    <li><a href="#">Case Studies</a></li>
                                                    <li><a href="#">Career Opportunities</a></li>
                                                    <li><a href="#">Our Clients</a></li>
                                                </ul>
                                            </div>
                                            <div className="column col-lg-4 col-md-4 col-sm-12">
                                                <div className="widget-title">
                                                    <h4>Support</h4>
                                                </div>
                                                <ul className="links">
                                                    <li><a href="#">View Help Topics</a></li>
                                                    <li><a href="#">Latest Articles</a></li>
                                                    <li><a href="#">Technology Consulting</a></li>
                                                    <li><a href="#">Terms Of Service</a></li>
                                                    <li><a href="#">Contact Us</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column col-lg-4 col-md-12 col-sm-12">
                                        <div className="widget-title empty-title">
                                            <h4>Get In Touch</h4>
                                        </div>
                                      
                                        <div className="newsletter-form">
                                            <form method="post" action="http://t.commonsupport.xyz/Kloudping/contact">
                                                <div className="form-group clearfix">
                                                    <input type="email" name="email" defaultValue="" placeholder="Email address" required/>
                                                    <button type="submit" className="theme-btn newsletter-btn"><span className="icon fa fa-paper-plane"></span></button>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="social-links">
                                            <div className="title text">Get the latest news & updates</div>
                                            <ul className="clearfix">
                                                <li><a href="#"><span className="fab fa-facebook-square"></span></a></li>
                                                <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                                <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                                <li><a href="#"><span className="fab fa-youtube"></span></a></li>
                                                <li><a href="#"><span className="fab fa-pinterest"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
     
        <div className="footer-bottom">
            <div className="auto-container">
                <div className="inner">
                    <div className="copyright">&copy; 2023 <strong>Kloudping IT Solutions</strong>. All rights reserved. <a href="#">Privacy Policy</a></div>
                </div>
            </div>
        </div>
        
    </footer>
      
    </>
  )
}
}


export default footer