import React, { Component } from 'react'
import Back6 from '../../images/background/banner-bg-1.jpg';
class Itstartup extends Component {
  componentDidMount() {
     }
  render() {
      return (
        <>
        <section className="inner-banner alternate">
        <div className="image-layer" style={{ background: `url(${Back6})`}}></div>
        <div className="auto-container">
            <div className="inner">
                <div className="title-box">
                    <h1>IT Startup Projects</h1>
                    <div className="d-text">Building a relationship between IT Services</div>
                </div>
            </div>
        </div>
          </section>
          <div className="sidebar-page-container services-page">
        <div className="auto-container">
            <div className="row clearfix">
                
                
                <div className="content-side col-lg-8 col-md-12 col-sm-12">
                    <div className="services-content">
                        <div className="service-details">
                            <div className="image-box">
                        <img src={require('../../images/resource/service-single-image.jpg')} alt=""/>
                            </div>
                           
                            <div className="content">
                                <h3>IT Startup Projects</h3>
                                <div className="text">
                                    <p>The ship set ground on the shore that this group would somehow form a family that's the way the Love Boat promis something for everyone that this group would somehow form a family that's the way we all became the brady bunch  that this group a family that's the way the Love Boat promises something for everyone that this group would some is how form a family that's the way we all became the brady bunch that this group.</p>
                                    <p>This group would somehow form a family that's the way we all became the brady bunch that this group a family of a that's the way the Love Boat promises something for everyone that this group would some is how form a family mas that's the way we all became the brady bunch that this group.</p>
                                    <p>The old somehow form a family that's the way the Love Boat promis something for everyone that this group would somehow form a family that's the way we all became the brady bunch  that this group a family that's the way the Love Boat promises something for everyone that this group would some is how form a family that's the way we all became the brady bunch that this group.</p>
                                </div>
                                
                                <div className="two-col">
                                    <div className="row clearfix">
                                        <div className="column col-lg-6 col-md-6 col-sm-12">
                              <div className="image"><img src={require('../../images/resource/featured-image-4.jpg')} alt=""/></div>
                                        </div>
                                        <div className="column col-lg-6 col-md-6 col-sm-12">
                                            <div className="image"><img src={require('../../images/resource/featured-image-5.jpg')} alt=""/></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text">
                                    <p>The old somehow form a family that's the way the Love Boat promis something for everyone that this group would somehow form a family that's the way we all became the brady bunch  that this group a family that's the way the Love Boat promises something for everyone that this group would some is how form a family that's the way we all became the brady bunch that this group.</p>

                                    <ul className="list-style-one">
                                        <li>The old somehow form a family that's the way the Love Boat promis something for everyone that this group would somehow form.</li>
                                        <li>The Love Boat promis someg for everyone. </li>
                                        <li>The old somehow form a family that's the way the Love Boat promis something for everyone that this group would somehow form.</li>
                                        <li>Boat promises something for everyone that this groupfor everyone that this group.</li>
                                        <li>The old somehow form a family that's the way the Love Boat promis something for everyone that this group would somehow form.</li>
                                        <li>The old somehow form a family that's the way to morries.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
                    <aside className="sidebar services-sidebar">
                        
                        <div className="sidebar-widget services-widget">
                            <div className="widget-inner">
                                <ul>
                                    <li><a href="Datainfrastructure">Data Infrastructure</a></li>
                                    <li><a href="cloudintegration">IT Cloud Integration</a></li>
                                    <li className="active"><a href="Itstartup">IT Startup Projects</a></li>
                                    <li><a href="productengineering">Product Engineering</a></li>
                                    <li><a href="BusinessSecurity">Business Security</a></li>
                                </ul>
                            </div>
                    </div>
                    <div className="sidebar-widget downloads-widget">
                            <div className="sidebar-title">
                                <h3>Related Downloads</h3>
                            </div>
                            <div className="widget-inner">
                                <ul>
                                    <li><a href="#"><span className="far fa-file-pdf"></span> Presentation PDF</a></li>
                                    <li><a href="#"><span className="far fa-file-pdf"></span> Brochure Guide</a></li>
                                    <li><a href="#"><span className="far fa-file-pdf"></span> our Service Areas</a></li>
                                </ul>
                            </div>
                    </div>
                    <div className="sidebar-widget info-widget">
                            <div className="widget-inner">
                        <div className="image"><a href="#"><img src={require('../../images/resource/featured-image-4.jpg')} alt=""/></a></div>
                                <div className="lower">
                                    <div className="subtitle">Got any Questions? <br/> Call us Today!</div>
                                    <div className="icon-box"><span className="flaticon-telephone"></span></div>
                                    <div className="phone"><a href="tel:+91 8903500142">+91 8903500142</a></div>
                                    <div className="email"><a href="mailto:support@Kloudping.net">support@Kloudping.net</a></div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
                
            </div>
        </div>
          </div>
          <div className="theme-separator"></div>
        </>
        )
    }
}
export default Itstartup