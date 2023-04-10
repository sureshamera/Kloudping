import React , { Component }from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
class blogfullwidth extends Component {
    componentDidMount(){
       

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
                    <h1>Blog News</h1>
                    <div className="d-text">Building a relationship between IT Services</div>
                </div>
            </div>
		</div>
    </section>

    <section className="news-section blog-fullwidth">
        <div className="auto-container">
            <div className="news-posts">

            
                <div className="news-block-three">
                    <div className="inner-box">
                        <div className="image-box">
                            <a href="BlogFullPost"><img src={require('../../images/resource/blog-image-10.jpg')} alt="" title=""/></a>
                        </div>
                        <div className="lower-box">
                            <div className="category">IT Projects, Development</div>
                            <h3><a href="BlogFullPost">Efficient & Measurable Benefits of Software</a></h3>
                            <div className="text"> Information can be retrieved more quickly and with greater confidence in its accuracy. This can improve the productivity of employees. It may also improve the movement of goods and the supply of goods to customers. </div>
                            <div className="meta-info">
                                <ul className="clearfix">
                                    <li><a href="#">By Admin</a></li>
                                    <li><a href="#">24 Jan 2023</a></li>
                                    <li><a href="#">Comments: 53</a></li>
                                </ul>
                            </div>
                            <div className="more-link"><a href="BlogFullPost"><span className="fa fa-arrow-right"></span></a></div>
                        </div>
                    </div>
                </div>

            
                <div className="news-block-three">
                    <div className="inner-box">
                        <div className="image-box">
                        <OwlCarousel className="banner-carousel  theme-owl-theme  owl-carousel" loop="true" margin = {0} autoheight="true"lazyload="true" nav="true" dots="true" autoplay="true" autoplayTimeout= {6000} smartSpeed= {300} items={1}>
			
                                <div className="slide-item">
                                    <a href="BlogFullPost"><img src={require('../../images/resource/blog-image-11.jpg')}alt="" title=""/></a>
                                </div>
                              
                                <div className="slide-item">
                                    <a href="BlogFullPost"><img src={require('../../images/resource/blog-image-12.jpg')} alt="" title=""/></a>
                                </div>
                              
                                <div className="slide-item">
                                    <a href="BlogFullPost"><img src={require('../../images/resource/blog-image-13.jpg')} alt="" title=""/></a>
                                </div>
                            </OwlCarousel>
                        </div>
                        <div className="lower-box">
                            <div className="category">IT Projects, Development</div>
                            <h3><a href="BlogFullPost">Native or Cross-Platform: Mobile Apps</a></h3>
                            <div className="text"> Both native and cross-platform development methods can be used for Android and iOS operating systems, the tools, methods, benefits, and drawbacks accompanying each method should be considered when developing a mobile application.</div>
                            <div className="meta-info">
                                <ul className="clearfix">
                                    <li><a href="#">By Admin</a></li>
                                    <li><a href="#">24 Jan 2023</a></li>
                                    <li><a href="#">Comments: 53</a></li>
                                </ul>
                            </div>
                            <div className="more-link"><a href="BlogFullPost"><span className="fa fa-arrow-right"></span></a></div>
                        </div>
                    </div>
                </div>

            
                <div className="news-block-three">
                    <div className="inner-box">
                        <div className="image-box">
                            <img src={require('../../images/resource/blog-image-12.jpg')} alt="" title=""/>
                            <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="theme-btn lightbox-image video-play-btn"><span className="fa fa-play"></span></a>
                        </div>
                        <div className="lower-box">
                            <div className="category">IT Projects, Development</div>
                            <h3><a href="BlogFullPost">Vital Tips For Blockchain Products</a></h3>
                            <div className="text"> Blockchain consists of many “blocks” of untamperable data, it’s excellent for proving vital information. Identity-theft is a real threat in the online world, and using blockchain to prove your identity is the best way to protect your security and assets.</div>
                            <div className="meta-info">
                                <ul className="clearfix">
                                    <li><a href="#">By Admin</a></li>
                                    <li><a href="#">24 Jan 2023</a></li>
                                    <li><a href="#">Comments: 53</a></li>
                                </ul>
                            </div>
                            <div className="more-link"><a href="BlogFullPost"><span className="fa fa-arrow-right"></span></a></div>
                        </div>
                    </div>
                </div>

            
                <div className="news-block-four">
                    <div className="inner-box">
                        <blockquote>
                            <div className="icon"><span className="flaticon-chat-2"></span></div>
                            <div className="txt">"Everything is designed. Few things are designed well."</div>
                            <div className="info">— Brian Reed</div>
                        </blockquote>
                    </div>
                </div>

            
                <div className="news-block-three">
                    <div className="inner-box">
                        <div className="image-box">
                            <a href="BlogFullPost"><img src={require('../../images/resource/blog-image-13.jpg')}alt="" title=""/></a>
                        </div>
                        <div className="lower-box">
                            <div className="category">IT Projects, Development</div>
                            <h3><a href="BlogFullPost">Data Security With Multiple Busines Values</a></h3>
                            <div className="text">Data is a valuable asset that generates, acquires, saves, and exchanges for any company. Protecting it from internal or external corruption and illegal access protects a company from financial loss, reputational harm, consumer trust degradation, and brand erosion.</div>
                            <div className="meta-info">
                                <ul className="clearfix">
                                    <li><a href="#">By Admin</a></li>
                                    <li><a href="#">24 Jan 2023</a></li>
                                    <li><a href="#">Comments: 53</a></li>
                                </ul>
                            </div>
                            <div className="more-link"><a href="BlogFullPost"><span className="fa fa-arrow-right"></span></a></div>
                        </div>
                    </div>
                </div>

            </div>

           
            <div className="pagination-box">
                <ul className="styled-pagination">
                    <li><a href="#" className="active">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#" className="next"><span className="fa fa-arrow-right"></span></a></li>
                </ul>
            </div>

        </div>
    </section>

    <div className="theme-separator"></div>
    </>
    )
}
}
export default blogfullwidth