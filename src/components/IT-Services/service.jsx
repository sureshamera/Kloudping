import React , { Component }from 'react'
import Background7 from '../../images/background/banner-bg-1.jpg';
import Background8 from '../../images/background/image-3.jpg';
import Background9 from '../../images/background/image-2.jpg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
class service extends Component {
    componentDidMount() {
       }
    render() {
        return (
            <>
   <section className="inner-banner alternate">
        <div className="image-layer"  style={{ background: `url(${Background7})`}}      ></div>
		<div className="auto-container">
            <div className="inner">
    			<div className="title-box">
                    <h1>Services We Offer</h1>
                    <div className="d-text">Building a relationship between IT Services</div>
                </div>
            </div>
		</div>
    </section>

    <section className="services-section">
        <div className="gradient-layer"></div>

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
                                <div className="icon-box"><img src={require('../../images/icons/services/1.png')}       alt="" title=""/></div>
                            </div>
                            <h3><a href="datainfrastructure">Data Infrastructure</a></h3>
                            <div className="text">Cloud computing infrastructure is available for private cloud, public cloud, and hybrid cloud systems. It’s also possible to rent cloud infrastructure components from a cloud provider, through cloud infrastructure as a service (Iaas). Cloud infrastructure systems allow for integrated hardware and software and can provide a single management platform for multiple clouds.</div>
                            <div className="more-link"><a href="data-infrastructure.html"><span className="fa fa-arrow-right"></span></a></div>
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
                            <h3><a href="cloudintegration">IT Cloud Integration</a></h3>
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
                            <div className="more-link"><a href="Itstartup"><span className="fa fa-arrow-right"></span></a></div>
                        </div>
                    </div>

                </div>

              
                <div className="column col-lg-4 col-md-12 col-sm-12">
                    
                    <div className="service-block wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="icon-outer">
                                <span className="icon-bg"></span>
                                <div className="icon-box"><img src={require('../../images/icons/services/4.png')}  alt="" title=""/></div>
                            </div>
                            <h3><a href="productengineering">Product Engineering</a></h3>
                            <div className="text">With data gravity moving to the cloud, software development teams are facing pressure to deliver high-quality software while minimizing time to value.</div>
                            <div className="more-link"><a href="productengineering"><span className="fa fa-arrow-right"></span></a></div>
                        </div>
                    </div>

                    
                    <div className="service-block wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="icon-outer">
                                <span className="icon-bg"></span>
                                <div className="icon-box"><img src={require('../../images/icons/services/5.png')} alt="" title=""/></div>
                            </div>
                            <h3><a href="BusinessSecurity">Business Security</a></h3>
                            <div className="text">Cloud security is the protection of data stored online via cloud computing platforms from theft, leakage, and deletion. Methods of providing cloud security include firewalls, penetration testing, obfuscation, tokenization, virtual private networks (VPN), and avoiding public internet connections</div>
                            <div className="more-link"><a href="BusinessSecurity"><span className="fa fa-arrow-right"></span></a></div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="bottom-text">
                <div className="text">We’re ready to discover and unlock your potential. <a href=""><strong>Get The Solutions</strong></a> or Call us Today! <a href="tel:+91 8903500142"><strong>+91 8903500142</strong></a></div>
            </div>

        </div>
    </section>

    <section className="video-section alternate">
        <div className="image-layer" style={{ background: `url(${Background8})`}}   ></div>
        <div className="auto-container">
            <div className="video-link">
                <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="theme-btn lightbox-image"><span className="flaticon-play-button"></span></a>
            </div>
            <h2>Kloudping IT Solutions will get you on the move towards your goals.</h2>
        </div>
    </section>

    <section className="services-section-three">

<div className="auto-container">
    <div className="sec-title centered">
        <div className="upper-text">IT Related CaseStudies & Works</div>
        <h2><strong>Prominent IT Solutions</strong></h2>
    </div>
    <div className="services-box">
        <div className="row clearfix">
          
            <div className="service-block-four col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="icon-outer">
                        <span className="icon-bg"></span>
                        <div className="icon-box"><span className="themify-crown"></span></div>
                    </div>
                    <h3><a href='/#Services'>Pure Agile Methodology</a></h3>
                    <div className="text">Cross functional teams, meaning everyone needed in order to get completed work into production. There is a funnel of work feeding into the team that has been prioritised into value order, broken down as features.</div>
                </div>
            </div>
          
            <div className="service-block-four col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="icon-outer">
                        <span className="icon-bg"></span>
                        <div className="icon-box"><span className="themify-bar-chart-alt"></span></div>
                    </div>
                    <h3><a href='/#Services'>Passionate About Success</a></h3>
                    <div className="text">Passion gets you to do the things necessary to grow and improve. Instead of going through the motions in life, you will push on and work harder to solve problems. You will learn what it really takes to be successful.</div>
                </div>
            </div>
          
            <div className="service-block-four col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="icon-outer">
                        <span className="icon-bg"></span>
                        <div className="icon-box"><span className="themify-settings"></span></div>
                    </div>
                    <h3><a href='/#Services'>Global Technology Services</a></h3>
                    <div className="text">We provide creative solutions to clients around the world, creating things that get attention and meaningful..</div>
                </div>
            </div>
          
            <div className="service-block-four col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="icon-outer">
                        <span className="icon-bg"></span>
                        <div className="icon-box"><span className="themify-flag-alt"></span></div>
                    </div>
                    <h3><a href='/#Services'>Solve Customer’s IT Problems</a></h3>
                    <div className="text">Identifying a problem, developing possible solution paths, and taking the appropriate course of action.</div>
                </div>
            </div>
          
            <div className="service-block-four col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="icon-outer">
                        <span className="icon-bg"></span>
                        <div className="icon-box"><span className="themify-world"></span></div>
                    </div>
                    <h3><a href='/#Services'>Work With Many Partners </a></h3>
                    <div className="text">
A strategic partnership is a mutually beneficial arrangement between two separate companies that do not directly compete with one another. Companies have long been engaging in strategic partnerships to enhance their offers and offset costs.</div>
                </div>
            </div>
          
            <div className="service-block-four col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="icon-outer">
                        <span className="icon-bg"></span>
                        <div className="icon-box"><span className="themify-panel"></span></div>
                    </div>
                    <h3><a href='/#Services'>Core defaultValues and Missions</a></h3>
                    <div className="text">company’s core values can function as a kind of mission statement for the company, serving as common goals and guiding principles that inform company culture, product development, and the overall work environment..</div>
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
                <div className="lower-text">Sit amet consectetur adipisicing elitm sed eiusmod temp sed incididunt labore dolore magna aliquatenim veniam quis ipsum nostrud exer citation ullamco laboris.</div>
            </div>

       
            <div className="carousel-box">
            <OwlCarousel className="cases-carousel theme-carousel owl-theme owl-carousel" loop="true" margin= {40} autoheight="true" lazyload="true" nav= "true" dots= {false} autoplay= "true" autoplayTimeout= {7000} smartSpeed= {700} items={2} >
                   
                    <div className="slide-item">
                 
                        <div className="case-block">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <a href="case-studies.html"><img src={require('../../images/resource/case-image-1.jpg')}alt="" title=""/></a>
                                </figure>
                                <div className="content-box">
                                    <div className="title-box">
                                        <h4><a href="case-studies.html">Workflow Management</a></h4>
                                        <div className="sub-text">IT Networking</div>
                                    </div>
                                    <div className="text-content">
                                        <div className="text">Workflow management is the discipline of creating, documenting, monitoring and improving upon the series of steps, or workflow, that is required to complete a specific task. </div>
                                        <div className="link-box"><a href="case-studies.html">View Case Study <span className="arrow fa fa-arrow-right"></span></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                    <div className="slide-item">
                 
                        <div className="case-block">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <a href="case-studies.html"><img src={require('../../images/resource/case-image-2.jpg')} alt="" title=""/></a>
                                </figure>
                                <div className="content-box">
                                    <div className="title-box">
                                        <h4><a href="case-studies.html">Data Machine Learning</a></h4>
                                        <div className="sub-text">Artificial Intelligence</div>
                                    </div>
                                    <div className="text-content">
                                        <div className="text">Data cloud is a crucial component in the field of Machine Learning.It refers to the set of observations or measurements that can be used to train a machine-learning model.</div>
                                        <div className="link-box"><a href="case-studies.html">View Case Study <span className="arrow fa fa-arrow-right"></span></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                    <div className="slide-item">
                 
                        <div className="case-block">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <a href="case-studies.html"><img src={require('../../images/resource/case-image-1.jpg')} alt="" title=""/></a>
                                </figure>
                                <div className="content-box">
                                    <div className="title-box">
                                        <h4><a href="case-studies.html">Workflow Management</a></h4>
                                        <div className="sub-text">IT Networking</div>
                                    </div>
                                    <div className="text-content">
                                        <div className="text">Workflow management is the discipline of creating, documenting, monitoring and improving upon the series of steps, or workflow, that is required to complete a specific task. </div>
                                        <div className="link-box"><a href="case-studies.html">View Case Study <span className="arrow fa fa-arrow-right"></span></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                    <div className="slide-item">
                 
                        <div className="case-block">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <a href="case-studies.html"><img src={require('../../images/resource/case-image-2.jpg')} alt="" title=""/></a>
                                </figure>
                                <div className="content-box">
                                    <div className="title-box">
                                        <h4><a href="case-studies.html">Data Machine Learning</a></h4>
                                        <div className="sub-text">Artificial Intelligence</div>
                                    </div>
                                    <div className="text-content">
                                        <div className="text">Data cloud is a crucial component in the field of Machine Learning.It refers to the set of observations or measurements that can be used to train a machine-learning model.</div>
                                        <div className="link-box"><a href="case-studies.html">View Case Study <span className="arrow fa fa-arrow-right"></span></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </OwlCarousel>
            </div>

            <div className="bottom-text">
                <div className="text">We’re ready to discover and unlock your potential. <strong>Call us Today!</strong> &nbsp;<a href="tel:+91 8903500142"><strong>+91 8903500142</strong></a></div>
            </div>

        </div>
    </section>

    <section className="testimonials-two">
        <div className="image-layer"  style={{ background: `url(${Background9})`}} ></div>

        <div className="auto-container">
            <div className="sec-title centered">
                <div className="upper-text">Read The Testimonials</div>
                <h2>What Clients Says <strong>About Us</strong></h2>
                <div className="lower-text">Sit amet consectetur adipisicing elitm sed eiusmod temp sed incididunt labore dolore magna aliquatenim veniam quis ipsum nostrud exer citation ullamco laboris.</div>
            </div>

            <div className="carousel-box">
            <OwlCarousel className="testimonial-carousel theme-carousel owl-theme owl-carousel" loop="true" margin={30} autoheight="true" lazyload="true" nav= "true" dots= "true" autoplay= "true" autoplayTimeout= {5000} smartSpeed= {500}  items= {1}>
                   
                    <div className="testimonial-block">
                        <div className="inner">
                            <div className="content-box">
                                <div className="content">
                                    <div className="text">Fugiat nulla pariatur excepteur sint occaecat dolor cupidatat non proident, sunt in culp qui officia quisy deserunt mollit anim id est laborum. Sed untminim perspiciatis unde omnis iste.</div>
                                </div>
                            </div>
                            
                            <div className="info">
                                <div className="image"><img src={require('../../images/resource/author-thumb-1.jpg')} alt=""/></div>
                                <div className="name">Nelson Hilly</div>
                                <div className="designation">Technical</div>
                                <div className="rating"><span className="fa fa-star"></span> <span className="fa fa-star"></span> <span className="fa fa-star"></span> <span className="fa fa-star"></span> <span className="fa fa-star"></span></div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="testimonial-block">
                        <div className="inner">
                            <div className="content-box">
                                <div className="content">
                                    <div className="text">Fugiat nulla pariatur excepteur sint occaecat dolor cupidatat non proident, sunt in culp qui officia quisy deserunt mollit anim id est laborum. Sed untminim perspiciatis unde omnis iste.</div>
                                </div>
                            </div>
                            
                            <div className="info">
                                <div className="image"><img src={require('../../images/resource/author-thumb-2.jpg')} alt=""/></div>
                                <div className="name">Thomas Shely</div>
                                <div className="designation">Technical</div>
                                <div className="rating"><span className="fa fa-star"></span> <span className="fa fa-star"></span> <span className="fa fa-star"></span> <span className="fa fa-star"></span> <span className="fa fa-star"></span></div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="testimonial-block">
                        <div className="inner">
                            <div className="content-box">
                                <div className="content">
                                    <div className="text">Fugiat nulla pariatur excepteur sint occaecat dolor cupidatat non proident, sunt in culp qui officia quisy deserunt mollit anim id est laborum. Sed untminim perspiciatis unde omnis iste.</div>
                                </div>
                            </div>
                            
                            <div className="info">
                                <div className="image"><img src={require('../../images/resource/author-thumb-3.jpg')} alt=""/></div>
                                <div className="name">Peter Willy</div>
                                <div className="designation">Technical</div>
                                <div className="rating"><span className="fa fa-star"></span> <span className="fa fa-star"></span> <span className="fa fa-star"></span> <span className="fa fa-star"></span> <span className="fa fa-star"></span></div>
                            </div>
                        </div>
                    </div>

                </OwlCarousel>
            </div>
        </div>

    </section>

    <section className="contact-section">
        <div className="map-pattern-layer"></div>

        <div className="auto-container">
            <div className="row clearfix">
               
                <div className="text-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                        <div className="sec-title">
                            <div className="upper-text">Get In Touch With Us Today!</div>
                            <h2><strong>Need Our Services? <br/>Book Your Appointment</strong></h2>
                            <div className="lower-text">We Help Customers Digital Transformation By IT Solutions</div>
                        </div>

                        <ul className="info">
                            <li><div className="phone-title">call us for support</div></li>
                            <li className="phone"><a href="tel:(+1)500.369.2580"><span className="icon sl-icon-call-in"></span> <strong>+91 8903500142</strong></a></li>
                            <li className="email"><a href="mailto:support@Kloudping.com">support@Kloudping.com</a></li>
                        </ul>
                    </div>
                </div>
               
                <div className="form-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                        
                        <div className="form-box">
                            <div className="default-form appointment-form">
                                <form method="post" action="http://t.commonsupport.xyz/Kloudping/contact.html">
                                    <div className="row clearfix">                                    
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="field-name" placeholder="Your Name" required="" defaultValue=""/>
                                        </div>
                                        
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="email" name="field-name" placeholder="Email" required="" defaultValue=""/>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="field-name" placeholder="Phone" required="" defaultValue=""/>
                                        </div>

                                        <div className="form-group col-md-6 col-sm-12">
                                            <select className="custom-select-box" name="field-name">
                                                <option>Inquiry About</option>
                                                <option>IT Cloud Integration</option>
                                                <option>Business Security</option>
                                                <option>Product Engineering</option>
                                            </select>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <textarea name="field-name" placeholder="Message" required=""></textarea>
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

            </>
        )
    }
}
export default service
