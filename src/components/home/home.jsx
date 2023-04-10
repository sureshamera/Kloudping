import React , { Component }from 'react'
import Background from '../../images/background/image-1.jpg';
import Background2 from '../../images/background/image-2.jpg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import WOW from 'wowjs';
import CountUp from 'react-countup';
import $ from 'jquery';
class home extends Component {
    componentDidMount(){
        new WOW.WOW({
            live: false
        }).init();
        
     
        setTimeout(() => {
            $('body').addClass('page-loaded');
            setTimeout(() => {
                $('.preloader').delay(500).fadeOut(0);
               }, 1000);
        }, 500);
              
          
          
          
          

    }
  render() {
  return (
    <>
     <div className="preloader"><div className="icon"></div></div>
      <section className="banner-section banner-one">
        <div className="banner-curve"></div>

		<OwlCarousel className="banner-carousel  theme-owl-theme  owl-carousel" loop="true" margin = {0} autoheight="true"lazyload="true" nav="true" dots="true" autoplay="true" autoplayTimeout= {6000} smartSpeed= {300} items={1}>
			
           
			<div className="slide-item">
				<div className="auto-container">
					<div className="content-box">
                        <div className="round-layer"></div>
                        
                        <div className="content">
                            <div className="inner">
                                <div className="sub-title">IT Solutions For Easy Integration</div>
        						<h1>Deliver <strong>Innovative IT Solutions</strong> For Technology Insights</h1>
                                <div className="text">Building a relationship between IT companies & experts</div>
        						<div className="links-box">
                                    <a href='#/about'className="theme-btn btn-style-one"><div className="btn-title">More Details</div></a>
                                    <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="theme-btn video-btn lightbox-image"><div className="btn-title"><span className="icon flaticon-play-button"></span> Watch The Demo</div></a>
                                </div>
                            </div>
                        </div>
                        <div className="content-image"><img src={require('../../images/main-slider/content-image-1.png')} alt="" title=""/></div>
					</div>  
				</div>
			</div>

		
            <div className="slide-item">

                <div className="auto-container">
                    <div className="content-box">
                        <div className="round-layer"></div>

                        <div className="content">
                            <div className="inner alternate">
                                <div className="sub-title">IT Solutions For Easy Integration</div>
                                <h1><strong>IT Services</strong> To Develop  Solutions Your Way!</h1>
                                <div className="text">Building a relationship between IT companies & experts</div>
                                <div className="links-box">
                                    <a href='#/about'className="theme-btn btn-style-one"><div className="btn-title">More Details</div></a>
                                    <a href='#/Services' className="theme-btn btn-style-two"><div className="btn-title">Our Services</div></a>
                                </div>
                            </div>
                        </div>
                        <div className="content-image"><img src={require('../../images/main-slider/content-image-2.png')} alt="" title=""/></div>
                    </div>  
                </div>
            </div>

		
            <div className="slide-item">
                <div className="auto-container">
                    <div className="content-box">
                        <div className="round-layer"></div>
                        
                        <div className="content">
                            <div className="inner">
                                <div className="sub-title">IT Solutions For Easy Integration</div>
                                <h1>Deliver <strong>Innovative IT Solutions</strong> For Technology Insights</h1>
                                <div className="text">Building a relationship between IT companies & experts</div>
                                <div className="links-box">
                                    <a href='#/about' className="theme-btn btn-style-one"><div className="btn-title">More Details</div></a>
                                    <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="theme-btn video-btn lightbox-image"><div className="btn-title"><span className="icon flaticon-play-button"></span> Watch The Demo</div></a>
                                </div>
                            </div>
                        </div>
                        <div className="content-image"><img src={require('../../images/main-slider/content-image-1.png')} alt="" title=""/></div>
                    </div>  
                </div>
            </div>

           
            <div className="slide-item">

                <div className="auto-container">
                    <div className="content-box">
                        <div className="round-layer"></div>

                        <div className="content">
                            <div className="inner alternate">
                                <div className="sub-title">IT Solutions For Easy Integration</div>
                                <h1><strong>IT Services</strong> To Develop  Solutions Your Way!</h1>
                                <div className="text">Building a relationship between IT companies & experts</div>
                                <div className="links-box">
                                    <a href='#/about' className="theme-btn btn-style-one"><div className="btn-title">More Details</div></a>
                                    <a href='#/Services' className="theme-btn btn-style-two"><div className="btn-title">Our Services</div></a>
                                </div>
                            </div>
                        </div>
                        <div className="content-image"><img src={require('../../images/main-slider/content-image-2.png')} alt="" title=""/></div>
                    </div>  
                </div>
            </div>

		</OwlCarousel>
    </section>

    <section className="about-section">
        <div className="auto-container">
        	<div className="row clearfix">
         
                <div className="text-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                        <div className="sec-title">
                            <div className="upper-text">Kloudping - Welcome to IT Solutions</div>
                            <h2>Let us be your next <strong>Preferred IT Partner</strong></h2>
                        </div>

                        <div className="text-content">
                            <p>Cloud solutions, also known as cloud computing or cloud services, deliver IT resources on demand over the Internet. Cloud service providers such Amazon Web Services, Microsoft Azure and Google Cloud Platform can deliver everything from applications to data centers on a pay-for-use basis to their subscribers. With cloud solutions, IT resources can scale up or down quickly to meet business demands. Cloud solutions enable rapid access to flexible and low-cost IT resources without large upfront investments in hardware or time-consuming installation and maintenance. Businesses can provision exactly the type and size of computing resources they need to power a new initiative or operate their IT departments more efficiently. </p>
                            <ul className="list-style-one">
                                <li>We are committed to providing quality IT Services</li>
                                <li>Our benefits are endless for local IT Companies & Startups</li>
                                <li>Really know the true needs and expectations of customers</li>
                                <li>Talented & experienced management solutions for IT</li>
                                <li>Processes of achieving the excellence and continue improvements</li>
                            </ul>
                        </div>
                    </div>
                </div>
              
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                     
                        <div className="images">
                            <div className="row clearfix">
                                <figure className="image col-md-6 col-sm-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms"><img src={require('../../images/resource/about-image-1.jpg')} alt="" title=""/></figure>
                                <figure className="image col-md-6 col-sm-6 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms"><img src={require('../../images/resource/about-image-2.jpg')} alt="" title=""/></figure>
                                <figure className="image col-md-6 col-sm-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms"><img src={require('../../images/resource/about-image-3.jpg')} alt="" title=""/></figure>
                                <figure className="image col-md-6 col-sm-6 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms"><img src={require('../../images/resource/about-image-4.jpg')} alt="" title=""/></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="theme-separator"></div>

    <section className="services-section">
        <div className="gradient-layer"></div>
        <div className="pattern-layer"></div>

        <div className="auto-container">
            <div className="row clearfix">
              
                <div className="column col-lg-4 col-md-12 col-sm-12">
                    <div className="sec-title wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="upper-text">Kloudping IT Services</div>
                        <h2><strong>Solutions And Focus Areas</strong></h2>
                        <div className="lower-text">Digital Transformation By IT Solutions</div>
                    </div>

                   
                    <div className="service-block wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="icon-outer">
                                <span className="icon-bg"></span>
                                <div className="icon-box"><img src={require('../../images/icons/services/1.png')} alt="" title=""/></div>
                            </div>
                            <h3><a href="data-infrastructure.html">Data Infrastructure</a></h3>
                            <div className="text">
 
 Cloud computing infrastructure is available for private cloud, public cloud, and hybrid cloud systems. It’s also possible to rent cloud infrastructure components from a cloud provider, through cloud infrastructure as a service (Iaas). Cloud infrastructure systems allow for integrated hardware and software and can provide a single management platform for multiple clouds.</div>
                            <div className="more-link"><a href='#/Datainfrastructure'><span className="fa fa-arrow-right"></span></a></div>
                        </div>
                    </div>

                </div>

              
                <div className="column col-lg-4 col-md-12 col-sm-12">

                   
                    <div className="service-block wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="icon-outer">
                                <span className="icon-bg"></span>
                                <div className="icon-box"><img src={require('../../images/icons/services/2.png')}alt="" title=""/></div>
                            </div>
                            <h3><a href='#/Cloudintegration'>IT Cloud Integration</a></h3>
                            <div className="text">IT Cloud integration allows you to work with different data formats across different data systems, you can launch new services, products and applications faster. And you can more quickly respond to changing market environments and business opportunities to stay competitive.</div>
                            <div className="more-link"><a href="cloudintegration"><span className="fa fa-arrow-right"></span></a></div>
                        </div>
                    </div>

                   
                    <div className="service-block wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="icon-outer">
                                <span className="icon-bg"></span>
                                <div className="icon-box"><img src={require('../../images/icons/services/3.png')}alt="" title=""/></div>
                            </div>
                            <h3><a href="Itstartup">IT Startup Projects</a></h3>
                            <div className="text">Whether you’re starting out, or scaling to meet demand, connect with the right people, products, and best practices to help your startup grow.</div>
                            <div className="more-link"><a href='#/Itstartup'><span className="fa fa-arrow-right"></span></a></div>
                        </div>
                    </div>

                </div>

              
                <div className="column col-lg-4 col-md-12 col-sm-12">
                 
                    <div className="service-block wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="icon-outer">
                                <span className="icon-bg"></span>
                                <div className="icon-box"><img src={require('../../images/icons/services/4.png')} alt="" title=""/></div>
                            </div>

                            <h3><a href='#/Productengineering'>Product Engineering</a></h3>
                            <div className="text">With data gravity moving to the cloud, software development teams are facing pressure to deliver high-quality software while minimizing time to value. </div>
                            <div className="more-link"><a href='#/Productengineering'><span className="fa fa-arrow-right"></span></a></div>

                          

                        </div>
                    </div>

                    
                    <div className="service-block wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="icon-outer">
                                <span className="icon-bg"></span>
                                <div className="icon-box"><img src={require('../../images/icons/services/5.png')} alt="" title=""/></div>
                            </div>
                            <h3><a href='#/BusinessSecurity'>Business Security</a></h3>
                            <div className="text">Cloud security is the protection of data stored online via cloud computing platforms from theft, leakage, and deletion. Methods of providing cloud security include firewalls, penetration testing, obfuscation, tokenization, virtual private networks (VPN), and avoiding public internet connections</div>
                            <div className="more-link"><a href='#/BusinessSecurity'><span className="fa fa-arrow-right"></span></a></div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="bottom-text">
                <div className="text">We’re ready to discover and unlock your potential. <a href='#/Services'><strong>Get The Solutions</strong></a> or Call us Today! <a href="tel: +91 89035 00142"><strong> +91 89035 00142</strong></a></div>
            </div>

        </div>
    </section>

    <section className="locations-section">
        <div className="auto-container">
            <div className="sec-title centered">
                <div className="upper-text">Kloudping IT Services</div>
                <h2>Trusted By 5M Kloudping IT Customers Around The World</h2>
                <div className="lower-text">Customer experience is a global principle. Although it might look different in each location.   </div>
            </div>
            <div className="map-box">
              
                <div className="map-image">
                    <img src={require('../../images/icons/map-pattern.png')} alt="" title=""/>
                </div>

                
                <div className="location-point loc-one">
                    <div className="inner">5+ Projects Done For Local IT Companies</div>
                </div>
                
                <div className="location-point loc-two">
                    <div className="inner">10+ Projects Done For Local IT Companies</div>
                </div>
                
                <div className="location-point loc-three">
                    <div className="inner">5+ Projects Done For Local IT Companies</div>
                </div>
                
                <div className="location-point loc-four">
                    <div className="inner">10+ Projects Done For Local IT Companies</div>
                </div>
                
             {/*-- <div className="location-point loc-five">
                    <div className="inner">100+ Projects Done For Local IT Companies</div>
                </div>
                
                <div className="location-point loc-six">
                    <div className="inner">100+ Projects Done For Local IT Companies</div>
                </div>
                
                <div className="location-point loc-seven">
                    <div className="inner">100+ Projects Done For Local IT Companies</div>
                </div>
                
                <div className="location-point loc-eight">
                    <div className="inner">100+ Projects Done For Local IT Companies</div>
                </div>
                
                
                
               <div className="location-point loc-nine">
                    <div className="inner">100+ Projects Done For Local IT Companies</div>
                </div>

                
                <div className="location-point loc-ten">
                    <div className="inner">100+ Projects Done For Local IT Companies</div>
                </div>
                
                <div className="location-point loc-eleven">
                    <div className="inner">100+ Projects Done For Local IT Companies</div>
                </div>
                
                <div className="location-point loc-twelve">
                    <div className="inner">100+ Projects Done For Local IT Companies</div>
                </div> */}

            </div>
        </div>
    </section>

    <section className="default-bg-section">
        <div className="image-layer" style={{ background: `url(${Background})`}}></div>

        <div className="auto-container">
            <div className="content-box">
                <h2>Our IT Solutions will get you on move towards your destination faster than rivals in a more reliably way!</h2>
                <div className="link-box">
                    <a href='#/about' className="theme-btn btn-style-one"><div className="btn-title">Proven IT Solutions</div></a>
                </div>
            </div>
        </div>
    </section>

    <section className="fun-facts-section">

        <div className="auto-container">
            <div className="fact-counter">

                <div className="row clearfix">
                
                    <div className="counter-column col-lg-4 col-md-4 col-sm-12">
                        <div className="inner wow fadeInUp" data-wow-delay="0ms">
                            <div className="upper-title">System Integrations Done</div>
                            <div className="count-box"><CountUp className="count-text" end={5} enableScrollSpy="true" scrollSpyOnce="true">0</CountUp></div>
                            <div className="counter-title">for customers</div>
                        </div>
                    </div>

                
                    <div className="counter-column col-lg-4 col-md-4 col-sm-12 wow fadeInUp">
                        <div className="inner wow fadeInUp" data-wow-delay="300ms">
                            <div className="upper-title">Powerful Team to Focus</div>
                            <div className="count-box"><CountUp className="count-text" end={8} enableScrollSpy="true" scrollSpyOnce="true">0</CountUp>+</div>
                            <div className="counter-title">Expert Members</div>
                        </div>
                    </div>

                
                    <div className="counter-column col-lg-4 col-md-4 col-sm-12 wow fadeInUp">
                        <div className="inner wow fadeInUp" data-wow-delay="600ms">
                            <div className="upper-title">Launched Case Studies</div>
                            <div className="count-box"><CountUp className="count-text" end={100} enableScrollSpy="true" scrollSpyOnce="true">0</CountUp></div>
                            <div className="counter-title">Fully Launched</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <div className="theme-separator"></div>

    <section className="cases-section">
        <div className="gradient-layer"></div>

        <div className="auto-container">

            <div className="sec-title centered">
                <div className="upper-text">Our Case Studies</div>
                <h2><strong>IT Solutions & Projects</strong></h2>
                <div className="lower-text">Cloud Computing is responding well to the changing needs of the current times. Those needs are either be of businesses or educational institutions like colleges, schools which have to be fulfilled with cost-effective and scalable solutions.</div>
            </div>

           
            <div className="carousel-box">
            <OwlCarousel className="cases-carousel theme-carousel owl-theme owl-carousel" loop="true" margin= {30} autoheight="true" lazyload="true" nav= "true" dots= {false} autoplay= "true" autoplayTimeout= {7000} smartSpeed= {700} items={2} >
                    <div className="slide-item">
                      
                        <div className="case-block">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <a href='#/Casestudies'><img src={require('../../images/resource/case-image-1.jpg')}alt="" title=""/></a>
                                </figure>
                                <div className="content-box">
                                    <div className="title-box">
                                        <h4><a href='#/Casestudies'>Workflow Management</a></h4>
                                        <div className="sub-text">IT Networking</div>
                                    </div>
                                    <div className="text-content">
                                    <h4><a href='#/Casestudies'>Workflow Management</a></h4>
                                        <div className="text">Workflow management is the discipline of creating, documenting, monitoring and improving upon the series of steps, or workflow, that is required to complete a specific task. </div>
                                        <div className="link-box"><a href='#/Casestudies'>View Case Study <span className="arrow fa fa-arrow-right"></span></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                
                    <div className="slide-item">
                      
                        <div className="case-block">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <a href='#/Casestudies'><img src={require('../../images/resource/case-image-2.jpg')} alt="" title=""/></a>
                                </figure>
                                <div className="content-box">
                                    <div className="title-box">
                                        <h4><a href='#/Casestudies'>Data Machine Learning</a></h4>
                                        <div className="sub-text">Artificial Intelligence</div>
                                    </div>
                                    <div className="text-content">
                                        <h4><a href='#/Casestudies'>Data Machine Learning</a></h4>
                                        <div className="text">Data cloud is a crucial component in the field of Machine Learning.It refers to the set of observations or measurements that can be used to train a machine-learning model.</div>
                                        <div className="link-box"><a href='#/Casestudies'>View Case Study <span className="arrow fa fa-arrow-right"></span></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                
                    <div className="slide-item">
                      
                        <div className="case-block">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <a href='#/Casestudies'><img src={require('../../images/resource/case-image-1.jpg')} alt="" title=""/></a>
                                </figure>
                                <div className="content-box">
                                    <div className="title-box">
                                        <h4><a href='#/Casestudies'>Workflow Management</a></h4>
                                        <div className="sub-text">IT Networking</div>
                                    </div>
                                    <div className="text-content">
                                        
                                        <div className="text">Workflow management is the discipline of creating, documenting, monitoring and improving upon the series of steps, or workflow, that is required to complete a specific task.</div>
                                        <div className="link-box"><a href='#/Casestudies'>View Case Study <span className="arrow fa fa-arrow-right"></span></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                
                    <div className="slide-item">
                    <h4><a href='#/Casestudies'>Workflow Management</a></h4>
                        <div className="case-block">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <a href='#/Casestudies'><img src={require('../../images/resource/case-image-2.jpg')} alt="" title=""/></a>
                                </figure>
                                <div className="content-box">
                                    <div className="title-box">
                                        <h4><a href='#/Casestudies'>Data Machine Learning</a></h4>
                                        <div className="sub-text">Artificial Intelligence</div>
                                    </div>
                                    <div className="text-content">
                                    <h4><a href='#/Casestudies'>Data Machine Learning</a></h4>
                                        <div className="text">Data cloud is a crucial component in the field of Machine Learning.It refers to the set of observations or measurements that can be used to train a machine-learning model.</div>
                                        <div className="link-box"><a href='#/Casestudies'>View Case Study <span className="arrow fa fa-arrow-right"></span></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </OwlCarousel>
            </div>

            <div className="bottom-text">
                <div className="text">We’re ready to discover and unlock your potential. <strong>Call us Today!</strong> &nbsp;<a href="tel: +91 89035 00142"><strong> +91 89035 00142</strong></a></div>
            </div>

        </div>
    </section>

    <section className="appointment-section">
        <div className="pattern-layer"></div>

        <div className="auto-container">
            <div className="row clearfix">
         
                <div className="text-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                        <div className="sec-title">
                            <div className="upper-text">Kloudping - Welcome to IT Solutions</div>
                            <h2>Why Choose <strong> Kloudping IT Solutions</strong></h2>
                            <div className="lower-text">gives you access to top-notch IT administrators with specific skill sets, negating the need to find and hire them yourself.</div>
                        </div>

                        <div className="content">
                           
                            <div className="service-block-two">
                                <div className="inner-box">
                                    <div className="icon-outer">
                                        <span className="icon-bg"></span>
                                        <div className="icon-box"><img src={require('../../images/icons/services/6.png')} alt="" title=""/></div>
                                    </div>
                                    <h3><a href='#/Services'>Easier To Implement</a></h3>
                                    <div className="text">the strategic approach to helping an organization adopt new procedures</div>
                                </div>
                            </div>
                           
                            <div className="service-block-two">
                                <div className="inner-box">
                                    <div className="icon-outer">
                                        <span className="icon-bg"></span>
                                        <div className="icon-box"><img src={require('../../images/icons/services/7.png')} alt="" title=""/></div>
                                    </div>
                                    <h3><a href='#/Services'>Increase Growth Rates</a></h3>
                                    <div className="text">measures its change from one period to another (month, quarter, year). It is very generally expressed as a percentage</div>
                                </div>
                            </div>
                           
                            <div className="service-block-two">
                                <div className="inner-box">
                                    <div className="icon-outer">
                                        <span className="icon-bg"></span>
                                        <div className="icon-box"><img src={require('../../images/icons/services/8.png')} alt="" title=""/></div>
                                    </div>
                                    <h3><a href='#/Services'>Branding Of The Future</a></h3>
                                    <div className="text">Branding Future is a venture engaged in the business of providing services to businesses such as Branding, Marketing, Public Relations as well as Cloud Management.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
                <div className="form-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <figure className="image"><img src={require('../../images/resource/featured-image-1.jpg')} alt="" title=""/></figure>
                       
                        <div className="form-box">
                            <div className="title">
                                <h3>Book Your Appointment</h3>
                                <div className="text">We Help Customers Digital Transformation By IT Solutions</div>
                            </div>
                            <div className="default-form appointment-form">
                                <form method="post" action="http://t.commonsupport.xyz/Kloudping/contact">
                                    <div className="row clearfix">                                    
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="field-name" placeholder="First Name" required="" defaultValue=""/>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="field-name" placeholder="Last Name" required="" defaultValue=""/>
                                        </div>
                                        
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="email" name="field-name" placeholder="Email" required="" defaultValue=""/>
                                        </div>

                                        <div className="form-group col-md-6 col-sm-12">
                                            <select className="custom-select-box" name="field-name">
                                                <option>Inquiry About</option>
                                                <option>IT Cloud Integration</option>
                                                <option>Business Security</option>
                                                <option>Product Engineering</option>
                                            </select>
                                        </div>
                
                                        <div className="form-group col-md-12 col-sm-12">
                                            <button type="submit" className="theme-btn btn-style-one"><span className="btn-title">Make a Request</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section className="testimonials-section">
        <div className="image-layer" style={{ background: `url(${Background2})`,backgroundAttachment:'fixed'}}></div>

        <div className="auto-container">
            <div className="carousel-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
            <OwlCarousel className="testimonial-carousel theme-carousel owl-theme owl-carousel" loop="true" margin={0} autoheight="true" lazyload="true" nav= "true" dots= "true" autoplay= "true" autoplayTimeout= {5000} smartSpeed= {500}  items= {1}>
                
                    <div className="slide-item">
                        <div className="inner">
                            <div className="icon-box"><span className="flaticon-chat-2"></span></div>
                            <div className="title">Best Services from  Kloudping IT Solutions!</div>
                            <div className="text">As technology continues to drive the business world, having a strong IT foundation is essential for the success and survival of organizations. When you work with the best IT services companies in India, you make your business technology competent and get a significant edge over your competitors.</div>
                            <div className="info">
                                <div className="name"> Teena</div>
                                <div className="designation">CEO, HR Manager</div>
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-item">
                        <div className="inner">
                            <div className="icon-box"><span className="flaticon-chat-2"></span></div>
                            <div className="title">Best Services from  Kloudping IT Solutions!</div>
                            <div className="text">IT solutions is that they provide the opportunity to use the latest technology in the market.</div>
                            <div className="info">
                                <div className="name"> Teena</div>
                                <div className="designation">CEO, HR Manager</div>
                            </div>
                        </div>
                    </div>
                
                    <div className="slide-item">
                        <div className="inner">
                            <div className="icon-box"><span className="flaticon-chat-2"></span></div>
                            <div className="title">Best Services from  Kloudping IT Solutions!</div>
                            <div className="text">Services include consulting, software development, systems integration, as well as hardware deployment and education.</div>
                            <div className="info">
                                <div className="name"> Teena</div>
                                <div className="designation">CEO, HR Manager</div>
                            </div>
                        </div>
                    </div>

                </OwlCarousel>
            </div>
        </div>

    </section>

    <section className="news-section">
        <div className="auto-container">

            <div className="sec-title centered">
                <div className="upper-text">Read  Kloudping IT News</div>
                <h2>Latest News & Articles</h2>
                <div className="lower-text">This will allow organizations to more easily take advantage of the best features and services of each provider. The growth of edge computing</div>
            </div>
            <div className="upper-row">
                <div className="row clearfix">
                  
                    <div className="news-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="image-box">
                                <a href='#/BlogFullPost'><img src={require('../../images/resource/blog-image-1.jpg')} alt="" title=""/></a>
                            </div>
                            <div className="lower-box">
                                <div className="category">IT Projects</div>
                                <h3><a href='#/BlogFullPost'>10 Efficient & Measurable Benefits of Software</a></h3>
                                <div className="meta-info">
                                    <ul className="clearfix">
                                        <li><a href="#">By Admin</a></li>
                                        <li><a href="#">24 Jan 2023</a></li>
                                    </ul>
                                </div>
                                <div className="more-link"><a href='#/BlogFullPost'><span className="fa fa-arrow-right"></span></a></div>
                            </div>
                        </div>
                    </div>
                  
                    <div className="news-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="image-box">
                                <a href='#/BlogFullPost'><img src={require('../../images/resource/blog-image-2.jpg')} alt="" title=""/></a>
                            </div>
                            <div className="lower-box">
                                <div className="category">Mobile Apps</div>
                                <h3><a href='#/BlogFullPost'>Native or Cross-Platform: Mobile Development</a></h3>
                                <div className="meta-info">
                                    <ul className="clearfix">
                                        <li><a href="#">By Admin</a></li>
                                        <li><a href="#">24 Jan 2023</a></li>
                                    </ul>
                                </div>
                                <div className="more-link"><a href='#/BlogFullPost'><span className="fa fa-arrow-right"></span></a></div>
                            </div>
                        </div>
                    </div>
                  
                    <div className="news-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="image-box">
                                <a href='#/BlogFullPost'><img src={require('../../images/resource/blog-image-3.jpg')} alt="" title=""/></a>
                            </div>
                            <div className="lower-box">
                                <div className="category">Development</div>
                                <h3><a href='#/BlogFullPost'>Vital Tips For Blockchain Software Product</a></h3>
                                <div className="meta-info">
                                    <ul className="clearfix">
                                        <li><a href="#">By Admin</a></li>
                                        <li><a href="#">24 Jan 2023</a></li>
                                    </ul>
                                </div>
                                <div className="more-link"><a href='#/BlogFullPost'><span className="fa fa-arrow-right"></span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lower-row">
                <div className="row clearfix">
                  
                    <div className="news-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="lower-box">
                                <div className="category">Security News</div>
                                <h3><a href='#/BlogFullPost'>Data Security with multiple business values</a></h3>
                                <div className="meta-info">
                                    <ul className="clearfix">
                                        <li><a href="#">By Admin</a></li>
                                        <li><a href="#">24 Jan 2023</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    <div className="news-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="lower-box">
                                <div className="category">Development News</div>
                                <h3><a href='#/BlogFullPost'>Leverage the full spectrum of technology stacks</a></h3>
                                <div className="meta-info">
                                    <ul className="clearfix">
                                        <li><a href="#">By Admin</a></li>
                                        <li><a href="#">24 Jan 2023</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    <div className="news-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="lower-box">
                                <div className="category">IT Sector News</div>
                                <h3><a href='#/BlogFullPost'>Commercial apps multi-platform and multi-device strategy</a></h3>
                                <div className="meta-info">
                                    <ul className="clearfix">
                                        <li><a href="#">By Admin</a></li>
                                        <li><a href="#">24 Jan 2023</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>

    <section className="sponsors-section">
        <div className="sponsors-outer">
          
            <div className="auto-container">
                
            <OwlCarousel className="sponsors-carousel theme-carousel owl-theme owl-carousel" loop= "true" margin= {30} autoheight="true" lazyload="true" nav="true" dots="true" autoplay= "true" autoplayTimeout={6000} smartSpeed={500} items={5}>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src={require('../../images/clients/1.jpg')} alt=""/></a></figure></div>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src={require('../../images/clients/2.jpg')} alt=""/></a></figure></div>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src={require('../../images/clients/3.jpg')} alt=""/></a></figure></div>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src={require('../../images/clients/4.jpg')} alt=""/></a></figure></div>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src={require('../../images/clients/5.jpg')} alt=""/></a></figure></div>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src={require('../../images/clients/1.jpg')} alt=""/></a></figure></div>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src={require('../../images/clients/2.jpg')} alt=""/></a></figure></div>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src={require('../../images/clients/3.jpg')} alt=""/></a></figure></div>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src={require('../../images/clients/4.jpg')} alt=""/></a></figure></div>
                    <div className="slide-item"><figure className="image-box"><a href="#"><img src={require('../../images/clients/5.jpg')} alt=""/></a></figure></div>
                </OwlCarousel>
            </div>
        </div>
    </section>
    </>
  )
}
}

export default home
