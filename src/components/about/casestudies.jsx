import React, { Component } from 'react'
import Back2 from "../../images/resource/case-image-3.jpg"
import WOW from 'wowjs';
class casestudies extends Component {
  componentDidMount() {
    new WOW.WOW({
    live: false
}).init();

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
                <h1>Case Studies</h1>
                <div className="d-text">Building a relationship between IT Services</div>
              </div>
            </div>
          </div>
        </section>
        <section className="cases-section-two cases-page">

        <div className="auto-container">

            <div className="sec-title centered">
                <div className="upper-text">IT Related CaseStudies & Works</div>
                <h2><strong>Featured Case Study</strong></h2>
            </div>
            <div className="case-block-two wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="inner-box clearfix">
                    <div className="image-column">
                        <div className="image-layer" style={{ background: `url(${Back2})`}}></div>
                        <figure className="image-box">
                    <img src={require('../../images/resource/case-image-3.jpg')} alt="" title=""/>
                        </figure>
                        <a className="link-layer" href="case-single.html"></a>
                    </div>
                    <div className="content-column">
                        <div className="content-box">
                            <div className="title-box">
                                <h3><a href="case-single.html">Data Machine Learning</a></h3>
                                <div className="sub-text">Artificial Intelligence</div>
                            </div>
                            <div className="text-content">
                                <div className="text">Data cloud is a crucial component in the field of Machine Learning.It refers to the set of observations or measurements that can be used to train a machine-learning model.</div>
                                <div className="link-box"><a href="case-single.html">View Case Study <span className="arrow fa fa-arrow-right"></span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </section>
        
        <div className="theme-separator"></div>
<section className="cases-section cases-page">
        <div className="auto-container">
		<div className="cases-box">
                <div className="row clearfix">
				<div className="case-block col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <figure className="image-box">
                    <a href="case-single.html"><img src={require('../../images/resource/case-image-1.jpg')} alt="" title=""/></a>
                            </figure>
                            <div className="content-box">
                                <div className="title-box">
                                    <h4><a href="case-single.html">Workflow Management</a></h4>
                                    <div className="sub-text">IT Networking</div>
                                </div>
                                <div className="text-content">
                                    <div className="text">Workflow management is the discipline of creating, documenting, monitoring and improving upon the series of steps, or workflow, that is required to complete a specific task.</div>
                                    <div className="link-box"><a href="case-single.html">View Case Study <span className="arrow fa fa-arrow-right"></span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
					<div className="case-block col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <figure className="image-box">
                    <a href="case-single.html"><img src={require('../../images/resource/case-image-2.jpg')} alt="" title=""/></a>
                            </figure>
                            <div className="content-box">
                                <div className="title-box">
                                    <h4><a href="case-single.html">Data Machine Learning</a></h4>
                                    <div className="sub-text">Artificial Intelligence</div>
                                </div>
                                <div className="text-content">
                                    <div className="text">Data cloud is a crucial component in the field of Machine Learning.It refers to the set of observations or measurements that can be used to train a machine-learning model.</div>
                                    <div className="link-box"><a href="case-single.html">View Case Study <span className="arrow fa fa-arrow-right"></span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
					<div className="case-block col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <figure className="image-box">
                    <a href="case-single.html"><img src={require('../../images/resource/case-image-4.jpg')} alt="" title=""/></a>
                            </figure>
                            <div className="content-box">
                                <div className="title-box">
                                    <h4><a href="case-single.html">Workflow Management</a></h4>
                                    <div className="sub-text">IT Networking</div>
                                </div>
                                <div className="text-content">
                                    <div className="text">Workflow management is the discipline of creating, documenting, monitoring and improving upon the series of steps, or workflow, that is required to complete a specific task.</div>
                                    <div className="link-box"><a href="case-single.html">View Case Study <span className="arrow fa fa-arrow-right"></span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="case-block col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <figure className="image-box">
                    <a href="case-single.html"><img src={require('../../images/resource/case-image-5.jpg')} alt="" title=""/></a>
                            </figure>
                            <div className="content-box">
                                <div className="title-box">
                                    <h4><a href="case-single.html">Data Machine Learning</a></h4>
                                    <div className="sub-text">Artificial Intelligence</div>
                                </div>
                                <div className="text-content">
                                    <div className="text">Data cloud is a crucial component in the field of Machine Learning.It refers to the set of observations or measurements that can be used to train a machine-learning model.</div>
                                    <div className="link-box"><a href="case-single.html">View Case Study <span className="arrow fa fa-arrow-right"></span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
 </div>
        </section>
        <div className="theme-separator"></div>
        </>
    )  
}
}
            export default casestudies