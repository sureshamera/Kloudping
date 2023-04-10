import React , { Component }from 'react'

class blogsingle extends Component {
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
                    <h1>Full Blog Post</h1>
                    <div className="d-text">Building a relationship between IT Services</div>
                </div>
            </div>
		</div>
    </section>

    <div className="sidebar-page-container">
        <div className="auto-container">
            <div className="row clearfix">
                
                
                <div className="content-side col-lg-9 col-md-12 col-sm-12">
                    <div className="blog-content">
                        
                        <div className="post-details">
                           
                            <div className="news-block-three">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <img src={require('../../images/resource/blog-image-14.jpg')} alt="" title=""/>
                                    </div>
                                    <div className="lower-box">
                                        <div className="category">IT Projects, Development</div>
                                        <h3>Efficient & Measurable Benefits of Software</h3>
                                        <div className="meta-info">
                                            <ul className="clearfix">
                                                <li><a href="#">By Admin</a></li>
                                                <li><a href="#">24 Jan 2023</a></li>
                                                <li><a href="#">Comments: 53</a></li>
                                            </ul>
                                        </div>

                                        <div className="text">
                                            <p>Dolor sit amet, consectetur adipisicing elitm sed don eiusmod tempor sed incididunt ut labore etsu dolore magna aliqua tenim minim veniam quis ipsum nostrud exerpsum citation ullamco laboris nisiut aliquip consequat. Duis aute irure dolorn reprehenderit voluptate velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>

                                            <blockquote>
                                                We are committed to providing quality IT Services our benefits are endless for local IT Companies & Startups, really know the true needs and expectations of customers, talented & experienced management solutions.
                                            </blockquote>

                                            <p>Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus.</p>

                                            <div className="two-col row clearfix">
                                                <div className="image-column col-md-6 col-sm-12">
                                                    <div className="image"><img src={require('../../images/resource/blog-image-15.jpg')} alt=""/></div>
                                                </div>

                                                <div className="image-column col-md-6 col-sm-12">
                                                    <div className="image"><img src={require('../../images/resource/blog-image-16.jpg')}alt=""/></div>
                                                </div>
                                            </div>

                                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa lorem ipsum dolor sit amet, con velit esse cillum dolore eu fugiat nulla pariatur totam rem aperiam.</p>

                                        </div>
                                    </div>

                                    <div className="lower-row clearfix">
                                        <div className="tags">
                                            <span className="icon sl-icon-tag"></span>
                                            <a href="#">CaseStudies</a>, <a href="#">Business</a>, <a href="#">IT Services</a>
                                        </div>

                                        <div className="share-it">
                                            <a href="#" className="share-toggler"><span className="icon sl-icon-share"></span> Share This</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="author-box">
                                <div className="inner-box">
                                    <figure className="thumb"><img src={require('../../images/resource/author-thumb-4.jpg')}alt=""/></figure>
                                    <h3 className="name">Mark Hamburg</h3>
                                    <div className="text">Eiusmod tem sed incididunt labore dolore magna sed aliquatenim minim veniam quis ipsum nostrud exercitation ullamco nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</div>
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

                           
                            <div className="comments-area">
                                <div className="comments-title">
                                    <h2>Comments (2)</h2>
                                </div>
                                <div className="comment-box">
                                    <div className="comment">
                                        <div className="author-thumb">
                                            <figure className="thumb"><img src={require('../../images/resource/author-thumb-5.jpg')} alt=""/></figure>
                                        </div> 
                                        <div className="info">
                                            <div className="name">Robert Gates</div>
                                            <div className="date">24 Jan 2023</div>
                                            <div className="reply-btn"><a href="#"><span className="fa fa-reply"></span> Reply</a></div>
                                        </div>
                                        <div className="text">Aenean volutpat, sem sit amet ullamcorper gravida, tortor arcu molestie risus ut bibendum urna enim nulla. Pellentesque porta arcu velit, faucibus kodales dolor.</div>

                                    </div>
                                </div>

                                <div className="comment-box">
                                    <div className="comment">
                                        <div className="author-thumb">
                                            <figure className="thumb"><img src={require('../../images/resource/author-thumb-4.jpg')} alt=""/></figure>
                                        </div> 
                                        <div className="info">
                                            <div className="name">Amanda Tim</div>
                                            <div className="date">24 Jan 2023</div>
                                            <div className="reply-btn"><a href="#"><span className="fa fa-reply"></span> Reply</a></div>
                                        </div>
                                        <div className="text">Aenean volutpat, sem sit amet ullamcorper gravida, tortor arcu molestie risus ut bibendum urna enim nulla. Pellentesque porta arcu velit, faucibus kodales dolor.</div>
                                        
