import React, { Component } from 'react'
import Background3 from '../../images/background/banner-bg-2.jpg';
import $ from "jquery"

class contact extends React.Component {
    


    componentDidMount() {
       $('.numberOnly').keypress(function(event)
        {
            if(event.which != 8 && isNaN(String.fromCharCode(event.which))){
                event.preventDefault(); //stop character from entering input
            }
     
        });
        $( ".txtOnly" ).keypress(function(e) {
            var key = e.keyCode;
            if (key >= 48 && key <= 57) {
                e.preventDefault();
            }
        });
   
        $("button").click(function(){
            debugger;
            var model=  {
                name:document.getElementById('name').value,
                phone:document.getElementById('phone').value,
                email:document.getElementById('email').value,
                subject:document.getElementById('subject').value,
                message:document.getElementById('message').value
                
              };
              $.ajax({
                url:"http://localhost:7071/api/SendEmail",
                type:"POST",
                data:model,
                contentType:"application/json; charset=utf-8",
                dataType:"json",
                success: function(){
                    debugger;
                    alert("Data: " + model + "\nStatus: " );
                }
              })

          
        });
      
  }
  render() {
 
    return (
        <>
            <section className="inner-banner alternate">
                <div className="image-layer" style={{ background: `url(${Background3})` }}></div>
                <div className="auto-container">
                    <div className="inner">
                        <div className="title-box">
                            <h1>Contact</h1>
                            <div className="d-text">Building a relationship between IT Services</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-section-two">
                <div className="auto-container">
                    <div className="upper-row">
                        <div className="row clearfix">

                            <div className="text-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner">
                                    <div className="sec-title">
                                        <div className="upper-text">Kloudping - Send us a Message</div>
                                        <h2>Do You Have Any Questions? We’ll Be Happy To Assist!</h2>
                                        <div className="lower-text">We will respond to your inquiry as soon as possible. Right now, we receive many inquiries and it may take a little longer than normal before you get a reply. If you need urgent help, we recommend that you call us during our opening hours..</div>
                                    </div>

                                    <div className="social-links">
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

                            <div className="form-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner">

                                    <div className="form-box">
                                        <div className="default-form contact-form">
                                            
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group txtOnly">
                            <input id="name"  type="text"  name="username" placeholder="Your Name" />
                                                    </div>

                                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                            <input id ="email"  type="email" name="email" placeholder="Email"  />
                                                    </div>

                                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group numberOnly">
                            <input id="phone"   type="text" name="phone"  placeholder="Phone"  />
                                                    </div>

                                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                            <input  id="subject"  type="text" name="subject" placeholder="Subject"  />
                                                    </div>


                                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                        <textarea id="message" name="message" placeholder="Message" ></textarea>
                                                    </div>

                                                    <div className="form-group col-md-12 col-sm-12">
                                                        <button type="submit" className="theme-btn btn-style-one"><span className="btn-title">Make a Request</span></button>
                                                    </div>
                                                </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="lower-row">
                        <div className="row clearfix">

                            <div className="contact-info-block col-lg-4 col-md-6 col-sm-12">
                                <div className="inner wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="content-box">
                                        <div className="title-box">
                                            <h4><a href="case-studies.html">Asia Office</a></h4>
                                            <div className="sub-text">Singapore</div>
                                        </div>
                                        <div className="text-content">
                                            <div className="info">
                                                <ul>
                                                    <li>No: 28, near GH, Scuddar Nagar, Tindivanam, Tamil Nadu 604001</li>
                                                    <li>Call us <a href="tel:(+1)-500.369.2580"><strong> +91 8903500142</strong></a></li>
                                                    <li><a href="mailto:support@Kloudping.com">support@Kloudping.com</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="map-box">
                                   
                                    <iframe className="map-canvas"
            src="https://maps.google.com/maps?q=No:%2028,%20near%20GH,%20Scuddar%20Nagar,%20Tindivanam,%20Tamil%20Nadu%20604001&t=&z=13&ie=UTF8&iwloc=&output=embed"
           allowFullScreen=""
            loading="lazy"
        ></iframe>
                                    </div>

                                </div>
                            </div>

                            <div className="contact-info-block col-lg-4 col-md-6 col-sm-12">
                                <div className="inner wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="content-box">
                                        <div className="title-box">
                                            <h4><a href="case-studies.html">USA Office</a></h4>
                                            <div className="sub-text">California</div>
                                        </div>
                                        <div className="text-content">
                                            <div className="info">
                                                <ul>
                                                    <li>No: 28, near GH, Scuddar Nagar, Tindivanam, Tamil Nadu 604001</li>
                                                    <li>Call us <a href="tel:(+1)-500.369.2580"><strong> +91 8903500142</strong></a></li>
                                                    <li><a href="mailto:support@Kloudping.com">support@Kloudping.com</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="map-box">
                                    <iframe className="map-canvas"
            src="https://maps.google.com/maps?q=32/9,%20bharathi%20complex%201st%20floor,%20Vallalar%20St,%20Panruti,%20Tamil%20Nadu%20607106&t=&z=13&ie=UTF8&iwloc=&output=embed"
           allowFullScreen=""
            loading="lazy"
        ></iframe>
                                    </div>

                                </div>
                            </div>

                            <div className="contact-info-block col-lg-4 col-md-6 col-sm-12">
                                <div className="inner wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="content-box">
                                        <div className="title-box">
                                            <h4><a href="case-studies.html">Europe office</a></h4>
                                            <div className="sub-text">Manchester, UK</div>
                                        </div>
                                        <div className="text-content">
                                            <div className="info">
                                                <ul>
                                                    <li>No: 28, near GH, Scuddar Nagar, Tindivanam, Tamil Nadu 604001</li>
                                                    <li>Call us <a href="tel:(+1)-500.369.2580"><strong> +91 8903500142</strong></a></li>
                                                    <li><a href="mailto:support@Kloudping.com">support@Kloudping.com</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="map-box">
                                    <iframe className="map-canvas"
            src="https://maps.google.com/maps?q=32/9,%20bharathi%20complex%201st%20floor,%20Vallalar%20St,%20Panruti,%20Tamil%20Nadu%20607106&t=&z=13&ie=UTF8&iwloc=&output=embed"
           allowFullScreen=""
            loading="lazy"
        ></iframe>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="call-to-action">
                <div className="map-pattern-layer"></div>

                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="title-column col-xl-7 col-lg-12 col-md-12 col-sm-12">
                            <div className="inner">
                                <h2>Do You Need Our IT Solutions? <br />Get Advice From Our Professionals.</h2>
                            </div>
                        </div>
                        <div className="links-column col-xl-5 col-lg-12 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="links-box">
                                    <a href="contact" className="theme-btn btn-style-two"><div className="btn-title">Make a Request</div></a>
                                    <a href="contact.html" className="theme-btn btn-style-one"><div className="btn-title">Talk With Expert</div></a>
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
export default contact