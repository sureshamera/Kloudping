import React , { Component }from 'react'
import Background4 from '../../images/background/image-1.jpg';
import pattern from '../../images/background/pattern-2.png';
import '../../css/style.css'
class casesingle extends Component {
    componentDidMount(){
       

    }
  render() {
  return (
    <>
 <section className="inner-banner alternate">
        <div className="image-layer"  style={{ background: `url(${Background4})`}}  ></div>
        <div className="auto-container">
            <div className="inner">
                <div className="title-box">
                    <h1>Case Studies</h1>
                    <div className="d-text">Building a relationship between IT Services</div>
                </div>
            </div>
        </div>
    </section>

    <section className="case-single-section">
        <div className="auto-container">
            <div className="case-inner">
                
             
                <div className="case-images">
                    <div className="row clearfix">
                        
                        <div className="image-column col-lg-8 col-md-8 col-sm-12">
                            <figure className="image">
                                <a href="images/resource/case-image-6.jpg" className="lightbox-image"><img src={require('../../images/resource/case-image-6.jpg')}    alt=""/></a>
                            </figure>
                        </div>
                        
                        <div className="image-column col-lg-4 col-md-4 col-sm-12">
                            <figure className="image">
                                <a href="images/resource/case-image-7.jpg" className="lightbox-image"><img src={require('../../images/resource/case-image-7.jpg')}    alt=""/></a>
                            </figure>
                        </div>
                    </div>
                </div>
                
           
                <div className="cases-title">
                    <div className="row clearfix">
                        <div className="column col-lg-4 col-md-12 col-sm-12">
                            <h2>Data Machine <br/> Learning</h2>
                        </div>
                        <div className="column col-lg-8 col-md-12 col-sm-12">
                            <div className="row clearfix">
                                <div className="info-column col-lg-4 col-md-4 col-sm-12">
                                    <div className="inner">
                                        <h3>Date</h3>
                                        <div className="text">8 Dec 2019</div>
                                    </div>
                                </div>
                                <div className="info-column col-lg-4 col-md-4 col-sm-12">
                                    <div className="inner">
                                        <h3>Client Name</h3>
                                        <div className="text">Jhone Doe</div>
                                    </div>
                                </div>
                                <div className="info-column col-lg-4 col-md-4 col-sm-12">
                                    <div className="inner">
                                        <h3>Project Type</h3>
                                        <div className="text">Data Analysis</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
         
                
                <div className="bold-text">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</div>
                <div className="text">
                    <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                    <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple</p>
                </div>
                <div className="two-column clearfix">
                    <div className="row clearfix">
                     
                        <div className="content-column col-lg-5 col-md-12 col-sm-12">
                            <h3>SEO Result, Increase Visitors 65%</h3>
                            <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway </p>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple</p>
                        </div>
                        
                        <div className="image-column col-lg-7 col-md-12 col-sm-12">
                            <div className="row clearfix">
                                <div className="column col-md-6 col-sm-12">
                                    <div className="image">
                                        <a href="images/resource/case-image-8.jpg" className="lightbox-image"><img src={require('../../images/resource/case-image-8.jpg')}    alt=""/></a>
                                    </div>
                                </div>
                                <div className="column col-md-6 col-sm-12">
                                    <div className="image">
                                        <a href="images/resource/case-image-9.jpg" className="lightbox-image"><img src={require('../../images/resource/case-image-9.jpg')}    alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section className="contact-info-section"  style={{ background: `url(${pattern})`,backgroundColor:"#3d4a66",backgroundPosition:"center",backgroundRepeat: "no-repeat", backgroundSize: "cover"}}      >
        <div className="auto-container">
            <h3>Any Queries? Don’t Hesitate? Feel Free to Make a Call</h3>
            <div className="info-blocks">
                <div className="row clearfix">
                   
                    <div className="info-block col-md-6 col-sm-6 col-xs-12">
                        <div className="inner">
                            <div className="icon-box">
                                <span className="icon fa fa-envelope"></span>
                            </div>
                            <div className="text"><a href="mailto:support@kloudping.com">support@kloudping.com</a></div>
                        </div>
                    </div>
                    
                   
                    <div className="info-block col-md-6 col-sm-6 col-xs-12">
                        <div className="inner">
                            <div className="icon-box">
                                <span className="icon fa fa-phone-alt"></span>
                            </div>
                            <div className="text"><a href="tel:(+1)-500.369.2580">+91 89035 00142</a></div>
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
export default casesingle