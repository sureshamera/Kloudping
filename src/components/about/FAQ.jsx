import React, { Component } from 'react'
import Back3 from "../../images/background/banner-bg-2.jpg"
import { Accordion } from 'react-bootstrap'


const FAQ = () =>{
 
  
    return (
      <>
         <section className="inner-banner alternate">
        <div className="image-layer"  style={{ background: `url(${Back3})`}}></div>
		<div className="auto-container">
            <div className="inner">
    			<div className="title-box">
                    <h1>Read FAQ’s</h1>
                    <div className="d-text">Building a relationship between IT Services</div>
                </div>
            </div>
		</div>
    </section>
       
        <section className="faqs-section">
        <div className="auto-container">
            <div className="row clearfix">
              
                <div className="column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                        <div className="accordion-box" >
                        
                            <Accordion className="accordion block">
                                <Accordion.Item eventKey="0"   >
                                <Accordion.Header className="acc-btn" style={{backgroundColor: "#4a3d8f"}} > <strong style={{color:"white"}}>What type of services Kloudping offers? </strong> <div className="icon flaticon-down-arrow"></div></Accordion.Header>
                              
                                    <Accordion.Body className="content">
                                       Dolor sit amet, consectetur adipisicing elitm sed do eiusmod ut labore etsu dolore magna aliquatenim minim.et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                                    </Accordion.Body>
                                    </Accordion.Item >
                                    <Accordion.Item eventKey="1" >
                                    <Accordion.Header className="acc-btn" style={{backgroundColor: "#4a3d8f"}}><strong style={{color:"white"}}> Why your working process is very simple?</strong><div className="icon flaticon-down-arrow"></div></Accordion.Header>
                              
                              <Accordion.Body className="content">
                              Plan and execute strategic initiatives in the same place where you manage daily service requests. Boost productivity by unifying and automating end-to-end IT workflows.
                              </Accordion.Body>
                              </Accordion.Item >

                              <Accordion.Item eventKey="2" >
                                    <Accordion.Header className="acc-btn" style={{backgroundColor: "#4a3d8f"}}><strong style={{color:"white"}}> How do you manage IT Services?</strong><div className="icon flaticon-down-arrow"></div></Accordion.Header>
                              
                              <Accordion.Body className="content">
                              Dolor sit amet, consectetur adipisicing elitm sed do eiusmod ut labore etsu dolore magna aliquatenim minim.et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                              </Accordion.Body>
                              </Accordion.Item >

                              <Accordion.Item eventKey="3" >
                                    <Accordion.Header className="acc-btn" style={{backgroundColor: "#4a3d8f"}}><strong style={{color:"white"}}> How to book an appointment with experts? </strong><div className="icon flaticon-down-arrow"></div></Accordion.Header>
                              
                              <Accordion.Body className="content">
                              Dolor sit amet, consectetur adipisicing elitm sed do eiusmod ut labore etsu dolore magna aliquatenim minim.et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                              </Accordion.Body>
                              </Accordion.Item >
                              
                           </Accordion> 
                     </div>
                    </div>
              </div>
              <div className="column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                        <div className="accordion-box">
                        <Accordion className="accordion block">
                                <Accordion.Item eventKey="0"   >
                                <Accordion.Header className="acc-btn" style={{backgroundColor: "#4a3d8f"}} > <strong style={{color:"white"}}>How Kloudping IT Solutions can benefit our business? </strong> <div className="icon flaticon-down-arrow"></div></Accordion.Header>
                              
                                    <Accordion.Body className="content">
                                       Dolor sit amet, consectetur adipisicing elitm sed do eiusmod ut labore etsu dolore magna aliquatenim minim.et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                                    </Accordion.Body>
                                    </Accordion.Item >
                                    <Accordion.Item eventKey="1" >
                                    <Accordion.Header className="acc-btn" style={{backgroundColor: "#4a3d8f"}}><strong style={{color:"white"}}>How many clients do you have?</strong><div className="icon flaticon-down-arrow"></div></Accordion.Header>
                              
                              <Accordion.Body className="content">
                              Plan and execute strategic initiatives in the same place where you manage daily service requests. Boost productivity by unifying and automating end-to-end IT workflows.
                              </Accordion.Body>
                              </Accordion.Item >

                              <Accordion.Item eventKey="2" >
                                    <Accordion.Header className="acc-btn" style={{backgroundColor: "#4a3d8f"}}><strong style={{color:"white"}}>How can I subscribe to latest IT news?</strong><div className="icon flaticon-down-arrow"></div></Accordion.Header>
                              
                              <Accordion.Body className="content">
                              Dolor sit amet, consectetur adipisicing elitm sed do eiusmod ut labore etsu dolore magna aliquatenim minim.et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                              </Accordion.Body>
                              </Accordion.Item >

                              <Accordion.Item eventKey="3" >
                                    <Accordion.Header className="acc-btn" style={{backgroundColor: "#4a3d8f"}}><strong style={{color:"white"}}>What business you recommend to start with?</strong><div className="icon flaticon-down-arrow"></div></Accordion.Header>
                              
                              <Accordion.Body className="content">
                              Dolor sit amet, consectetur adipisicing elitm sed do eiusmod ut labore etsu dolore magna aliquatenim minim.et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                              </Accordion.Body>
                              </Accordion.Item >

                              <Accordion.Item eventKey="4" >
                                    <Accordion.Header className="acc-btn" style={{backgroundColor: "#4a3d8f"}}><strong style={{color:"white"}}>How to benefit from Data Machine Learning?</strong><div className="icon flaticon-down-arrow"></div></Accordion.Header>
                              
                              <Accordion.Body className="content">
                              Dolor sit amet, consectetur adipisicing elitm sed do eiusmod ut labore etsu dolore magna aliquatenim minim.et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                              </Accordion.Body>
                              </Accordion.Item >
                              
                           </Accordion> 
                    

                        </div>
                    </div>
                </div>

            </div>

            <div className="load-more link-box">
                <a href="FAQ" className="theme-btn btn-style-one"><div className="btn-title">Load More</div></a>
            </div>

        </div>
    </section>

    <section className="call-to-action">
        <div className="map-pattern-layer"></div>

        <div className="auto-container">
            <div className="row clearfix">
                <div className="title-column col-xl-7 col-lg-12 col-md-12 col-sm-12">
                    <div className="inner">
                        <h2>Do You Need Our IT Solutions? <br/>Get Advice From Our Professionals.</h2>
                    </div>
                </div>
                <div className="links-column col-xl-5 col-lg-12 col-md-12 col-sm-12">
                    <div className="inner">
                        <div className="links-box">
                            <a href='/#contact' className="theme-btn btn-style-two"><div className="btn-title">Make a Request</div></a>
                            <a href='/#contact' className="theme-btn btn-style-one"><div className="btn-title">Talk With Expert</div></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
            </>
    )  
}

 export default FAQ