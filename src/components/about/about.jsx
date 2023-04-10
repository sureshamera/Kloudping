import React , { Component }from 'react'
import back1 from "../../images/background/image-1.jpg"
import CountUp from 'react-countup';

class about extends Component {
    componentDidMount() {
       }
    render() {
        return (
            <>
                <section className="inner-banner">
                    <div className="banner-curve"></div>
                    <div className="auto-container">
                        <div className="inner">
                            <div className="theme-icon"></div>
                            <div className="title-box">
                                <h1>About Us</h1>
                                <div className="d-text">Building a relationship between IT Services</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-section-three">
                    <div className="auto-container">
                        <div className="sec-title centered">
                            <div className="upper-text">Kloudping - Welcome to IT Solutions</div>
                            <h2><strong>Your next Preferred IT Partner</strong></h2>
                        </div>

                        <div className="upper-row">
                            <div className="row clearfix">
                 
                                <div className="text-column col-lg-6 col-md-12 col-sm-12">
                                    <div className="inner">
                                        <div className="text">
                                            <p>Cloud solutions, also known as cloud computing or cloud services, deliver IT resources on demand over the Internet. Cloud service providers such Amazon Web Services, Microsoft Azure and Google Cloud Platform can deliver everything from applications to data centers on a pay-for-use basis to their subscribers. With cloud solutions, IT resources can scale up or down quickly to meet business demands. Cloud solutions enable rapid access to flexible and low-cost IT resources without large upfront investments in hardware or time-consuming installation and maintenance. Businesses can provision exactly the type and size of computing resources they need to power a new initiative or operate their IT departments more efficiently. </p>

                                          
                                        </div>
                                    </div>
                                </div>
                 
                                <div className="text-column col-lg-6 col-md-12 col-sm-12">
                                    <div className="inner">
                                        <div className="text">
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
                            </div>
                        </div>

                        <div className="lower-row">
                            <div className="row clearfix">
                 
                                <div className="featured-block col-lg-4 col-md-6 col-sm-12">
                                    <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="image-box">
                                            <a href="services.html"><img src={require('../../images/resource/featured-image-4.jpg')} alt="" title="" /></a>
                                        </div>
                                        <div className="lower-box">
                                            <h3><a href="services.html">Easier To Implement</a></h3>
                                            <div className="text">While it can seem to be a huge task ahead, you can break up your onboarding into smaller, more manageable steps. This can make a huge difference to your implementation as it has a lot of benefits.</div>
                                            <div className="more-link"><a href="services.html"><span className="fa fa-arrow-right"></span></a></div>
                                        </div>
                                    </div>
                                </div>
                 
                                <div className="featured-block col-lg-4 col-md-6 col-sm-12">
                                    <div className="inner-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                        <div className="image-box">
                                            <a href="services.html"><img src={require('../../images/resource/featured-image-5.jpg')} alt="" title="" /></a>
                                        </div>
                                        <div className="lower-box">
                                            <h3><a href="services.html">Increase Growth Rates</a></h3>
                                            <div className="text">Growth rates are utilized by analysts, investors, and a company’s management to assess a firm’s growth periodically and make predictions about future performance.</div>
                                            <div className="more-link"><a href="services.html"><span className="fa fa-arrow-right"></span></a></div>
                                        </div>
                                    </div>
                                </div>
                 
                                <div className="featured-block col-lg-4 col-md-6 col-sm-12">
                                    <div className="inner-box wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                                        <div className="image-box">
                                            <a href="services.html"><img src={require('../../images/resource/featured-image-6.jpg')} alt="" title="" /></a>
                                        </div>
                                        <div className="lower-box">
                                            <h3><a href="services.html">Branding Of Future</a></h3>
                                            <div className="text">The future of our company branding through social media will likely continue to evolve and change as technology and social media platforms develop.</div>
                                            <div className="more-link"><a href="services.html"><span className="fa fa-arrow-right"></span></a></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
    
                <div className="theme-separator"></div>
                <section className="locations-section">
        <div className="auto-container">
            <div className="sec-title centered">
                <div className="upper-text">Kloudping IT Services</div>
                <h2>Trusted By 5M Kloudping IT Customers Around The World</h2>
                <div className="lower-text">Customer experience is a global principle. Although it might look different in each location.</div>
            </div>
            <div className="map-box">
               
                <div className="map-image">
                    <img src={require('../../images/icons/map-pattern.png')}alt="" title=""/>
                </div>

               
                <div className="location-point loc-one">
                    <div className="inner">5+ Projects Done For IT Companies</div>
                </div>
               
                <div className="location-point loc-two">
                    <div className="inner">10+ Projects Done For Local IT Companies</div>
                </div>
               
                <div className="location-point loc-three">
                    <div className="inner">5+ Projects Done For KnitLogix</div>
                </div>
               
                <div className="location-point loc-four">
                    <div className="inner">10+ Projects Done For Local IT Companies</div>
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
                   
        <section className="team-section">
        <div className="pattern-layer"></div>

        < div className="auto-container">
            <div className="row clearfix">

                <div className="column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                        <div className="sec-title">
                            <div className="upper-text">Ambitious & Dedicated Team</div>
                            <h2>Kloudping <strong>IT Experts</strong></h2>
                        </div>
                        <div className="text-content">
                            <div className="text"> Our Kloudping team that provides highest quality ICT solution, support and services. We are committed in providing excellent client services. We have the ability to draw from an experienced base of personnel whilst maintaining a personalized form of business.</div>
                        </div>

                        <div className="team-block wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                                <a href='#about'><img src={require('../../images/resource/team-image-1.jpg')} alt=""/></a>
                                </div>
                                <div className="title-box">
                                    <h3 className="name"><a href='#about'>Rajesh kumar</a></h3>
                                    <div className="designation">Platform Solution Architect</div>
                                </div>
                                <div className="text">Veniam quis nostrud exercitaon ullam laboris nis aliquip sed conseqal.</div>
                            </div>
                        </div>

                    </div>
                            </div>
                            <div className="column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">

                        <div className="team-block wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                                <a href='#about'><img src={require('../../images/resource/team-image-2.jpg')} alt=""/></a>
                                </div>
                                <div className="title-box">
                                    <h3 className="name"><a href='#about'>Teena</a></h3>
                                    <div className="designation">CEO , HR Manager</div>
                                </div>
                                <div className="text">Veniam quis nostrud exercitaon ullam laboris nis aliquip sed conseqal.</div>
                            </div>
                        </div>

                        <div className="team-block wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                                <a href='#about'><img src={require('../../images/resource/team-image-3.jpg')} alt=""/></a>
                                </div>
                                <div className="title-box">
                                    <h3 className="name"><a href='#about'>Chandru</a></h3>
                                    <div className="designation">Cloud Solution Architect</div>
                                </div>
                                <div className="text">Veniam quis nostrud exercitaon ullam laboris nis aliquip sed conseqal.</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="view-all link-box">
                <a href="about" className="theme-btn btn-style-one"><div className="btn-title">View Full Team</div></a>
            </div>
        </div>
    </section>
            </>
        )
    }
}
export default about