                                    </div>
                                </div>

                            </div>

                            
                            <div className="leave-comments">
                                <div className="comments-title">
                                    <h2>Leave A Reply</h2>
                                    <div className="instruction">Your email address will not be published. Required fields are marked *</div>
                                </div>
                                <div className="default-form comment-form">
                                    <form method="post" action="http://t.commonsupport.xyz/zentec/contact.html">
                                        <div className="row clearfix">                                    
                                            <div className="col-md-6 col-sm-12 form-group">
                                                <input type="text" name="username" placeholder="Your Name" required=""/>
                                            </div>
                                            
                                            <div className="col-md-6 col-sm-12 form-group">
                                                <input type="email" name="email" placeholder="Email" required=""/>
                                            </div>

                                            <div className="col-md-12 col-sm-12 form-group">
                                                <textarea name="message" placeholder="Your Comments"></textarea>
                                            </div>
                    
                                            <div className="col-md-12 col-sm-12 form-group">
                                                <button type="submit" className="theme-btn btn-style-one"><span className="btn-title">Post Comment</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

             
                <div className="sidebar-side col-lg-3 col-md-12 col-sm-12">
                    <aside className="sidebar blog-sidebar">
                     
                        <div className="sidebar-widget search-box">
                            <form method="post" action="http://t.commonsupport.xyz/zentec/blog.html">
                                <div className="form-group">
                                    <input type="search" name="search-field" defaultValue="" placeholder="Search.." required=""/>
                                    <button type="submit"><span className="icon fa fa-search"></span></button>
                                </div>
                            </form>

                        </div>
                        <div className="sidebar-widget archives">
                            <div className="widget-inner">
                                <div className="sidebar-title">
                                    <h3>Categories</h3>
                                </div>

                                <ul>
                                    <li><a href="#">Business</a></li>
                                    <li className="active"><a href="#">IT Solutions</a></li>
                                    <li><a href="#">IT Development</a></li>
                                    <li><a href="#">Data Security</a></li>
                                    <li><a href="#">Startup Professionals</a></li>
                                    <li><a href="#">Digital Marketing</a></li>
                                    <li><a href="#">Strategies</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="sidebar-widget recent-posts">
                            <div className="widget-inner">
                                <div className="sidebar-title">
                                    <h3>Recent Posts</h3>
                                </div>

                                <div className="post">
                                    <figure className="post-thumb"><img src={require('../../images/resource/post-thumb-1.jpg')} alt=""/></figure>
                                    <h3 className="text"><a href="#">Commercial Apps Multi Platform and Device</a></h3>
                                    <div className="meta-info">
                                        <ul className="clearfix">
                                            <li><a href="#">By Admin</a></li>
                                            <li><a href="#">24 Jan 2023</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="post">
                                    <figure className="post-thumb"><img src={require('../../images/resource/post-thumb-2.jpg')}alt=""/></figure>
                                    <h3 className="text"><a href="#">Leverage the Spectrum of Technologies</a></h3>
                                    <div className="meta-info">
                                        <ul className="clearfix">
                                            <li><a href="#">By Admin</a></li>
                                            <li><a href="#">24 Jan 2023</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="post">
                                    <figure className="post-thumb"><img src={require('../../images/resource/post-thumb-3.jpg')}alt=""/></figure>
                                    <h3 className="text"><a href="#">Efficient & Mesaurable Benefits of Software</a></h3>
                                    <div className="meta-info">
                                        <ul className="clearfix">
                                            <li><a href="#">By Admin</a></li>
                                            <li><a href="#">24 Jan 2023</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-widget popular-tags">
                            <div className="widget-inner">
                                <div className="sidebar-title">
                                    <h3>Popular Tags</h3>
                                    
                                </div>
                                <ul className="tags-list clearfix">
                                    <li><a href="#">IT Solutions</a></li>
                                    <li><a href="#">Business</a></li>
                                    <li><a href="#">Security</a></li>
                                    <li><a href="#">Power & Energy</a></li>
                                    <li><a href="#">IT Services</a></li>
                                    <li><a href="#">Digital</a></li>
                                    <li><a href="#">Software</a></li>
                                    <li><a href="#">Marketing</a></li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
                
            </div>
        </div>
    </div>

  
    </>
    )
}
}
export default blogsingle